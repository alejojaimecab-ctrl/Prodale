// ============================================
// 🔴 LIVE SCORES SERVICE - ESPN API Integration
// Actualización automática de resultados en vivo
// ============================================

// ---- Mapeo de nombres ESPN (inglés) → nombres de la app (español) ----
const ESPN_NAME_MAP = {
  'Mexico': 'México',
  'South Africa': 'Sudáfrica',
  'Korea Republic': 'Corea del Sur',
  'South Korea': 'Corea del Sur',
  'Czechia': 'Chequia',
  'Czech Republic': 'Chequia',
  'Canada': 'Canadá',
  'Bosnia and Herzegovina': 'Bosnia',
  'Bosnia & Herzegovina': 'Bosnia',
  'Switzerland': 'Suiza',
  'Brazil': 'Brasil',
  'Morocco': 'Marruecos',
  'Haiti': 'Haití',
  'Scotland': 'Escocia',
  'United States': 'Estados Unidos',
  'USA': 'Estados Unidos',
  'Paraguay': 'Paraguay',
  'Australia': 'Australia',
  'Turkey': 'Turquía',
  'Türkiye': 'Turquía',
  'Germany': 'Alemania',
  'Curacao': 'Curazao',
  'Curaçao': 'Curazao',
  'Ivory Coast': 'Costa de Marfil',
  "Côte d'Ivoire": 'Costa de Marfil',
  'Ecuador': 'Ecuador',
  'Netherlands': 'Países Bajos',
  'Japan': 'Japón',
  'Sweden': 'Suecia',
  'Tunisia': 'Túnez',
  'Belgium': 'Bélgica',
  'Egypt': 'Egipto',
  'Iran': 'Irán',
  'New Zealand': 'Nueva Zelanda',
  'Spain': 'España',
  'Cape Verde': 'Cabo Verde',
  'Cape Verde Islands': 'Cabo Verde',
  'Saudi Arabia': 'Arabia Saudita',
  'Uruguay': 'Uruguay',
  'France': 'Francia',
  'Senegal': 'Senegal',
  'Iraq': 'Irak',
  'Norway': 'Noruega',
  'Argentina': 'Argentina',
  'Algeria': 'Argelia',
  'Austria': 'Austria',
  'Jordan': 'Jordania',
  'Portugal': 'Portugal',
  'DR Congo': 'RD Congo',
  'Congo DR': 'RD Congo',
  'Dem. Rep. Congo': 'RD Congo',
  'Uzbekistan': 'Uzbekistán',
  'Colombia': 'Colombia',
  'England': 'Inglaterra',
  'Croatia': 'Croacia',
  'Ghana': 'Ghana',
  'Panama': 'Panamá',
  'Qatar': 'Qatar',
  'Brasil': 'Brasil'
};

// ============================================
// Clase LiveScoreService (POO)
// ============================================
class LiveScoreService {
  constructor(options = {}) {
    this.baseURL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
    this.pollInterval = options.pollInterval || 60000; // 60 segundos por defecto
    this.intervalId = null;
    this.isConnected = false;
    this.lastUpdate = null;
    this.consecutiveErrors = 0;
    this.maxRetries = 5;
    this.onUpdate = options.onUpdate || null; // Callback cuando hay cambios
  }

  // ---- Iniciar polling automático ----
  start() {
    console.log('🔴 LiveScoreService: Iniciando servicio de resultados en vivo...');
    this.updateIndicator('connecting');
    
    // Primera consulta inmediata
    this.fetchAndUpdate();
    
    // Polling periódico
    this.intervalId = setInterval(() => {
      this.fetchAndUpdate();
    }, this.pollInterval);
  }

  // ---- Detener polling ----
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.updateIndicator('offline');
    console.log('⚪ LiveScoreService: Servicio detenido.');
  }

  // ---- Consultar y actualizar ----
  async fetchAndUpdate() {
    try {
      // Obtener los partidos del día actual
      const todayData = await this.fetchScoresByDate(new Date());
      
      // También buscar partidos de ayer (por si terminaron de madrugada)
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayData = await this.fetchScoresByDate(yesterday);
      
      // Combinar eventos
      const allEvents = [
        ...(todayData?.events || []),
        ...(yesterdayData?.events || [])
      ];

      if (allEvents.length > 0) {
        const hasChanges = this.processEvents(allEvents);
        
        if (hasChanges) {
          this.lastUpdate = new Date();
          console.log(`✅ LiveScoreService: ${allEvents.length} partidos procesados. Cambios detectados.`);
          
          // Notificar cambios
          if (this.onUpdate) this.onUpdate();
          
          // Sincronizar con Firebase si está disponible
          this.syncToFirebase();
        }
      }

      this.isConnected = true;
      this.consecutiveErrors = 0;
      this.updateIndicator('connected');
      
    } catch (error) {
      this.consecutiveErrors++;
      console.warn(`⚠️ LiveScoreService: Error (intento ${this.consecutiveErrors}/${this.maxRetries}):`, error.message);
      
      if (this.consecutiveErrors >= this.maxRetries) {
        this.updateIndicator('error');
      } else {
        this.updateIndicator('retrying');
      }
    }
  }

  // ---- Consultar la API para una fecha específica ----
  async fetchScoresByDate(date) {
    const dateStr = date.getFullYear().toString() +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      date.getDate().toString().padStart(2, '0');
    
    const url = `${this.baseURL}?dates=${dateStr}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  }

  // ---- Cargar todos los partidos pasados al iniciar ----
  async fetchAllPlayedMatches() {
    console.log('📦 LiveScoreService: Cargando historial de partidos...');
    const startDate = new Date('2026-06-11');
    const today = new Date();
    const promises = [];
    
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      promises.push(this.fetchScoresByDate(new Date(d)));
    }
    
    try {
      const results = await Promise.allSettled(promises);
      const allEvents = [];
      
      results.forEach(r => {
        if (r.status === 'fulfilled' && r.value?.events) {
          allEvents.push(...r.value.events);
        }
      });
      
      if (allEvents.length > 0) {
        const hasChanges = this.processEvents(allEvents);
        if (hasChanges && this.onUpdate) {
          this.onUpdate();
          this.syncToFirebase();
        }
      }
      
      console.log(`📦 LiveScoreService: ${allEvents.length} partidos históricos procesados.`);
    } catch (e) {
      console.warn('⚠️ LiveScoreService: Error cargando historial:', e.message);
    }
  }

  // ---- Procesar eventos de ESPN y actualizar MATCHES ----
  processEvents(events) {
    let hasChanges = false;
    
    events.forEach(event => {
      try {
        const competition = event.competitions?.[0];
        if (!competition) return;
        
        // Extraer equipos
        const competitors = competition.competitors || [];
        if (competitors.length < 2) return;
        
        // En ESPN, el "home" tiene homeAway === "home"
        const homeTeam = competitors.find(c => c.homeAway === 'home');
        const awayTeam = competitors.find(c => c.homeAway === 'away');
        
        if (!homeTeam || !awayTeam) return;
        
        const espnHomeName = homeTeam.team?.displayName || homeTeam.team?.name || '';
        const espnAwayName = awayTeam.team?.displayName || awayTeam.team?.name || '';
        
        const homeName = this.resolveTeamName(espnHomeName);
        const awayName = this.resolveTeamName(espnAwayName);
        
        if (!homeName || !awayName) {
          // Si no podemos resolver el nombre, intentamos match parcial
          return;
        }
        
        // Extraer fecha del evento
        const eventDate = event.date ? event.date.substring(0, 10) : null;
        
        // Buscar el partido correspondiente en MATCHES
        const match = this.findMatch(homeName, awayName, eventDate);
        
        if (!match) return;
        
        // Si el partido tiene override manual, no tocarlo
        if (match.manualOverride) return;
        
        // Extraer estado
        const stateType = competition.status?.type?.state || 'pre';
        const newStatus = this.mapStatus(stateType);
        
        // Extraer scores
        const homeScore = parseInt(homeTeam.score) || 0;
        const awayScore = parseInt(awayTeam.score) || 0;
        
        // Extraer minuto del partido (para mostrar en vivo)
        const displayClock = competition.status?.displayClock || '';
        const statusDetail = competition.status?.type?.shortDetail || '';
        
        // Comparar con datos actuales y actualizar si hay cambios
        const scoreChanged = (newStatus === 'live' || newStatus === 'played') && 
          (match.homeScore !== homeScore || match.awayScore !== awayScore);
        const statusChanged = match.status !== newStatus;
        
        if (scoreChanged || statusChanged) {
          // Guardar estado anterior para notificaciones
          const prevStatus = match.status;
          const prevHome = match.homeScore;
          const prevAway = match.awayScore;
          
          // Actualizar
          if (newStatus === 'live' || newStatus === 'played') {
            match.homeScore = homeScore;
            match.awayScore = awayScore;
          }
          match.status = newStatus;
          match.liveMinute = displayClock;
          match.liveDetail = statusDetail;
          
          hasChanges = true;
          
          // Notificaciones
          this.notifyChange(match, prevStatus, prevHome, prevAway);
        }
        
      } catch (err) {
        console.warn('⚠️ Error procesando evento:', err);
      }
    });
    
    return hasChanges;
  }

  // ---- Buscar partido en MATCHES por nombres y fecha ----
  findMatch(homeName, awayName, eventDate) {
    // Primero: búsqueda exacta por home+away+date
    let match = MATCHES.find(m => 
      m.home === homeName && m.away === awayName && m.date === eventDate
    );
    
    if (match) return match;
    
    // A veces ESPN invierte home/away con respecto a nuestros datos
    // (en fase de grupos a veces cambian según el venue)
    // Intentar con los nombres invertidos
    match = MATCHES.find(m =>
      m.home === awayName && m.away === homeName && m.date === eventDate
    );
    
    if (match) return match;
    
    // Fallback: buscar solo por equipos sin importar la fecha (para partidos aplazados)
    match = MATCHES.find(m =>
      (m.home === homeName && m.away === awayName) ||
      (m.home === awayName && m.away === homeName)
    );
    
    return match || null;
  }

  // ---- Resolver nombre de equipo ESPN → nombre español ----
  resolveTeamName(espnName) {
    if (!espnName) return null;
    
    // Buscar en el mapa directo
    if (ESPN_NAME_MAP[espnName]) return ESPN_NAME_MAP[espnName];
    
    // Buscar case-insensitive
    const lowerName = espnName.toLowerCase();
    for (const [key, value] of Object.entries(ESPN_NAME_MAP)) {
      if (key.toLowerCase() === lowerName) return value;
    }
    
    // Buscar parcial (por si el nombre contiene algo extra)
    for (const [key, value] of Object.entries(ESPN_NAME_MAP)) {
      if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
        return value;
      }
    }
    
    // Si el nombre ya está en español (existe en FLAGS), devolverlo tal cual
    if (typeof FLAGS !== 'undefined' && FLAGS[espnName]) return espnName;
    
    console.warn(`⚠️ Nombre de equipo no mapeado: "${espnName}"`);
    return null;
  }

  // ---- Mapear estado de ESPN a nuestro formato ----
  mapStatus(espnState) {
    switch (espnState) {
      case 'pre': return 'upcoming';
      case 'in': return 'live';
      case 'post': return 'played';
      default: return 'upcoming';
    }
  }

  // ---- Notificar cambios al usuario ----
  notifyChange(match, prevStatus, prevHome, prevAway) {
    const flag1 = (typeof FLAGS !== 'undefined' && FLAGS[match.home]) || '';
    const flag2 = (typeof FLAGS !== 'undefined' && FLAGS[match.away]) || '';
    
    if (prevStatus !== 'live' && match.status === 'live') {
      // Partido acaba de empezar
      if (typeof showToast === 'function') {
        showToast(`🔴 ¡EN VIVO! ${flag1} ${match.home} vs ${match.away} ${flag2}`, 'info');
      }
    } else if (prevStatus === 'live' && match.status === 'played') {
      // Partido terminó
      if (typeof showToast === 'function') {
        showToast(`🏁 Final: ${flag1} ${match.home} ${match.homeScore} - ${match.awayScore} ${match.away} ${flag2}`, 'success');
      }
    } else if (match.status === 'live' && (match.homeScore !== prevHome || match.awayScore !== prevAway)) {
      // ¡GOL!
      const isHomeGoal = match.homeScore > (prevHome || 0);
      const scorer = isHomeGoal ? match.home : match.away;
      const scorerFlag = isHomeGoal ? flag1 : flag2;
      if (typeof showToast === 'function') {
        showToast(`⚽ ¡GOL de ${scorerFlag} ${scorer}! ${flag1} ${match.home} ${match.homeScore} - ${match.awayScore} ${match.away} ${flag2}`, 'success');
      }
    }
  }

  // ---- Sincronizar con Firebase ----
  syncToFirebase() {
    if (typeof fbWrite === 'function') {
      fbWrite('matches', MATCHES).catch(e => {
        console.warn('⚠️ LiveScoreService: Error sincronizando con Firebase:', e);
      });
    }
  }

  // ---- Actualizar indicador visual ----
  updateIndicator(status) {
    const indicator = document.getElementById('live-indicator');
    const dot = document.getElementById('live-dot');
    const text = document.getElementById('live-text');
    
    if (!indicator || !dot || !text) return;
    
    // Limpiar clases previas
    dot.className = 'live-dot';
    
    switch (status) {
      case 'connected':
        dot.classList.add('connected');
        text.textContent = 'EN VIVO';
        indicator.title = `Última actualización: ${this.lastUpdate ? this.lastUpdate.toLocaleTimeString('es-AR') : 'Conectando...'}`;
        break;
      case 'connecting':
        dot.classList.add('connecting');
        text.textContent = 'Conectando...';
        break;
      case 'retrying':
        dot.classList.add('retrying');
        text.textContent = 'Reintentando...';
        break;
      case 'error':
        dot.classList.add('error');
        text.textContent = 'Sin conexión';
        break;
      case 'offline':
        dot.classList.add('offline');
        text.textContent = 'Offline';
        break;
    }
  }
}

// ============================================
// Instancia global del servicio
// ============================================
let liveScoreService = null;

function initLiveScores() {
  liveScoreService = new LiveScoreService({
    pollInterval: 60000, // Cada 60 segundos
    onUpdate: () => {
      // Re-renderizar la sección actual
      if (typeof renderSection === 'function' && typeof currentSection !== 'undefined') {
        renderSection(currentSection);
      }
      // Actualizar puntos del header
      if (typeof updateHeaderStats === 'function') {
        updateHeaderStats();
      }
    }
  });
  
  // Cargar historial de partidos pasados primero
  liveScoreService.fetchAllPlayedMatches().then(() => {
    // Luego iniciar polling en vivo
    liveScoreService.start();
  });
}
