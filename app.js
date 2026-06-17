// ============================================
// 🏆 PRODE MUNDIAL 2026 - Application Logic
// Con Torneos Multijugador via Firebase
// ============================================

// ---- FLAGS (emoji) ----
const FLAGS = {
  'México': '🇲🇽', 'Sudáfrica': '🇿🇦', 'Corea del Sur': '🇰🇷', 'Chequia': '🇨🇿',
  'Canadá': '🇨🇦', 'Bosnia': '🇧🇦', 'Qatar': '🇶🇦', 'Suiza': '🇨🇭',
  'Brasil': '🇧🇷', 'Marruecos': '🇲🇦', 'Haití': '🇭🇹', 'Escocia': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Estados Unidos': '🇺🇸', 'Paraguay': '🇵🇾', 'Australia': '🇦🇺', 'Turquía': '🇹🇷',
  'Alemania': '🇩🇪', 'Curazao': '🇨🇼', 'Costa de Marfil': '🇨🇮', 'Ecuador': '🇪🇨',
  'Países Bajos': '🇳🇱', 'Japón': '🇯🇵', 'Suecia': '🇸🇪', 'Túnez': '🇹🇳',
  'Bélgica': '🇧🇪', 'Egipto': '🇪🇬', 'Irán': '🇮🇷', 'Nueva Zelanda': '🇳🇿',
  'España': '🇪🇸', 'Cabo Verde': '🇨🇻', 'Arabia Saudita': '🇸🇦', 'Uruguay': '🇺🇾',
  'Francia': '🇫🇷', 'Senegal': '🇸🇳', 'Irak': '🇮🇶', 'Noruega': '🇳🇴',
  'Argentina': '🇦🇷', 'Argelia': '🇩🇿', 'Austria': '🇦🇹', 'Jordania': '🇯🇴',
  'Portugal': '🇵🇹', 'RD Congo': '🇨🇩', 'Uzbekistán': '🇺🇿', 'Colombia': '🇨🇴',
  'Inglaterra': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croacia': '🇭🇷', 'Ghana': '🇬🇭', 'Panamá': '🇵🇦'
};

// ---- MATCH DATABASE ----
let MATCHES = [
  // GRUPO A
  { id: 1, group: 'A', home: 'México', away: 'Sudáfrica', date: '2026-06-11', time: '18:00', stadium: 'Estadio Azteca, Ciudad de México', homeScore: 2, awayScore: 0, status: 'played' },
  { id: 2, group: 'A', home: 'Corea del Sur', away: 'Chequia', date: '2026-06-11', time: '21:00', stadium: 'Rose Bowl, Los Ángeles', homeScore: 2, awayScore: 1, status: 'played' },
  { id: 3, group: 'A', home: 'México', away: 'Chequia', date: '2026-06-17', time: '18:00', stadium: 'Estadio Azteca, Ciudad de México', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 4, group: 'A', home: 'Sudáfrica', away: 'Corea del Sur', date: '2026-06-17', time: '21:00', stadium: 'AT&T Stadium, Dallas', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 5, group: 'A', home: 'Chequia', away: 'Sudáfrica', date: '2026-06-23', time: '18:00', stadium: 'Rose Bowl, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 6, group: 'A', home: 'Corea del Sur', away: 'México', date: '2026-06-23', time: '18:00', stadium: 'Estadio Azteca, Ciudad de México', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO B
  { id: 7, group: 'B', home: 'Canadá', away: 'Bosnia', date: '2026-06-12', time: '13:00', stadium: 'BC Place, Vancouver', homeScore: 1, awayScore: 1, status: 'played' },
  { id: 8, group: 'B', home: 'Qatar', away: 'Suiza', date: '2026-06-13', time: '13:00', stadium: 'BMO Field, Toronto', homeScore: 1, awayScore: 1, status: 'played' },
  { id: 9, group: 'B', home: 'Canadá', away: 'Suiza', date: '2026-06-18', time: '13:00', stadium: 'BC Place, Vancouver', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 10, group: 'B', home: 'Bosnia', away: 'Qatar', date: '2026-06-18', time: '16:00', stadium: 'BMO Field, Toronto', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 11, group: 'B', home: 'Suiza', away: 'Bosnia', date: '2026-06-24', time: '16:00', stadium: 'BMO Field, Toronto', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 12, group: 'B', home: 'Qatar', away: 'Canadá', date: '2026-06-24', time: '16:00', stadium: 'BC Place, Vancouver', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO C
  { id: 13, group: 'C', home: 'Brasil', away: 'Marruecos', date: '2026-06-13', time: '16:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: 1, awayScore: 1, status: 'played' },
  { id: 14, group: 'C', home: 'Haití', away: 'Escocia', date: '2026-06-13', time: '19:00', stadium: 'Hard Rock Stadium, Miami', homeScore: 0, awayScore: 1, status: 'played' },
  { id: 15, group: 'C', home: 'Brasil', away: 'Escocia', date: '2026-06-19', time: '16:00', stadium: 'Hard Rock Stadium, Miami', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 16, group: 'C', home: 'Marruecos', away: 'Haití', date: '2026-06-19', time: '19:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 17, group: 'C', home: 'Escocia', away: 'Marruecos', date: '2026-06-25', time: '19:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 18, group: 'C', home: 'Haití', away: 'Brasil', date: '2026-06-25', time: '19:00', stadium: 'Hard Rock Stadium, Miami', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO D
  { id: 19, group: 'D', home: 'Estados Unidos', away: 'Paraguay', date: '2026-06-12', time: '18:00', stadium: 'MetLife Stadium, New Jersey', homeScore: 4, awayScore: 1, status: 'played' },
  { id: 20, group: 'D', home: 'Australia', away: 'Turquía', date: '2026-06-13', time: '21:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: 2, awayScore: 0, status: 'played' },
  { id: 21, group: 'D', home: 'Estados Unidos', away: 'Turquía', date: '2026-06-18', time: '19:00', stadium: 'MetLife Stadium, New Jersey', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 22, group: 'D', home: 'Paraguay', away: 'Australia', date: '2026-06-18', time: '21:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 23, group: 'D', home: 'Turquía', away: 'Paraguay', date: '2026-06-24', time: '21:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 24, group: 'D', home: 'Australia', away: 'Estados Unidos', date: '2026-06-24', time: '21:00', stadium: 'MetLife Stadium, New Jersey', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO E
  { id: 25, group: 'E', home: 'Alemania', away: 'Curazao', date: '2026-06-14', time: '13:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: 7, awayScore: 1, status: 'played' },
  { id: 26, group: 'E', home: 'Costa de Marfil', away: 'Ecuador', date: '2026-06-14', time: '19:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 27, group: 'E', home: 'Alemania', away: 'Ecuador', date: '2026-06-19', time: '13:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 28, group: 'E', home: 'Curazao', away: 'Costa de Marfil', date: '2026-06-19', time: '16:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 29, group: 'E', home: 'Ecuador', away: 'Curazao', date: '2026-06-25', time: '13:00', stadium: 'Lincoln Financial Field, Filadelfia', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 30, group: 'E', home: 'Costa de Marfil', away: 'Alemania', date: '2026-06-25', time: '13:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO F
  { id: 31, group: 'F', home: 'Países Bajos', away: 'Japón', date: '2026-06-14', time: '16:00', stadium: 'Estadio BBVA, Monterrey', homeScore: 2, awayScore: 2, status: 'played' },
  { id: 32, group: 'F', home: 'Suecia', away: 'Túnez', date: '2026-06-14', time: '21:00', stadium: 'Estadio BBVA, Monterrey', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 33, group: 'F', home: 'Países Bajos', away: 'Túnez', date: '2026-06-20', time: '16:00', stadium: 'Estadio Akron, Guadalajara', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 34, group: 'F', home: 'Japón', away: 'Suecia', date: '2026-06-20', time: '19:00', stadium: 'Estadio BBVA, Monterrey', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 35, group: 'F', home: 'Túnez', away: 'Japón', date: '2026-06-26', time: '16:00', stadium: 'Estadio BBVA, Monterrey', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 36, group: 'F', home: 'Suecia', away: 'Países Bajos', date: '2026-06-26', time: '16:00', stadium: 'Estadio Akron, Guadalajara', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO G
  { id: 37, group: 'G', home: 'Bélgica', away: 'Egipto', date: '2026-06-15', time: '13:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 38, group: 'G', home: 'Irán', away: 'Nueva Zelanda', date: '2026-06-15', time: '16:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 39, group: 'G', home: 'Bélgica', away: 'Nueva Zelanda', date: '2026-06-20', time: '13:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 40, group: 'G', home: 'Egipto', away: 'Irán', date: '2026-06-20', time: '16:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 41, group: 'G', home: 'Nueva Zelanda', away: 'Egipto', date: '2026-06-26', time: '13:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 42, group: 'G', home: 'Irán', away: 'Bélgica', date: '2026-06-26', time: '13:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO H
  { id: 43, group: 'H', home: 'España', away: 'Cabo Verde', date: '2026-06-15', time: '19:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 44, group: 'H', home: 'Arabia Saudita', away: 'Uruguay', date: '2026-06-15', time: '21:00', stadium: 'AT&T Stadium, Dallas', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 45, group: 'H', home: 'España', away: 'Uruguay', date: '2026-06-21', time: '19:00', stadium: 'AT&T Stadium, Dallas', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 46, group: 'H', home: 'Cabo Verde', away: 'Arabia Saudita', date: '2026-06-21', time: '21:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 47, group: 'H', home: 'Uruguay', away: 'Cabo Verde', date: '2026-06-27', time: '19:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 48, group: 'H', home: 'Arabia Saudita', away: 'España', date: '2026-06-27', time: '19:00', stadium: 'AT&T Stadium, Dallas', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO I
  { id: 49, group: 'I', home: 'Francia', away: 'Senegal', date: '2026-06-16', time: '13:00', stadium: 'Gillette Stadium, Boston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 50, group: 'I', home: 'Irak', away: 'Noruega', date: '2026-06-16', time: '16:00', stadium: 'Lumen Field, Seattle', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 51, group: 'I', home: 'Francia', away: 'Noruega', date: '2026-06-21', time: '13:00', stadium: 'Lumen Field, Seattle', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 52, group: 'I', home: 'Senegal', away: 'Irak', date: '2026-06-21', time: '16:00', stadium: 'Gillette Stadium, Boston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 53, group: 'I', home: 'Noruega', away: 'Senegal', date: '2026-06-27', time: '13:00', stadium: 'Gillette Stadium, Boston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 54, group: 'I', home: 'Irak', away: 'Francia', date: '2026-06-27', time: '13:00', stadium: 'Lumen Field, Seattle', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO J
  { id: 55, group: 'J', home: 'Argentina', away: 'Argelia', date: '2026-06-16', time: '19:00', stadium: 'Hard Rock Stadium, Miami', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 56, group: 'J', home: 'Austria', away: 'Jordania', date: '2026-06-16', time: '21:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 57, group: 'J', home: 'Argentina', away: 'Jordania', date: '2026-06-22', time: '19:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 58, group: 'J', home: 'Argelia', away: 'Austria', date: '2026-06-22', time: '21:00', stadium: 'Hard Rock Stadium, Miami', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 59, group: 'J', home: 'Jordania', away: 'Argelia', date: '2026-06-27', time: '21:00', stadium: 'Hard Rock Stadium, Miami', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 60, group: 'J', home: 'Austria', away: 'Argentina', date: '2026-06-27', time: '21:00', stadium: 'Mercedes-Benz Stadium, Atlanta', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO K
  { id: 61, group: 'K', home: 'Portugal', away: 'RD Congo', date: '2026-06-17', time: '13:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 62, group: 'K', home: 'Uzbekistán', away: 'Colombia', date: '2026-06-17', time: '16:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 63, group: 'K', home: 'Portugal', away: 'Colombia', date: '2026-06-22', time: '13:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 64, group: 'K', home: 'RD Congo', away: 'Uzbekistán', date: '2026-06-22', time: '16:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 65, group: 'K', home: 'Colombia', away: 'RD Congo', date: '2026-06-27', time: '16:00', stadium: 'SoFi Stadium, Los Ángeles', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 66, group: 'K', home: 'Uzbekistán', away: 'Portugal', date: '2026-06-27', time: '16:00', stadium: 'NRG Stadium, Houston', homeScore: null, awayScore: null, status: 'upcoming' },
  // GRUPO L
  { id: 67, group: 'L', home: 'Inglaterra', away: 'Croacia', date: '2026-06-17', time: '19:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 68, group: 'L', home: 'Ghana', away: 'Panamá', date: '2026-06-17', time: '21:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 69, group: 'L', home: 'Inglaterra', away: 'Panamá', date: '2026-06-23', time: '13:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 70, group: 'L', home: 'Croacia', away: 'Ghana', date: '2026-06-23', time: '16:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 71, group: 'L', home: 'Panamá', away: 'Croacia', date: '2026-06-27', time: '16:00', stadium: 'Arrowhead Stadium, Kansas City', homeScore: null, awayScore: null, status: 'upcoming' },
  { id: 72, group: 'L', home: 'Ghana', away: 'Inglaterra', date: '2026-06-27', time: '16:00', stadium: 'Levi\'s Stadium, San Francisco', homeScore: null, awayScore: null, status: 'upcoming' },
];

// ---- APP STATE ----
let currentSection = 'partidos';
let currentFilter = 'todos';
let predictions = {};
let toastTimeout = null;

// ---- PLAYER STATE ----
let playerName = localStorage.getItem('prode_player_name') || '';
let playerId = localStorage.getItem('prode_player_id') || '';

// ---- TOURNAMENT STATE ----
let myTorneos = JSON.parse(localStorage.getItem('prode_my_torneos') || '[]');
let activeTorneo = null;
let activeTorneoData = null;
let torneoListener = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadPredictions();
  
  if (!playerName) {
    showNameModal();
  } else {
    initApp();
  }
});

function onFirebaseReady() {
  if (!playerId) {
    playerId = fbUser.uid;
    localStorage.setItem('prode_player_id', playerId);
  }
  checkURLForTorneo();
  syncMatchesFromFirebase();
}

function syncMatchesFromFirebase() {
  fbListen('matches', (data) => {
    if (data) {
      MATCHES = data;
      renderSection(currentSection);
    } else {
      // Inicializar base de datos con los partidos fijos
      fbWrite('matches', MATCHES);
    }
  });
}

function initApp() {
  setupNavigation();
  renderSection(currentSection);
  updateHeaderStats();
  checkURLForAdmin();
}

// ============================================
// PLAYER NAME MODAL
// ============================================
function showNameModal() {
  const modal = document.getElementById('name-modal');
  if (modal) modal.classList.add('show');
}

function savePlayerName() {
  const input = document.getElementById('player-name-input');
  const name = input.value.trim();
  if (!name) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
    return;
  }
  playerName = name;
  localStorage.setItem('prode_player_name', name);
  
  if (fbReady && fbUser) {
    playerId = fbUser.uid;
    localStorage.setItem('prode_player_id', playerId);
  } else if (!playerId) {
    playerId = 'local_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('prode_player_id', playerId);
  }
  
  const modal = document.getElementById('name-modal');
  if (modal) modal.classList.remove('show');
  
  initApp();
  checkURLForTorneo();
}

// ============================================
// LOCAL STORAGE
// ============================================
function loadPredictions() {
  const saved = localStorage.getItem('prode_mundial_2026');
  if (saved) predictions = JSON.parse(saved);
}

function savePredictions() {
  localStorage.setItem('prode_mundial_2026', JSON.stringify(predictions));
}

// ============================================
// NAVIGATION (Sidebar Menu)
// ============================================
function setupNavigation() {
  // No old nav buttons to set up - sidebar uses onclick in HTML
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const menuBtn = document.getElementById('menu-btn');
  const isOpen = sidebar.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    menuBtn.classList.add('open');
  }
}

function closeMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const menuBtn = document.getElementById('menu-btn');
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  menuBtn.classList.remove('open');
}

function navigateTo(section, btn) {
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentSection = section;
  currentFilter = 'todos';
  closeMenu();
  renderSection(section);
}

function handleFilterClick(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.filter-btn[data-filter="${filter}"]`)?.classList.add('active');
  renderSection(currentSection);
}

// ============================================
// RENDER SECTIONS
// ============================================
function renderSection(section) {
  const content = document.getElementById('main-content');
  switch(section) {
    case 'partidos': renderPartidos(content); break;
    case 'prode': renderProde(content); break;
    case 'predicciones': renderPredicciones(content); break;
    case 'tabla': renderTabla(content); break;
    case 'torneos': renderTorneos(content); break;
  }
  updateHeaderStats();
}

// ============================================
// PARTIDOS (Results) SECTION
// ============================================
function renderPartidos(container) {
  const liveMatches = MATCHES.filter(m => m.status === 'live');
  const playedMatches = MATCHES.filter(m => m.status === 'played');
  const upcomingMatches = MATCHES.filter(m => m.status === 'upcoming');
  const groups = ['todos', ...new Set(MATCHES.map(m => m.group))];
  
  let filteredLive = currentFilter !== 'todos' ? liveMatches.filter(m => m.group === currentFilter) : liveMatches;
  let filteredPlayed = currentFilter !== 'todos' ? playedMatches.filter(m => m.group === currentFilter) : playedMatches;
  let filteredUpcoming = currentFilter !== 'todos' ? upcomingMatches.filter(m => m.group === currentFilter) : upcomingMatches;

  container.innerHTML = `
    <div class="section-header"><h2 class="section-title">⚽ Partidos del Mundial</h2></div>
    <div class="groups-nav">
      ${groups.map(g => `<button class="filter-btn ${currentFilter === g ? 'active' : ''}" data-filter="${g}" onclick="handleFilterClick('${g}')">${g === 'todos' ? '🌐 Todos' : `Grupo ${g}`}</button>`).join('')}
    </div>
    ${filteredLive.length > 0 ? `
      <div class="sub-section-title"><span class="status-dot live"></span> En Vivo</div>
      <div class="matches-grid">${filteredLive.map(m => renderMatchCard(m, 'results')).join('')}</div>
    ` : ''}
    ${filteredPlayed.length > 0 ? `
      <div class="sub-section-title"><span class="status-dot played"></span> Partidos Jugados</div>
      <div class="matches-grid">${filteredPlayed.map(m => renderMatchCard(m, 'results')).join('')}</div>
    ` : ''}
    ${filteredUpcoming.length > 0 ? `
      <div class="sub-section-title"><span class="status-dot upcoming"></span> Próximos Partidos</div>
      <div class="matches-grid">${filteredUpcoming.map(m => renderMatchCard(m, 'results')).join('')}</div>
    ` : ''}
    ${filteredLive.length === 0 && filteredPlayed.length === 0 && filteredUpcoming.length === 0 ? `
      <div class="empty-state"><div class="empty-icon">🏟️</div><p>No hay partidos para este filtro</p></div>
    ` : ''}
  `;
}

// ============================================
// PRODE (Predictions) SECTION
// ============================================
function renderProde(container) {
  const groups = ['todos', ...new Set(MATCHES.map(m => m.group))];
  let filtered = currentFilter !== 'todos' ? MATCHES.filter(m => m.group === currentFilter) : [...MATCHES];

  // Ocultar los partidos que ya finalizaron
  filtered = filtered.filter(m => m.status !== 'played');

  // Ordenar por fecha y hora
  filtered.sort((a, b) => {
    const dateA = new Date(a.date + 'T' + (a.time || '00:00') + ':00');
    const dateB = new Date(b.date + 'T' + (b.time || '00:00') + ':00');
    return dateA - dateB;
  });

  container.innerHTML = `
    <div class="section-header"><h2 class="section-title">🎯 Mi Prode</h2></div>
    <div class="prode-instructions">
      <div class="instruction-card"><span class="instruction-icon">🏆</span><div><strong>Resultado Exacto</strong><p>+3 puntos</p></div></div>
      <div class="instruction-card"><span class="instruction-icon">✅</span><div><strong>Acertar Ganador/Empate</strong><p>+1 punto</p></div></div>
      <div class="instruction-card"><span class="instruction-icon">❌</span><div><strong>Resultado Incorrecto</strong><p>0 puntos</p></div></div>
    </div>
    <div class="groups-nav">
      ${groups.map(g => `<button class="filter-btn ${currentFilter === g ? 'active' : ''}" data-filter="${g}" onclick="handleFilterClick('${g}')">${g === 'todos' ? '🌐 Todos' : `Grupo ${g}`}</button>`).join('')}
    </div>
    <div class="matches-grid">${filtered.map(m => renderMatchCard(m, 'prode')).join('')}</div>
  `;
}

// ============================================
// TABLA (Points) SECTION
// ============================================
function renderTabla(container) {
  const stats = calculateStats();
  container.innerHTML = `
    <div class="section-header"><h2 class="section-title">📊 Mi Tabla de Puntos</h2></div>
    <div class="stats-overview">
      <div class="stat-card main-stat"><div class="stat-icon">🏆</div><div class="stat-value">${stats.totalPoints}</div><div class="stat-label">Puntos Totales</div></div>
      <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-value">${stats.exactos}</div><div class="stat-label">Exactos (×3)</div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-value">${stats.aciertos}</div><div class="stat-label">Aciertos (×1)</div></div>
      <div class="stat-card"><div class="stat-icon">❌</div><div class="stat-value">${stats.fallos}</div><div class="stat-label">Fallos</div></div>
      <div class="stat-card"><div class="stat-icon">📋</div><div class="stat-value">${stats.totalPredicted}</div><div class="stat-label">Predicciones</div></div>
      <div class="stat-card"><div class="stat-icon">📈</div><div class="stat-value">${stats.percentage}%</div><div class="stat-label">Efectividad</div></div>
    </div>
    ${stats.totalEvaluated > 0 ? `
      <div class="progress-section"><h3 class="sub-title">Rendimiento</h3>
        <div class="progress-bar-container"><div class="progress-bar">
          <div class="progress-fill exact" style="width: ${stats.exactPercent}%"></div>
          <div class="progress-fill partial" style="width: ${stats.partialPercent}%"></div>
          <div class="progress-fill wrong" style="width: ${stats.wrongPercent}%"></div>
        </div>
        <div class="progress-legend"><span class="legend-item"><span class="legend-dot exact"></span> Exacto</span><span class="legend-item"><span class="legend-dot partial"></span> Acierto</span><span class="legend-item"><span class="legend-dot wrong"></span> Fallo</span></div></div>
      </div>` : ''}
    <div class="history-section"><h3 class="sub-title">Historial de Predicciones</h3>
      ${stats.history.length > 0 ? `<div class="history-list">${stats.history.map(h => `
        <div class="history-item ${h.resultClass}">
          <div class="history-match"><span class="history-group">Grupo ${h.group}</span><span class="history-teams">${FLAGS[h.home] || ''} ${h.home} vs ${h.away} ${FLAGS[h.away] || ''}</span></div>
          <div class="history-scores">
            <div class="history-prediction"><span class="history-label">Tu predicción</span><span class="history-score">${h.predHome} - ${h.predAway}</span></div>
            <div class="history-result"><span class="history-label">Resultado</span><span class="history-score">${h.realHome !== null ? `${h.realHome} - ${h.realAway}` : 'Pendiente'}</span></div>
          </div>
          <div class="history-points"><span class="points-badge ${h.resultClass}">${h.points !== null ? `+${h.points}` : '⏳'}</span></div>
        </div>`).join('')}</div>` : `
        <div class="empty-state"><div class="empty-icon">🎯</div><p>Aún no hiciste ninguna predicción</p><p class="empty-sub">Andá a la sección <strong>Prode</strong> para empezar</p></div>`}
    </div>`;
}

// ============================================
// 🏆 TORNEOS SECTION
// ============================================
function renderTorneos(container) {
  if (!fbReady) {
    container.innerHTML = `
      <div class="section-header"><h2 class="section-title">🏆 Torneos</h2></div>
      <div class="firebase-warning">
        <div class="warning-icon">🔥</div>
        <h3>Firebase no configurado</h3>
        <p>Para usar torneos multijugador, necesitás configurar Firebase.</p>
        <p>Editá el archivo <strong>firebase-config.js</strong> con los datos de tu proyecto Firebase.</p>
        <div class="setup-steps">
          <div class="setup-step"><span>1</span> Andá a <strong>console.firebase.google.com</strong></div>
          <div class="setup-step"><span>2</span> Creá un proyecto y habilitá <strong>Anonymous Auth</strong></div>
          <div class="setup-step"><span>3</span> Creá una <strong>Realtime Database</strong></div>
          <div class="setup-step"><span>4</span> Copiá tu config en <strong>firebase-config.js</strong></div>
        </div>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="section-header"><h2 class="section-title">🏆 Torneos</h2></div>
    
    <div class="torneo-actions">
      <div class="create-torneo-card">
        <h3>➕ Crear Torneo Nuevo</h3>
        <div class="create-form">
          <input type="text" id="torneo-name-input" placeholder="Nombre del torneo (ej: Prode de los pibes)" maxlength="40" />
          <button class="btn-gradient" onclick="createTorneo()">🚀 Crear Torneo</button>
        </div>
      </div>
      
      <div class="join-torneo-card">
        <h3>🔗 Unirse con Código</h3>
        <div class="create-form">
          <input type="text" id="torneo-code-input" placeholder="Código del torneo (ej: ABC123)" maxlength="10" style="text-transform: uppercase" />
          <button class="btn-gradient btn-secondary" onclick="joinTorneoByCode()">🤝 Unirse</button>
        </div>
      </div>
    </div>

    <div id="torneos-list">
      ${myTorneos.length > 0 ? `
        <h3 class="sub-title">Mis Torneos</h3>
        <div class="torneos-grid">${myTorneos.map(t => `
          <div class="torneo-card ${activeTorneo === t.id ? 'active' : ''}" onclick="selectTorneo('${t.id}')">
            <div class="torneo-card-header">
              <span class="torneo-name">${t.nombre}</span>
              <span class="torneo-badge">${t.id}</span>
            </div>
            <div class="torneo-card-actions">
              <button class="btn-small btn-copy" onclick="event.stopPropagation(); copyInviteLink('${t.id}')" title="Copiar link">📋 Link</button>
              <button class="btn-small btn-leave" onclick="event.stopPropagation(); leaveTorneo('${t.id}')" title="Salir del torneo">🚪</button>
            </div>
          </div>
        `).join('')}</div>
      ` : '<div class="empty-state"><div class="empty-icon">🏆</div><p>No estás en ningún torneo todavía</p><p class="empty-sub">Creá uno o unite con un código</p></div>'}
    </div>

    <div id="torneo-leaderboard"></div>
  `;

  // If there's an active torneo, load its leaderboard
  if (activeTorneo) {
    loadTorneoLeaderboard(activeTorneo);
  }
}

// ---- Create Tournament ----
function createTorneo() {
  const input = document.getElementById('torneo-name-input');
  const nombre = input.value.trim();
  if (!nombre) {
    showToast('⚠️ Poné un nombre para el torneo', 'warning');
    return;
  }

  const torneoId = generateTorneoId();
  const torneoData = {
    nombre: nombre,
    creador: playerName,
    creadorId: playerId,
    fechaCreacion: new Date().toISOString(),
    jugadores: {
      [playerId]: {
        nombre: playerName,
        fechaIngreso: new Date().toISOString(),
        predicciones: predictions
      }
    }
  };

  fbWrite(`torneos/${torneoId}`, torneoData)
    .then(() => {
      myTorneos.push({ id: torneoId, nombre: nombre });
      localStorage.setItem('prode_my_torneos', JSON.stringify(myTorneos));
      activeTorneo = torneoId;
      showToast(`🏆 ¡Torneo "${nombre}" creado! Código: ${torneoId}`, 'success');
      renderSection('torneos');
    })
    .catch(err => {
      showToast('❌ Error al crear torneo: ' + err, 'error');
    });
}

// ---- Join Tournament ----
function joinTorneoByCode() {
  const input = document.getElementById('torneo-code-input');
  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('⚠️ Ingresá el código del torneo', 'warning');
    return;
  }
  joinTorneo(code);
}

function joinTorneo(torneoId) {
  if (myTorneos.find(t => t.id === torneoId)) {
    activeTorneo = torneoId;
    showToast('ℹ️ Ya estás en este torneo', 'info');
    if (currentSection === 'torneos') renderSection('torneos');
    return;
  }

  fbRead(`torneos/${torneoId}`)
    .then(data => {
      if (!data) {
        showToast('❌ Torneo no encontrado', 'error');
        return;
      }

      const playerData = {
        nombre: playerName,
        fechaIngreso: new Date().toISOString(),
        predicciones: predictions
      };

      return fbUpdate(`torneos/${torneoId}/jugadores/${playerId}`, playerData)
        .then(() => {
          myTorneos.push({ id: torneoId, nombre: data.nombre });
          localStorage.setItem('prode_my_torneos', JSON.stringify(myTorneos));
          activeTorneo = torneoId;
          showToast(`🎉 ¡Te uniste al torneo "${data.nombre}"!`, 'success');
          
          // Switch to torneos section
          currentSection = 'torneos';
          document.querySelectorAll('.nav-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.section === 'torneos');
          });
          renderSection('torneos');
        });
    })
    .catch(err => {
      showToast('❌ Error al unirse: ' + err, 'error');
    });
}

function leaveTorneo(torneoId) {
  if (!confirm('¿Seguro que querés salir de este torneo?')) return;
  
  fbUpdate(`torneos/${torneoId}/jugadores/${playerId}`, null)
    .then(() => {
      myTorneos = myTorneos.filter(t => t.id !== torneoId);
      localStorage.setItem('prode_my_torneos', JSON.stringify(myTorneos));
      if (activeTorneo === torneoId) {
        activeTorneo = null;
        activeTorneoData = null;
        if (torneoListener) { fbStopListening(torneoListener); torneoListener = null; }
      }
      showToast('👋 Saliste del torneo', 'info');
      renderSection('torneos');
    });
}

function selectTorneo(torneoId) {
  activeTorneo = torneoId;
  renderSection('torneos');
}

// ---- Leaderboard ----
function loadTorneoLeaderboard(torneoId) {
  const container = document.getElementById('torneo-leaderboard');
  if (!container) return;

  container.innerHTML = '<div class="loader-container"><div class="loader"></div><p>Cargando leaderboard...</p></div>';

  // Stop previous listener
  if (torneoListener) { fbStopListening(torneoListener); }

  // Real-time listener
  torneoListener = fbListen(`torneos/${torneoId}`, (data) => {
    if (!data) {
      container.innerHTML = '<div class="empty-state"><div class="empty-icon">❓</div><p>Torneo no encontrado</p></div>';
      return;
    }
    activeTorneoData = data;
    renderLeaderboard(container, data, torneoId);
  });
}

function renderLeaderboard(container, torneoData, torneoId) {
  const jugadores = torneoData.jugadores || {};
  
  // Calculate points for each player
  const rankings = Object.entries(jugadores).map(([pid, pdata]) => {
    const preds = pdata.predicciones || {};
    const stats = calculateStatsForPredictions(preds);
    return {
      id: pid,
      nombre: pdata.nombre,
      isMe: pid === playerId,
      ...stats
    };
  });

  // Sort by points (desc), then exactos (desc)
  rankings.sort((a, b) => b.totalPoints - a.totalPoints || b.exactos - a.exactos);

  const top3 = rankings.slice(0, 3);
  const rest = rankings.slice(3);
  const inviteLink = `${window.location.origin}${window.location.pathname}?torneo=${torneoId}`;

  container.innerHTML = `
    <div class="leaderboard-section">
      <div class="leaderboard-header">
        <h3 class="sub-title">🏆 ${torneoData.nombre}</h3>
        <div class="leaderboard-meta">
          <span>${rankings.length} jugador${rankings.length !== 1 ? 'es' : ''}</span>
          <button class="btn-small btn-copy" onclick="copyInviteLink('${torneoId}')">📋 Copiar Link de Invitación</button>
        </div>
      </div>

      ${top3.length > 0 ? renderPodium(top3) : ''}
      ${rest.length > 0 ? renderPlayersTable(rest, top3.length) : ''}
      
      <div class="invite-box">
        <p>📨 Invitá amigos a este torneo:</p>
        <div class="invite-link-box">
          <input type="text" readonly value="${inviteLink}" id="invite-link-${torneoId}" class="invite-link-input" />
          <button class="btn-gradient btn-small" onclick="copyInviteLink('${torneoId}')">📋 Copiar</button>
        </div>
        <p class="invite-code">Código: <strong>${torneoId}</strong></p>
      </div>
    </div>
  `;
}

function renderPodium(top3) {
  // We need at least 1 player. Pad with empty slots if less than 3
  const p1 = top3[0] || null;
  const p2 = top3[1] || null;
  const p3 = top3[2] || null;

  function podiumSlot(player, place) {
    if (!player) return `<div class="podium-slot place-${place} empty"></div>`;
    const medals = ['🥇', '🥈', '🥉'];
    const initial = player.nombre.charAt(0).toUpperCase();
    return `
      <div class="podium-slot place-${place} ${player.isMe ? 'is-me' : ''}" ${!player.isMe ? `onclick="openComparePredictions('${player.id}')"` : ''}>
        <div class="podium-medal">${medals[place - 1]}</div>
        <div class="podium-avatar">${initial}</div>
        <div class="podium-name">${player.nombre}${player.isMe ? ' (Yo)' : ''}</div>
        <div class="podium-points">${player.totalPoints} pts</div>
        <div class="podium-detail">${player.exactos}🎯 ${player.aciertos}✅ ${player.fallos}❌</div>
        <div class="podium-bar"></div>
      </div>
    `;
  }

  return `
    <div class="podium-container">
      ${p2 ? podiumSlot(p2, 2) : '<div class="podium-slot place-2 empty"></div>'}
      ${podiumSlot(p1, 1)}
      ${p3 ? podiumSlot(p3, 3) : '<div class="podium-slot place-3 empty"></div>'}
    </div>
  `;
}

function renderPlayersTable(players, offset) {
  return `
    <div class="players-table">
      <div class="table-header">
        <span class="th-pos">#</span>
        <span class="th-name">Jugador</span>
        <span class="th-stat">🎯</span>
        <span class="th-stat">✅</span>
        <span class="th-stat">❌</span>
        <span class="th-pts">Pts</span>
      </div>
      ${players.map((p, i) => `
        <div class="table-row ${p.isMe ? 'is-me' : ''}" ${!p.isMe ? `onclick="openComparePredictions('${p.id}')"` : ''}>
          <span class="td-pos">${offset + i + 1}°</span>
          <span class="td-name">
            <span class="mini-avatar">${p.nombre.charAt(0).toUpperCase()}</span>
            ${p.nombre}${p.isMe ? ' (Yo)' : ''}
          </span>
          <span class="td-stat">${p.exactos}</span>
          <span class="td-stat">${p.aciertos}</span>
          <span class="td-stat">${p.fallos}</span>
          <span class="td-pts">${p.totalPoints}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ---- URL Detection ----
function checkURLForTorneo() {
  const params = new URLSearchParams(window.location.search);
  const torneoId = params.get('torneo');
  if (torneoId && playerName && fbReady) {
    joinTorneo(torneoId.toUpperCase());
    // Clean URL
    window.history.replaceState({}, '', window.location.pathname);
  }
}

// ---- Invite Link ----
function copyInviteLink(torneoId) {
  const link = `${window.location.origin}${window.location.pathname}?torneo=${torneoId}`;
  navigator.clipboard.writeText(link).then(() => {
    showToast('📋 ¡Link copiado al portapapeles!', 'success');
  }).catch(() => {
    // Fallback
    const input = document.getElementById(`invite-link-${torneoId}`);
    if (input) { input.select(); document.execCommand('copy'); }
    showToast('📋 ¡Link copiado!', 'success');
  });
}

// ---- Generate Tournament ID ----
function generateTorneoId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = '';
  for (let i = 0; i < 6; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
  return id;
}

// ---- Sync Predictions to Firebase ----
function syncPredictionsToFirebase() {
  if (!fbReady || myTorneos.length === 0) return;
  myTorneos.forEach(t => {
    fbUpdate(`torneos/${t.id}/jugadores/${playerId}/predicciones`, predictions)
      .catch(err => console.warn('Sync error:', err));
  });
}

// ============================================
// MATCH CARD RENDERER
// ============================================
function renderMatchCard(match, mode) {
  const isPlayed = match.status === 'played';
  const isLive = match.status === 'live';
  const pred = predictions[match.id];
  const dateFormatted = formatDate(match.date);
  const predResult = pred && isPlayed ? evaluatePrediction(pred, match) : null;
  
  let predictionHTML = '';
  
  if (mode === 'prode') {
    const isLocked = isPlayed || isLive;
    
    if (isLocked && pred) {
      predictionHTML = `
        <div class="prediction-section">
          <div class="prediction-result ${predResult ? predResult.class : ''}">
            <div class="pred-comparison">
              <span>Tu predicción: <strong>${pred.home} - ${pred.away}</strong></span>
              ${isPlayed ? `<span>Resultado: <strong>${match.homeScore} - ${match.awayScore}</strong></span>` : ''}
            </div>
            ${predResult ? `<div class="pred-points"><span class="points-badge ${predResult.class}">+${predResult.points} pts</span><span class="pred-label">${predResult.label}</span></div>` : ''}
          </div>
        </div>`;
    } else if (isLocked && !pred) {
      predictionHTML = `<div class="prediction-section"><div class="prediction-missed"><span>⏰ No predijiste este partido</span></div></div>`;
    } else {
      predictionHTML = `
        <div class="prediction-section">
          <div class="prediction-inputs">
            <div class="pred-input-group"><label>${match.home}</label><input type="number" min="0" max="20" id="pred-home-${match.id}" value="${pred ? pred.home : ''}" placeholder="-" /></div>
            <span class="pred-vs">vs</span>
            <div class="pred-input-group"><label>${match.away}</label><input type="number" min="0" max="20" id="pred-away-${match.id}" value="${pred ? pred.away : ''}" placeholder="-" /></div>
          </div>
          <button class="save-pred-btn" onclick="savePrediction(${match.id})">${pred ? '✏️ Modificar Predicción' : '💾 Guardar Predicción'}</button>
          ${pred ? '<div class="prediction-saved">✅ Predicción guardada</div>' : ''}
        </div>`;
    }
  }

  return `
    <div class="match-card ${match.status}" style="animation-delay: ${match.id * 0.03}s">
      <div class="card-header"><span class="group-badge">Grupo ${match.group}</span><span class="match-date">${dateFormatted}</span></div>
      <div class="card-stadium"><span class="stadium-icon">🏟️</span> ${match.stadium}</div>
      <div class="card-body"><div class="teams-container">
        <div class="team"><span class="team-flag">${FLAGS[match.home] || '🏳️'}</span><span class="team-name">${match.home}</span></div>
        <div class="score-container">
          ${isPlayed || isLive ? `<span class="score">${match.homeScore}</span><span class="score-separator">-</span><span class="score">${match.awayScore}</span>` : `<span class="vs-text">VS</span><span class="match-time">${match.time} hs</span>`}
        </div>
        <div class="team"><span class="team-flag">${FLAGS[match.away] || '🏳️'}</span><span class="team-name">${match.away}</span></div>
      </div></div>
      <div class="card-footer"><span class="status-badge ${match.status}">${match.status === 'played' ? '✅ Finalizado' : match.status === 'live' ? '🔴 EN VIVO' : '📅 Próximamente'}</span></div>
      ${predictionHTML}
    </div>`;
}

// ============================================
// PREDICTION FUNCTIONS
// ============================================
function savePrediction(matchId) {
  const homeInput = document.getElementById(`pred-home-${matchId}`);
  const awayInput = document.getElementById(`pred-away-${matchId}`);
  const homeVal = homeInput.value;
  const awayVal = awayInput.value;
  
  if (homeVal === '' || awayVal === '') {
    showToast('⚠️ Completá ambos marcadores', 'warning');
    return;
  }
  const homeScore = parseInt(homeVal);
  const awayScore = parseInt(awayVal);
  if (isNaN(homeScore) || isNaN(awayScore) || homeScore < 0 || awayScore < 0) {
    showToast('⚠️ Ingresá números válidos', 'warning');
    return;
  }
  
  predictions[matchId] = { home: homeScore, away: awayScore, timestamp: new Date().toISOString() };
  savePredictions();
  syncPredictionsToFirebase();
  
  const match = MATCHES.find(m => m.id === matchId);
  showToast(`✅ Predicción guardada: ${match.home} ${homeScore} - ${awayScore} ${match.away}`, 'success');
  renderSection(currentSection);
}

function evaluatePrediction(pred, match) {
  if (match.status !== 'played' && match.status !== 'live') return null;
  if (match.homeScore == null || match.awayScore == null) return null;
  if (pred.home === match.homeScore && pred.away === match.awayScore) {
    return { points: 3, class: 'exact', label: '🎯 ¡Resultado Exacto!' };
  }
  const predOutcome = pred.home > pred.away ? 'h' : pred.home < pred.away ? 'a' : 'd';
  const realOutcome = match.homeScore > match.awayScore ? 'h' : match.homeScore < match.awayScore ? 'a' : 'd';
  if (predOutcome === realOutcome) {
    return { points: 1, class: 'partial', label: '✅ Acertaste el resultado' };
  }
  return { points: 0, class: 'wrong', label: '❌ No acertaste' };
}

// ============================================
// STATISTICS
// ============================================
function calculateStats() {
  return calculateStatsForPredictions(predictions);
}

function calculateStatsForPredictions(preds) {
  let totalPoints = 0, exactos = 0, aciertos = 0, fallos = 0;
  let totalPredicted = Object.keys(preds).length;
  let totalEvaluated = 0;
  const history = [];
  
  for (const [matchId, pred] of Object.entries(preds)) {
    const match = MATCHES.find(m => m.id === parseInt(matchId));
    if (!match) continue;
    const result = evaluatePrediction(pred, match);
    const historyItem = {
      group: match.group, home: match.home, away: match.away,
      predHome: pred.home, predAway: pred.away,
      realHome: match.homeScore != null ? match.homeScore : '-',
      realAway: match.awayScore != null ? match.awayScore : '-',
      points: result ? result.points : null,
      resultClass: result ? result.class : 'pending'
    };
    if (result) {
      totalEvaluated++;
      totalPoints += result.points;
      if (result.points === 3) exactos++;
      else if (result.points === 1) aciertos++;
      else fallos++;
    }
    history.push(historyItem);
  }
  
  const percentage = totalEvaluated > 0 ? Math.round(((exactos * 3 + aciertos) / (totalEvaluated * 3)) * 100) : 0;
  const exactPercent = totalEvaluated > 0 ? (exactos / totalEvaluated) * 100 : 0;
  const partialPercent = totalEvaluated > 0 ? (aciertos / totalEvaluated) * 100 : 0;
  const wrongPercent = totalEvaluated > 0 ? (fallos / totalEvaluated) * 100 : 0;
  
  history.sort((a, b) => {
    if (a.points === null && b.points === null) return 0;
    if (a.points === null) return 1;
    if (b.points === null) return -1;
    return b.points - a.points;
  });
  
  return { totalPoints, exactos, aciertos, fallos, totalPredicted, totalEvaluated, percentage, exactPercent, partialPercent, wrongPercent, history };
}

// ============================================
// HEADER STATS
// ============================================
function updateHeaderStats() {
  const stats = calculateStats();
  const el = document.getElementById('header-points');
  if (el) el.textContent = stats.totalPoints;
  const nameEl = document.getElementById('header-player-name');
  if (nameEl) nameEl.textContent = playerName || 'Jugador';
  // Sidebar stats
  const sidebarPts = document.getElementById('sidebar-points');
  if (sidebarPts) sidebarPts.textContent = stats.totalPoints;
  const sidebarName = document.getElementById('sidebar-player-name');
  if (sidebarName) sidebarName.textContent = playerName || 'Jugador';
}

// ============================================
// UTILITIES
// ============================================
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' });
}

function showToast(message, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  if (toastTimeout) clearTimeout(toastTimeout);
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ============================================
// ADMIN PANEL LOGIC
// ============================================
function checkURLForAdmin() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('admin') === 'modo_dios') {
    document.getElementById('admin-panel').style.display = 'flex';
    renderAdminPanel();
  }
}

function renderAdminPanel() {
  const list = document.getElementById('admin-matches-list');
  if (!list) return;

  const matchesWithIndex = MATCHES.map((m, index) => ({...m, originalIndex: index}));
  const pendingMatches = matchesWithIndex.filter(m => m.status !== 'played');
  
  pendingMatches.sort((a, b) => {
    const dateA = new Date(a.date + 'T' + (a.time || '00:00') + ':00');
    const dateB = new Date(b.date + 'T' + (b.time || '00:00') + ':00');
    return dateA - dateB;
  });

  if (pendingMatches.length === 0) {
    list.innerHTML = '<p style="color:white;text-align:center;">No hay partidos pendientes.</p>';
    return;
  }
  
  list.innerHTML = pendingMatches.map((m) => `
    <div class="admin-match-row">
      <div class="admin-match-title">Grupo ${m.group}: ${m.home} vs ${m.away} (${m.date} ${m.time || ''})</div>
      <input type="number" id="admin-home-${m.originalIndex}" class="admin-input" value="${m.homeScore != null ? m.homeScore : ''}" placeholder="-">
      <input type="number" id="admin-away-${m.originalIndex}" class="admin-input" value="${m.awayScore != null ? m.awayScore : ''}" placeholder="-">
      <select id="admin-status-${m.originalIndex}" class="admin-select">
        <option value="upcoming" ${m.status === 'upcoming' ? 'selected' : ''}>Próximamente</option>
        <option value="live" ${m.status === 'live' ? 'selected' : ''}>EN VIVO</option>
        <option value="played" ${m.status === 'played' ? 'selected' : ''}>Finalizado</option>
      </select>
      <button class="admin-btn" onclick="saveAdminMatch(${m.originalIndex})">Guardar</button>
    </div>
  `).join('');
}

function saveAdminMatch(index) {
  const homeVal = document.getElementById(`admin-home-${index}`).value;
  const awayVal = document.getElementById(`admin-away-${index}`).value;
  const statusVal = document.getElementById(`admin-status-${index}`).value;
  
  const m = MATCHES[index];
  m.homeScore = homeVal === '' ? null : parseInt(homeVal);
  m.awayScore = awayVal === '' ? null : parseInt(awayVal);
  m.status = statusVal;
  
  fbWrite('matches', MATCHES).then(() => {
    showToast('✅ Partido actualizado en Firebase', 'success');
    renderAdminPanel(); // refresh admin inputs
  }).catch(e => {
    showToast('❌ Error: ' + e, 'error');
  });
}

// ============================================
// COMPARATIVE PREDICTIONS
// ============================================
function openComparePredictions(otherPlayerId) {
  if (!activeTorneoData || !activeTorneoData.jugadores) {
    showToast('⚠️ No se pudieron cargar los datos del torneo', 'error');
    return;
  }
  const otherPlayer = activeTorneoData.jugadores[otherPlayerId];
  if (!otherPlayer) {
    showToast('⚠️ Jugador no encontrado', 'error');
    return;
  }

  const titleEl = document.getElementById('compare-modal-title');
  if (titleEl) titleEl.textContent = `Comparar con ${otherPlayer.nombre}`;

  const bodyEl = document.getElementById('compare-modal-body');
  if (bodyEl) {
    let rowsHTML = '';
    
    // Sort matches: played first
    const sortedMatches = [...MATCHES].sort((a, b) => {
      if (a.status === 'played' && b.status !== 'played') return -1;
      if (a.status !== 'played' && b.status === 'played') return 1;
      return a.id - b.id;
    });

    sortedMatches.forEach(match => {
      const myPred = predictions[match.id];
      const otherPred = otherPlayer.predicciones ? otherPlayer.predicciones[match.id] : null;
      
      const isPlayed = match.status === 'played';
      const isLive = match.status === 'live';
      
      // My prediction data
      let myPredText = '-';
      let myPointsClass = 'pending';
      let myPointsLabel = '';
      if (myPred) {
        myPredText = `${myPred.home} - ${myPred.away}`;
        if (isPlayed) {
          const evalResult = evaluatePrediction(myPred, match);
          myPointsClass = evalResult.class;
          myPointsLabel = `+${evalResult.points} pts`;
        }
      } else if (isPlayed) {
        myPointsClass = 'wrong';
        myPointsLabel = '0 pts';
      }

      // Other player prediction data (locked/hidden if not played)
      let otherPredText = '🔒';
      let otherPointsClass = 'pending';
      let otherPointsLabel = '';
      
      if (isPlayed) {
        if (otherPred) {
          otherPredText = `${otherPred.home} - ${otherPred.away}`;
          const evalResult = evaluatePrediction(otherPred, match);
          otherPointsClass = evalResult.class;
          otherPointsLabel = `+${evalResult.points} pts`;
        } else {
          otherPredText = 'Sin predicción';
          otherPointsClass = 'wrong';
          otherPointsLabel = '0 pts';
        }
      } else {
        // Locked / unplayed match
        otherPredText = '🔒';
        otherPointsClass = 'pending';
        otherPointsLabel = '';
      }

      // Match details / status
      const resultText = isPlayed 
        ? `Resultado: ${match.homeScore} - ${match.awayScore}`
        : isLive 
          ? `EN VIVO: ${match.homeScore} - ${match.awayScore}`
          : `${formatDate(match.date)} · ${match.time} hs`;

      rowsHTML += `
        <div class="compare-row">
          <div class="compare-match-info">
            <span class="compare-match-group">Grupo ${match.group}</span>
            <span class="compare-match-teams" title="${match.home} vs ${match.away}">
              ${FLAGS[match.home] || ''} ${match.home} vs ${match.away} ${FLAGS[match.away] || ''}
            </span>
            <span class="compare-match-result">${resultText}</span>
          </div>
          
          <div class="compare-column is-me">
            <span class="compare-col-label">Tú</span>
            <span class="compare-col-value">${myPredText}</span>
            ${myPointsLabel ? `<span class="compare-points-tag ${myPointsClass}">${myPointsLabel}</span>` : ''}
          </div>
          
          <div class="compare-column">
            <span class="compare-col-label">${otherPlayer.nombre}</span>
            <span class="compare-col-value ${!isPlayed ? 'locked' : ''}">${otherPredText}</span>
            ${otherPointsLabel ? `<span class="compare-points-tag ${otherPointsClass}">${otherPointsLabel}</span>` : ''}
          </div>
        </div>
      `;
    });
    
    bodyEl.innerHTML = rowsHTML;
  }

  const modal = document.getElementById('compare-modal');
  if (modal) modal.classList.add('show');
}

function closeCompareModal() {
  const modal = document.getElementById('compare-modal');
  if (modal) modal.classList.remove('show');
}

// ============================================
// PREDICCIONES (AI Prediction) SECTION
// ============================================
let predHomeTeam = '';
let predAwayTeam = '';

function getTeamNames() {
  if (typeof TEAMS_DATA === 'undefined') return [];
  return Object.keys(TEAMS_DATA).sort();
}

// Dynamic stats: merge baseline from TEAMS_DATA with World Cup results
function getDynamicStats(teamName) {
  if (typeof TEAMS_DATA === 'undefined' || !TEAMS_DATA[teamName]) return null;
  const base = JSON.parse(JSON.stringify(TEAMS_DATA[teamName]));
  
  // Find World Cup matches for this team that have been played
  const wcMatches = MATCHES.filter(m =>
    (m.status === 'played' || m.status === 'live') &&
    (m.home === teamName || m.away === teamName) &&
    m.homeScore != null && m.awayScore != null
  );
  
  if (wcMatches.length === 0) return base;
  
  // Add WC matches to recentMatches and recalculate form
  wcMatches.forEach(m => {
    const isHome = m.home === teamName;
    const gf = isHome ? m.homeScore : m.awayScore;
    const ga = isHome ? m.awayScore : m.homeScore;
    const result = gf > ga ? 'W' : gf < ga ? 'L' : 'D';
    base.recentMatches.unshift({
      date: m.date,
      opponent: isHome ? m.away : m.home,
      result, gf, ga,
      possession: base.stats.possession,
      isWorldCup: true
    });
  });
  
  // Keep max 12 recent matches (WC matches get priority)
  base.recentMatches = base.recentMatches.slice(0, 12);
  
  // Recalculate stats averages with WC data blended in (WC matches weighted x2)
  let totalGF = 0, totalGA = 0, weight = 0;
  base.recentMatches.forEach(m => {
    const w = m.isWorldCup ? 2 : 1;
    totalGF += m.gf * w;
    totalGA += m.ga * w;
    weight += w;
  });
  if (weight > 0) {
    base.stats.goalsFor = +(totalGF / weight).toFixed(2);
    base.stats.goalsAgainst = +(totalGA / weight).toFixed(2);
  }
  
  // Update clean sheets
  base.stats.cleanSheets = base.recentMatches.filter(m => m.ga === 0).length;
  
  return base;
}

// Calculate form points (W=3, D=1, L=0) with recency weighting
function getFormScore(recentMatches) {
  let score = 0, maxScore = 0;
  recentMatches.forEach((m, i) => {
    const recencyWeight = 1 + (recentMatches.length - i) * 0.1;
    const pts = m.result === 'W' ? 3 : m.result === 'D' ? 1 : 0;
    score += pts * recencyWeight;
    maxScore += 3 * recencyWeight;
  });
  return maxScore > 0 ? score / maxScore : 0.5;
}

// The main prediction algorithm
function predictMatch(homeTeamName, awayTeamName) {
  const home = getDynamicStats(homeTeamName);
  const away = getDynamicStats(awayTeamName);
  if (!home || !away) return null;

  const factors = [];
  let homeScore = 0, awayScore = 0;

  // 1. FIFA Ranking (15%)
  const rankDiff = away.fifaRanking - home.fifaRanking; // positive = home better
  const rankFactor = Math.max(-1, Math.min(1, rankDiff / 80));
  const rankHome = 0.5 + rankFactor * 0.5;
  homeScore += rankHome * 15;
  awayScore += (1 - rankHome) * 15;
  factors.push({ icon: '🏅', name: 'Ranking FIFA', weight: '15%',
    homeVal: `#${home.fifaRanking}`, awayVal: `#${away.fifaRanking}`,
    winner: rankHome > 0.55 ? 'home' : rankHome < 0.45 ? 'away' : 'draw' });

  // 2. Recent Form (20%)
  const homeForm = getFormScore(home.recentMatches);
  const awayForm = getFormScore(away.recentMatches);
  const formTotal = homeForm + awayForm || 1;
  homeScore += (homeForm / formTotal) * 20;
  awayScore += (awayForm / formTotal) * 20;
  factors.push({ icon: '📈', name: 'Forma Reciente', weight: '20%',
    homeVal: `${Math.round(homeForm * 100)}%`, awayVal: `${Math.round(awayForm * 100)}%`,
    winner: homeForm > awayForm * 1.1 ? 'home' : awayForm > homeForm * 1.1 ? 'away' : 'draw' });

  // 3. Offensive Power (15%)
  const homeOff = home.stats.goalsFor * 0.5 + home.stats.shotsOnTarget * 0.03 + home.stats.passAccuracy * 0.005;
  const awayOff = away.stats.goalsFor * 0.5 + away.stats.shotsOnTarget * 0.03 + away.stats.passAccuracy * 0.005;
  const offTotal = homeOff + awayOff || 1;
  homeScore += (homeOff / offTotal) * 15;
  awayScore += (awayOff / offTotal) * 15;
  factors.push({ icon: '⚔️', name: 'Poder Ofensivo', weight: '15%',
    homeVal: home.stats.goalsFor.toFixed(1) + ' goles/p',
    awayVal: away.stats.goalsFor.toFixed(1) + ' goles/p',
    winner: homeOff > awayOff * 1.05 ? 'home' : awayOff > homeOff * 1.05 ? 'away' : 'draw' });

  // 4. Defensive Solidity (15%)
  const homeDef = (1 / (home.stats.goalsAgainst + 0.3)) * 0.6 + home.stats.cleanSheets * 0.04 + home.stats.tackles * 0.01;
  const awayDef = (1 / (away.stats.goalsAgainst + 0.3)) * 0.6 + away.stats.cleanSheets * 0.04 + away.stats.tackles * 0.01;
  const defTotal = homeDef + awayDef || 1;
  homeScore += (homeDef / defTotal) * 15;
  awayScore += (awayDef / defTotal) * 15;
  factors.push({ icon: '🛡️', name: 'Solidez Defensiva', weight: '15%',
    homeVal: home.stats.goalsAgainst.toFixed(1) + ' enc/p',
    awayVal: away.stats.goalsAgainst.toFixed(1) + ' enc/p',
    winner: homeDef > awayDef * 1.05 ? 'home' : awayDef > homeDef * 1.05 ? 'away' : 'draw' });

  // 5. Possession (5%)
  const posTotal = home.stats.possession + away.stats.possession || 1;
  homeScore += (home.stats.possession / posTotal) * 5;
  awayScore += (away.stats.possession / posTotal) * 5;
  factors.push({ icon: '🎯', name: 'Posesión', weight: '5%',
    homeVal: home.stats.possession + '%', awayVal: away.stats.possession + '%',
    winner: home.stats.possession > away.stats.possession + 3 ? 'home' : away.stats.possession > home.stats.possession + 3 ? 'away' : 'draw' });

  // 6. Discipline (5%)
  const homeDisc = 1 / (1 + home.stats.yellowCards * 0.5 + home.stats.redCards * 2);
  const awayDisc = 1 / (1 + away.stats.yellowCards * 0.5 + away.stats.redCards * 2);
  const discTotal = homeDisc + awayDisc || 1;
  homeScore += (homeDisc / discTotal) * 5;
  awayScore += (awayDisc / discTotal) * 5;
  factors.push({ icon: '🟨', name: 'Disciplina', weight: '5%',
    homeVal: home.stats.yellowCards.toFixed(1) + ' TA/p',
    awayVal: away.stats.yellowCards.toFixed(1) + ' TA/p',
    winner: homeDisc > awayDisc * 1.05 ? 'home' : awayDisc > homeDisc * 1.05 ? 'away' : 'draw' });

  // 7. Coach Quality (10%) - based on form and tactical style
  const homeCoachBonus = homeForm * 0.7 + (home.fifaRanking < 20 ? 0.3 : home.fifaRanking < 40 ? 0.15 : 0);
  const awayCoachBonus = awayForm * 0.7 + (away.fifaRanking < 20 ? 0.3 : away.fifaRanking < 40 ? 0.15 : 0);
  const coachTotal = homeCoachBonus + awayCoachBonus || 1;
  homeScore += (homeCoachBonus / coachTotal) * 10;
  awayScore += (awayCoachBonus / coachTotal) * 10;
  factors.push({ icon: '👔', name: 'DT / Táctica', weight: '10%',
    homeVal: home.coach.name, awayVal: away.coach.name,
    winner: homeCoachBonus > awayCoachBonus * 1.1 ? 'home' : awayCoachBonus > homeCoachBonus * 1.1 ? 'away' : 'draw' });

  // 8. Squad Quality (10%) 
  const homeSquad = (home.fifaRanking < 10 ? 0.9 : home.fifaRanking < 20 ? 0.75 : home.fifaRanking < 40 ? 0.55 : home.fifaRanking < 60 ? 0.4 : 0.25);
  const awaySquad = (away.fifaRanking < 10 ? 0.9 : away.fifaRanking < 20 ? 0.75 : away.fifaRanking < 40 ? 0.55 : away.fifaRanking < 60 ? 0.4 : 0.25);
  const squadTotal = homeSquad + awaySquad || 1;
  homeScore += (homeSquad / squadTotal) * 10;
  awayScore += (awaySquad / squadTotal) * 10;
  factors.push({ icon: '⭐', name: 'Calidad del Plantel', weight: '10%',
    homeVal: homeSquad > 0.7 ? 'Elite' : homeSquad > 0.5 ? 'Alto' : 'Medio',
    awayVal: awaySquad > 0.7 ? 'Elite' : awaySquad > 0.5 ? 'Alto' : 'Medio',
    winner: homeSquad > awaySquad ? 'home' : awaySquad > homeSquad ? 'away' : 'draw' });

  // 9. Head-to-Head (3%)
  homeScore += 1.5; awayScore += 1.5; // neutral
  factors.push({ icon: '🤝', name: 'Historial Directo', weight: '3%',
    homeVal: '-', awayVal: '-', winner: 'draw' });

  // 10. Home Advantage (2%)
  homeScore += 1.2; awayScore += 0.8; // slight home advantage
  factors.push({ icon: '🏟️', name: 'Factor Cancha', weight: '2%',
    homeVal: '+', awayVal: '-', winner: 'home' });

  // Normalize to probabilities
  const total = homeScore + awayScore;
  let homeProb = homeScore / total;
  let awayProb = awayScore / total;

  // Calculate draw probability (higher when teams are closer)
  const diff = Math.abs(homeProb - awayProb);
  const drawBase = Math.max(0.12, 0.35 - diff * 1.5);
  const drawProb = drawBase;
  
  // Redistribute
  const remaining = 1 - drawProb;
  homeProb = homeProb / (homeProb + awayProb) * remaining;
  awayProb = awayProb / (homeProb + awayProb + 0.001) * remaining;
  // Fix floating point
  awayProb = 1 - homeProb - drawProb;
  if (awayProb < 0) awayProb = 0;

  // Predict most likely score
  const expectedHomeGoals = home.stats.goalsFor * 0.6 + away.stats.goalsAgainst * 0.4;
  const expectedAwayGoals = away.stats.goalsFor * 0.6 + home.stats.goalsAgainst * 0.4;
  const predHomeGoals = Math.round(expectedHomeGoals * (homeProb / (homeProb + drawProb * 0.5 + 0.001)));
  const predAwayGoals = Math.round(expectedAwayGoals * (awayProb / (awayProb + drawProb * 0.5 + 0.001)));

  // Confidence level
  const confidence = diff > 0.25 ? 'high' : diff > 0.1 ? 'medium' : 'low';
  const confidenceLabel = confidence === 'high' ? '🟢 Alta confianza' : confidence === 'medium' ? '🟡 Confianza moderada' : '🔴 Partido muy parejo';

  return {
    homeProb: Math.round(homeProb * 100),
    drawProb: Math.round(drawProb * 100),
    awayProb: Math.round(awayProb * 100),
    likelyScore: `${predHomeGoals} - ${predAwayGoals}`,
    confidence, confidenceLabel, factors,
    homeData: home, awayData: away
  };
}

// Generate SVG Radar Chart
function generateRadarSVG(homeData, awayData) {
  const cx = 130, cy = 130, r = 100;
  const dims = [
    { label: 'Ataque', home: homeData.stats.goalsFor / 3, away: awayData.stats.goalsFor / 3 },
    { label: 'Defensa', home: 1 - homeData.stats.goalsAgainst / 3, away: 1 - awayData.stats.goalsAgainst / 3 },
    { label: 'Posesión', home: homeData.stats.possession / 100, away: awayData.stats.possession / 100 },
    { label: 'Disciplina', home: 1 - homeData.stats.yellowCards / 5, away: 1 - awayData.stats.yellowCards / 5 },
    { label: 'Tiros', home: Math.min(homeData.stats.shotsOnTarget / 8, 1), away: Math.min(awayData.stats.shotsOnTarget / 8, 1) },
    { label: 'Pases', home: homeData.stats.passAccuracy / 100, away: awayData.stats.passAccuracy / 100 }
  ];
  const n = dims.length;
  const angle = (2 * Math.PI) / n;

  function polarToCart(i, val) {
    const a = angle * i - Math.PI / 2;
    return { x: cx + r * val * Math.cos(a), y: cy + r * val * Math.sin(a) };
  }

  // Grid lines
  let gridLines = '';
  [0.25, 0.5, 0.75, 1].forEach(level => {
    const pts = [];
    for (let i = 0; i < n; i++) { const p = polarToCart(i, level); pts.push(`${p.x},${p.y}`); }
    gridLines += `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  });

  // Axis lines + labels
  let axes = '';
  dims.forEach((d, i) => {
    const p = polarToCart(i, 1);
    axes += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>`;
    const lp = polarToCart(i, 1.18);
    axes += `<text x="${lp.x}" y="${lp.y}" fill="rgba(255,255,255,0.5)" font-size="10" text-anchor="middle" dominant-baseline="central">${d.label}</text>`;
  });

  // Team polygons
  const homePoints = dims.map((d, i) => { const p = polarToCart(i, Math.max(0.05, d.home)); return `${p.x},${p.y}`; }).join(' ');
  const awayPoints = dims.map((d, i) => { const p = polarToCart(i, Math.max(0.05, d.away)); return `${p.x},${p.y}`; }).join(' ');

  return `<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
    ${gridLines}${axes}
    <polygon points="${homePoints}" fill="rgba(0,200,83,0.15)" stroke="#00C853" stroke-width="2"/>
    <polygon points="${awayPoints}" fill="rgba(232,62,140,0.15)" stroke="#E83E8C" stroke-width="2"/>
  </svg>`;
}

function renderPredicciones(container) {
  const teams = getTeamNames();
  if (teams.length === 0) {
    container.innerHTML = `
      <div class="section-header"><h2 class="section-title">🤖 Predicciones IA</h2></div>
      <div class="pred-card">
        <div class="pred-empty"><div class="pred-empty-icon">⏳</div><p>Cargando datos de selecciones...</p></div>
      </div>`;
    return;
  }

  const homeOptions = teams.map(t => `<option value="${t}" ${predHomeTeam === t ? 'selected' : ''}>${FLAGS[t] || ''} ${t}</option>`).join('');
  const awayOptions = teams.map(t => `<option value="${t}" ${predAwayTeam === t ? 'selected' : ''}>${FLAGS[t] || ''} ${t}</option>`).join('');

  let analysisHTML = '';
  if (predHomeTeam && predAwayTeam && predHomeTeam !== predAwayTeam) {
    const pred = predictMatch(predHomeTeam, predAwayTeam);
    if (pred) {
      const hd = pred.homeData, ad = pred.awayData;
      // Stats comparison bars
      const statPairs = [
        { name: 'Goles/Partido', hv: hd.stats.goalsFor, av: ad.stats.goalsFor, max: 3.5 },
        { name: 'Goles Enc/P', hv: hd.stats.goalsAgainst, av: ad.stats.goalsAgainst, max: 3, invert: true },
        { name: 'Posesión %', hv: hd.stats.possession, av: ad.stats.possession, max: 70 },
        { name: 'Tiros/Partido', hv: hd.stats.shots, av: ad.stats.shots, max: 20 },
        { name: 'Tiros al Arco', hv: hd.stats.shotsOnTarget, av: ad.stats.shotsOnTarget, max: 10 },
        { name: 'Precisión Pases', hv: hd.stats.passAccuracy, av: ad.stats.passAccuracy, max: 95 },
        { name: 'Córners/P', hv: hd.stats.corners, av: ad.stats.corners, max: 8 },
        { name: 'Faltas/P', hv: hd.stats.fouls, av: ad.stats.fouls, max: 18, invert: true },
        { name: 'Tarjetas/P', hv: hd.stats.yellowCards, av: ad.stats.yellowCards, max: 4, invert: true },
        { name: 'Intercepciones', hv: hd.stats.interceptions, av: ad.stats.interceptions, max: 15 },
        { name: 'Tackles/P', hv: hd.stats.tackles, av: ad.stats.tackles, max: 22 },
        { name: 'Valla Invicta', hv: hd.stats.cleanSheets, av: ad.stats.cleanSheets, max: 10 }
      ];
      const statBarsHTML = statPairs.map(s => {
        const hPct = Math.min(100, (s.hv / s.max) * 100);
        const aPct = Math.min(100, (s.av / s.max) * 100);
        return `<div class="pred-stat-row">
          <div style="display:flex;align-items:center;gap:6px;justify-content:flex-end">
            <span class="pred-stat-value">${typeof s.hv === 'number' ? (s.hv % 1 ? s.hv.toFixed(1) : s.hv) : s.hv}</span>
            <div class="pred-stat-bar left" style="width:80px"><div class="pred-stat-fill home" style="width:${hPct}%"></div></div>
          </div>
          <span class="pred-stat-name">${s.name}</span>
          <div style="display:flex;align-items:center;gap:6px">
            <div class="pred-stat-bar" style="width:80px"><div class="pred-stat-fill away" style="width:${aPct}%"></div></div>
            <span class="pred-stat-value">${typeof s.av === 'number' ? (s.av % 1 ? s.av.toFixed(1) : s.av) : s.av}</span>
          </div>
        </div>`;
      }).join('');

      // Form dots
      const homeFormHTML = hd.recentMatches.slice(0, 10).map(m =>
        `<div class="pred-form-dot ${m.result}" title="${m.opponent}: ${m.gf}-${m.ga}">${m.result}</div>`
      ).join('');
      const awayFormHTML = ad.recentMatches.slice(0, 10).map(m =>
        `<div class="pred-form-dot ${m.result}" title="${m.opponent}: ${m.gf}-${m.ga}">${m.result}</div>`
      ).join('');

      // Key players (first 5 per team)
      const keyPlayersHome = hd.players.slice(0, 8).map(p =>
        `<div class="pred-player-item">
          <span class="pred-player-pos ${p.pos}">${p.pos}</span>
          <span class="pred-player-name">${p.name}</span>
          <span class="pred-player-club">${p.club}</span>
        </div>`
      ).join('');
      const keyPlayersAway = ad.players.slice(0, 8).map(p =>
        `<div class="pred-player-item">
          <span class="pred-player-pos ${p.pos}">${p.pos}</span>
          <span class="pred-player-name">${p.name}</span>
          <span class="pred-player-club">${p.club}</span>
        </div>`
      ).join('');

      // Factors breakdown
      const factorsHTML = pred.factors.map(f =>
        `<div class="pred-factor-row">
          <span class="pred-factor-icon">${f.icon}</span>
          <span class="pred-factor-name">${f.name}</span>
          <span class="pred-factor-weight">${f.weight}</span>
          <span class="pred-factor-winner ${f.winner}">${f.winner === 'home' ? FLAGS[predHomeTeam] + ' ' + predHomeTeam : f.winner === 'away' ? FLAGS[predAwayTeam] + ' ' + predAwayTeam : '🤝 Parejo'}</span>
        </div>`
      ).join('');

      analysisHTML = `
        <!-- Resultado Principal -->
        <div class="pred-result">
          <div class="pred-probabilities">
            <div class="pred-prob-item">
              <span class="pred-prob-value home">${pred.homeProb}%</span>
              <span class="pred-prob-label">${FLAGS[predHomeTeam]} ${predHomeTeam}</span>
            </div>
            <div class="pred-prob-item">
              <span class="pred-prob-value draw">${pred.drawProb}%</span>
              <span class="pred-prob-label">Empate</span>
            </div>
            <div class="pred-prob-item">
              <span class="pred-prob-value away">${pred.awayProb}%</span>
              <span class="pred-prob-label">${FLAGS[predAwayTeam]} ${predAwayTeam}</span>
            </div>
          </div>
          <div class="pred-likely-score">Resultado más probable: <strong>${pred.likelyScore}</strong></div>
          <div class="pred-confidence ${pred.confidence}">${pred.confidenceLabel}</div>
        </div>

        <!-- DTs -->
        <div class="pred-divider">👔 Directores Técnicos</div>
        <div class="pred-comparison">
          <div class="pred-team-profile">
            <div class="pred-team-header">
              <span class="pred-team-flag">${FLAGS[predHomeTeam]}</span>
              <div><div class="pred-team-name">${predHomeTeam}</div><div class="pred-team-ranking">FIFA #${hd.fifaRanking} · Grupo ${hd.group}</div></div>
            </div>
            <div class="pred-coach"><strong>${hd.coach.name}</strong> (${hd.coach.nationality})<br>${hd.coach.formation} · ${hd.coach.style}</div>
            <p style="font-size:0.8rem;color:var(--text-secondary);margin:0">${hd.playStyle}</p>
            <div style="margin-top:10px"><span style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:600">Forma Reciente</span></div>
            <div class="pred-form">${homeFormHTML}</div>
          </div>
          <div class="pred-team-profile">
            <div class="pred-team-header">
              <span class="pred-team-flag">${FLAGS[predAwayTeam]}</span>
              <div><div class="pred-team-name">${predAwayTeam}</div><div class="pred-team-ranking">FIFA #${ad.fifaRanking} · Grupo ${ad.group}</div></div>
            </div>
            <div class="pred-coach"><strong>${ad.coach.name}</strong> (${ad.coach.nationality})<br>${ad.coach.formation} · ${ad.coach.style}</div>
            <p style="font-size:0.8rem;color:var(--text-secondary);margin:0">${ad.playStyle}</p>
            <div style="margin-top:10px"><span style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:600">Forma Reciente</span></div>
            <div class="pred-form">${awayFormHTML}</div>
          </div>
        </div>

        <!-- Radar Chart -->
        <div class="pred-divider">📊 Comparación Visual</div>
        <div class="pred-radar-container">
          <div>
            <div class="pred-radar">${generateRadarSVG(hd, ad)}</div>
            <div class="pred-radar-legend">
              <span class="pred-radar-legend-item"><span class="pred-radar-dot home"></span>${predHomeTeam}</span>
              <span class="pred-radar-legend-item"><span class="pred-radar-dot away"></span>${predAwayTeam}</span>
            </div>
          </div>
        </div>

        <!-- Stats Comparison -->
        <div class="pred-divider">📈 Estadísticas Detalladas</div>
        <div class="pred-stats-list">${statBarsHTML}</div>

        <!-- Strengths/Weaknesses -->
        <div class="pred-divider">💪 Fortalezas y Debilidades</div>
        <div class="pred-comparison">
          <div class="pred-team-profile">
            <div class="pred-team-header"><span class="pred-team-flag">${FLAGS[predHomeTeam]}</span><div class="pred-team-name">${predHomeTeam}</div></div>
            <p style="font-size:0.82rem;color:var(--green);margin:0 0 8px">✅ ${hd.strengths}</p>
            <p style="font-size:0.82rem;color:var(--pink);margin:0">⚠️ ${hd.weaknesses}</p>
          </div>
          <div class="pred-team-profile">
            <div class="pred-team-header"><span class="pred-team-flag">${FLAGS[predAwayTeam]}</span><div class="pred-team-name">${predAwayTeam}</div></div>
            <p style="font-size:0.82rem;color:var(--green);margin:0 0 8px">✅ ${ad.strengths}</p>
            <p style="font-size:0.82rem;color:var(--pink);margin:0">⚠️ ${ad.weaknesses}</p>
          </div>
        </div>

        <!-- Factor Breakdown -->
        <div class="pred-divider">🧮 Desglose de Factores del Algoritmo</div>
        <div class="pred-factors">${factorsHTML}</div>

        <!-- Key Players -->
        <div class="pred-divider">⭐ Jugadores Clave</div>
        <div class="pred-key-players">
          <div>
            <div class="pred-players-title">${FLAGS[predHomeTeam]} ${predHomeTeam}</div>
            ${keyPlayersHome}
          </div>
          <div>
            <div class="pred-players-title">${FLAGS[predAwayTeam]} ${predAwayTeam}</div>
            ${keyPlayersAway}
          </div>
        </div>
      `;
    }
  }

  container.innerHTML = `
    <div class="section-header"><h2 class="section-title">🤖 Predicciones IA</h2></div>
    <div class="pred-card">
      <div class="pred-selector">
        <div class="pred-team-select">
          <label>Equipo Local</label>
          <select onchange="predHomeTeam=this.value; renderPredicciones(document.getElementById('main-content'))">
            <option value="">Seleccionar equipo...</option>
            ${homeOptions}
          </select>
        </div>
        <span class="pred-vs">VS</span>
        <div class="pred-team-select">
          <label>Equipo Visitante</label>
          <select onchange="predAwayTeam=this.value; renderPredicciones(document.getElementById('main-content'))">
            <option value="">Seleccionar equipo...</option>
            ${awayOptions}
          </select>
        </div>
      </div>
      ${analysisHTML || `<div class="pred-empty"><div class="pred-empty-icon">⚽</div><p>Seleccioná dos equipos para ver el análisis completo</p></div>`}
    </div>
  `;
}
