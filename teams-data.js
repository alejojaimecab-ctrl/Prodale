const TEAMS_DATA = {
// ==================== GRUPO A ====================
'México': {
  fifaRanking: 14, group: 'A',
  coach: { name: 'Javier Aguirre', nationality: 'Mexicana', style: 'Pragmático y defensivo', formation: '4-3-3' },
  stats: { goalsFor: 1.5, goalsAgainst: 0.9, possession: 52, corners: 5.2, fouls: 13, yellowCards: 2.1, redCards: 0.1, shots: 12.5, shotsOnTarget: 4.8, passAccuracy: 84, cleanSheets: 4, tackles: 18, interceptions: 11, saves: 3.2 },
  recentMatches: [
    { date: '2026-06-01', opponent: 'Guatemala', result: 'W', gf: 3, ga: 0, possession: 62 },
    { date: '2026-05-28', opponent: 'Perú', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-26', opponent: 'Honduras', result: 'W', gf: 2, ga: 0, possession: 58 },
    { date: '2026-03-22', opponent: 'Costa Rica', result: 'W', gf: 1, ga: 0, possession: 55 },
    { date: '2025-11-18', opponent: 'Canadá', result: 'D', gf: 1, ga: 1, possession: 47 },
    { date: '2025-11-14', opponent: 'Panamá', result: 'W', gf: 2, ga: 1, possession: 53 },
    { date: '2025-10-14', opponent: 'Estados Unidos', result: 'L', gf: 0, ga: 2, possession: 44 },
    { date: '2025-10-10', opponent: 'Jamaica', result: 'W', gf: 3, ga: 1, possession: 56 },
    { date: '2025-09-09', opponent: 'El Salvador', result: 'W', gf: 2, ga: 0, possession: 60 },
    { date: '2025-09-05', opponent: 'Colombia', result: 'L', gf: 1, ga: 2, possession: 45 }
  ],
  players: [
    { name: 'Guillermo Ochoa', pos: 'POR', club: 'Salernitana', age: 40 },
    { name: 'Luis Malagón', pos: 'POR', club: 'América', age: 27 },
    { name: 'Carlos Acevedo', pos: 'POR', club: 'Santos Laguna', age: 28 },
    { name: 'Jorge Sánchez', pos: 'DEF', club: 'Cruz Azul', age: 28 },
    { name: 'César Montes', pos: 'DEF', club: 'Almería', age: 29 },
    { name: 'Johan Vásquez', pos: 'DEF', club: 'Genoa', age: 27 },
    { name: 'Jesús Gallardo', pos: 'DEF', club: 'Monterrey', age: 31 },
    { name: 'Gerardo Arteaga', pos: 'DEF', club: 'Genk', age: 28 },
    { name: 'Kevin Álvarez', pos: 'DEF', club: 'Pachuca', age: 27 },
    { name: 'Jesús Angulo', pos: 'DEF', club: 'Tigres', age: 28 },
    { name: 'Israel Reyes', pos: 'DEF', club: 'América', age: 24 },
    { name: 'Edson Álvarez', pos: 'MED', club: 'West Ham', age: 28 },
    { name: 'Luis Romo', pos: 'MED', club: 'Monterrey', age: 30 },
    { name: 'Orbelín Pineda', pos: 'MED', club: 'AEK Atenas', age: 30 },
    { name: 'Carlos Rodríguez', pos: 'MED', club: 'Cruz Azul', age: 28 },
    { name: 'Érick Sánchez', pos: 'MED', club: 'PSV', age: 25 },
    { name: 'Marcel Ruiz', pos: 'MED', club: 'Sporting Gijón', age: 24 },
    { name: 'Diego Lainez', pos: 'MED', club: 'Tigres', age: 26 },
    { name: 'Roberto Alvarado', pos: 'MED', club: 'Guadalajara', age: 28 },
    { name: 'Alexis Vega', pos: 'DEL', club: 'Toluca', age: 28 },
    { name: 'Hirving Lozano', pos: 'DEL', club: 'San Diego FC', age: 30 },
    { name: 'Santiago Giménez', pos: 'DEL', club: 'Feyenoord', age: 25 },
    { name: 'Julián Quiñones', pos: 'DEL', club: 'América', age: 29 },
    { name: 'Henry Martín', pos: 'DEL', club: 'América', age: 33 },
    { name: 'César Huerta', pos: 'DEL', club: 'Pumas', age: 23 },
    { name: 'Guillermo Martínez', pos: 'DEL', club: 'Pumas', age: 29 }
  ],
  strengths: 'Solidez defensiva y experiencia mundialista; afición local como factor determinante.',
  weaknesses: 'Falta de gol en partidos de alta exigencia y transiciones lentas.',
  playStyle: 'Equipo pragmático que prioriza la solidez defensiva y busca transiciones rápidas con extremos veloces.'
},
'Sudáfrica': {
  fifaRanking: 60, group: 'A',
  coach: { name: 'Hugo Broos', nationality: 'Belga', style: 'Disciplinado y táctico', formation: '4-3-3' },
  stats: { goalsFor: 1.2, goalsAgainst: 1.0, possession: 48, corners: 4.1, fouls: 14, yellowCards: 2.3, redCards: 0.1, shots: 10.2, shotsOnTarget: 3.5, passAccuracy: 78, cleanSheets: 3, tackles: 20, interceptions: 12, saves: 4.0 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Zambia', result: 'W', gf: 2, ga: 0, possession: 52 },
    { date: '2026-05-28', opponent: 'Angola', result: 'D', gf: 1, ga: 1, possession: 46 },
    { date: '2026-03-25', opponent: 'Nigeria', result: 'L', gf: 0, ga: 1, possession: 42 },
    { date: '2026-03-21', opponent: 'Zimbabue', result: 'W', gf: 3, ga: 1, possession: 55 },
    { date: '2025-11-18', opponent: 'Benín', result: 'W', gf: 2, ga: 0, possession: 53 },
    { date: '2025-11-14', opponent: 'Ruanda', result: 'W', gf: 1, ga: 0, possession: 50 },
    { date: '2025-10-13', opponent: 'Nigeria', result: 'D', gf: 1, ga: 1, possession: 44 },
    { date: '2025-10-09', opponent: 'Zimbabue', result: 'W', gf: 2, ga: 0, possession: 54 },
    { date: '2025-09-09', opponent: 'Benín', result: 'D', gf: 0, ga: 0, possession: 47 },
    { date: '2025-09-05', opponent: 'Ruanda', result: 'W', gf: 1, ga: 0, possession: 51 }
  ],
  players: [
    { name: 'Ronwen Williams', pos: 'POR', club: 'Mamelodi Sundowns', age: 32 },
    { name: 'Veli Mothwa', pos: 'POR', club: 'AmaZulu', age: 33 },
    { name: 'Bruce Bvuma', pos: 'POR', club: 'Kaizer Chiefs', age: 29 },
    { name: 'Mothobi Mvala', pos: 'DEF', club: 'Mamelodi Sundowns', age: 30 },
    { name: 'Grant Kekana', pos: 'DEF', club: 'Mamelodi Sundowns', age: 31 },
    { name: 'Siyanda Xulu', pos: 'DEF', club: 'Sekhukhune United', age: 33 },
    { name: 'Aubrey Modiba', pos: 'DEF', club: 'Mamelodi Sundowns', age: 30 },
    { name: 'Khuliso Mudau', pos: 'DEF', club: 'Mamelodi Sundowns', age: 28 },
    { name: 'Terrence Mashego', pos: 'DEF', club: 'Cape Town City', age: 25 },
    { name: 'Nkosinathi Sibisi', pos: 'DEF', club: 'Orlando Pirates', age: 27 },
    { name: 'Rushwin Dortley', pos: 'DEF', club: 'Kaizer Chiefs', age: 22 },
    { name: 'Teboho Mokoena', pos: 'MED', club: 'Mamelodi Sundowns', age: 27 },
    { name: 'Themba Zwane', pos: 'MED', club: 'Mamelodi Sundowns', age: 36 },
    { name: 'Luke Le Roux', pos: 'MED', club: 'Orlando Pirates', age: 25 },
    { name: 'Bathusi Aubaas', pos: 'MED', club: 'Stellenbosch', age: 23 },
    { name: 'Sipho Mbule', pos: 'MED', club: 'Kaizer Chiefs', age: 27 },
    { name: 'Patrick Maswanganyi', pos: 'MED', club: 'Orlando Pirates', age: 26 },
    { name: 'Monnapule Saleng', pos: 'MED', club: 'Orlando Pirates', age: 27 },
    { name: 'Elias Mokwana', pos: 'DEL', club: 'Esperance', age: 25 },
    { name: 'Iqraam Rayners', pos: 'DEL', club: 'Mamelodi Sundowns', age: 28 },
    { name: 'Percy Tau', pos: 'DEL', club: 'Al Ahly', age: 32 },
    { name: 'Lyle Foster', pos: 'DEL', club: 'Burnley', age: 26 },
    { name: 'Thembinkosi Lorch', pos: 'DEL', club: 'Orlando Pirates', age: 31 },
    { name: 'Evidence Makgopa', pos: 'DEL', club: 'Orlando Pirates', age: 25 },
    { name: 'Oswin Appollis', pos: 'DEL', club: 'Polokwane City', age: 23 },
    { name: 'Relebohile Mofokeng', pos: 'DEL', club: 'Orlando Pirates', age: 20 }
  ],
  strengths: 'Portero de clase mundial en Ronwen Williams; gran espíritu colectivo.',
  weaknesses: 'Nivel de liga local limita la competitividad internacional; poca profundidad de banquillo.',
  playStyle: 'Equipo compacto y organizado que depende del contraataque y la solidez defensiva.'
},
'Corea del Sur': {
  fifaRanking: 25, group: 'A',
  coach: { name: 'Hong Myung-bo', nationality: 'Surcoreana', style: 'Ofensivo y técnico', formation: '4-2-3-1' },
  stats: { goalsFor: 1.6, goalsAgainst: 0.8, possession: 55, corners: 5.5, fouls: 12, yellowCards: 1.8, redCards: 0.05, shots: 13.8, shotsOnTarget: 5.1, passAccuracy: 86, cleanSheets: 5, tackles: 17, interceptions: 10, saves: 3.0 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'China', result: 'W', gf: 3, ga: 0, possession: 62 },
    { date: '2026-05-28', opponent: 'Japón', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-26', opponent: 'Jordania', result: 'W', gf: 2, ga: 0, possession: 58 },
    { date: '2026-03-22', opponent: 'Irak', result: 'W', gf: 1, ga: 0, possession: 54 },
    { date: '2025-11-19', opponent: 'Irán', result: 'D', gf: 0, ga: 0, possession: 51 },
    { date: '2025-11-14', opponent: 'Palestina', result: 'W', gf: 4, ga: 0, possession: 65 },
    { date: '2025-10-14', opponent: 'Omán', result: 'W', gf: 2, ga: 0, possession: 60 },
    { date: '2025-10-09', opponent: 'Jordania', result: 'W', gf: 1, ga: 0, possession: 56 },
    { date: '2025-09-09', opponent: 'Australia', result: 'L', gf: 1, ga: 2, possession: 52 },
    { date: '2025-09-04', opponent: 'Irak', result: 'W', gf: 3, ga: 1, possession: 57 }
  ],
  players: [
    { name: 'Kim Seung-gyu', pos: 'POR', club: 'Al Shabab', age: 36 },
    { name: 'Jo Hyeon-woo', pos: 'POR', club: 'Ulsan HD', age: 34 },
    { name: 'Song Bum-keun', pos: 'POR', club: 'Nottingham Forest', age: 26 },
    { name: 'Kim Min-jae', pos: 'DEF', club: 'Bayern Múnich', age: 29 },
    { name: 'Kim Young-gwon', pos: 'DEF', club: 'Ulsan HD', age: 36 },
    { name: 'Cho Yu-min', pos: 'DEF', club: 'VfB Stuttgart', age: 25 },
    { name: 'Kim Jin-su', pos: 'DEF', club: 'Jeonbuk', age: 33 },
    { name: 'Kim Tae-hwan', pos: 'DEF', club: 'Ulsan HD', age: 32 },
    { name: 'Park Seung-wook', pos: 'DEF', club: 'Verona', age: 25 },
    { name: 'Hong Hyun-seok', pos: 'DEF', club: 'Genk', age: 25 },
    { name: 'Seol Young-woo', pos: 'DEF', club: 'Ulsan HD', age: 27 },
    { name: 'Lee Kang-in', pos: 'MED', club: 'PSG', age: 25 },
    { name: 'Hwang In-beom', pos: 'MED', club: 'Feyenoord', age: 29 },
    { name: 'Paik Seung-ho', pos: 'MED', club: 'Jeonbuk', age: 29 },
    { name: 'Lee Jae-sung', pos: 'MED', club: 'Mainz', age: 33 },
    { name: 'Kwon Chang-hoon', pos: 'MED', club: 'Gimcheon Sangmu', age: 31 },
    { name: 'Jung Woo-young', pos: 'MED', club: 'Al Sadd', age: 36 },
    { name: 'Yang Hyun-jun', pos: 'MED', club: 'Celtic', age: 23 },
    { name: 'Son Heung-min', pos: 'DEL', club: 'Tottenham', age: 33 },
    { name: 'Hwang Hee-chan', pos: 'DEL', club: 'Wolverhampton', age: 30 },
    { name: 'Cho Gue-sung', pos: 'DEL', club: 'Midtjylland', age: 28 },
    { name: 'Oh Hyeon-gyu', pos: 'DEL', club: 'Celtic', age: 24 },
    { name: 'Joo Min-kyu', pos: 'DEL', club: 'Jeonbuk', age: 29 },
    { name: 'Lee Seung-woo', pos: 'DEL', club: 'Suwon', age: 28 },
    { name: 'Na Sang-ho', pos: 'DEL', club: 'FC Seoul', age: 30 },
    { name: 'Eom Ji-sung', pos: 'MED', club: 'Rennes', age: 23 }
  ],
  strengths: 'Son Heung-min como referente; velocidad en transiciones y disciplina táctica.',
  weaknesses: 'Dependencia excesiva de Son; defensa vulnerable ante equipos físicos.',
  playStyle: 'Fútbol dinámico y rápido con presión alta y transiciones verticales por las bandas.'
},
'Chequia': {
  fifaRanking: 40, group: 'A',
  coach: { name: 'Miroslav Koubek', nationality: 'Checa', style: 'Compacto y organizado', formation: '3-4-3' },
  stats: { goalsFor: 1.3, goalsAgainst: 1.0, possession: 49, corners: 4.8, fouls: 13.5, yellowCards: 2.0, redCards: 0.1, shots: 11.5, shotsOnTarget: 4.2, passAccuracy: 82, cleanSheets: 3, tackles: 19, interceptions: 12, saves: 3.5 },
  recentMatches: [
    { date: '2026-05-31', opponent: 'Austria', result: 'D', gf: 1, ga: 1, possession: 47 },
    { date: '2026-05-27', opponent: 'Hungría', result: 'W', gf: 2, ga: 1, possession: 48 },
    { date: '2026-03-31', opponent: 'Irlanda', result: 'W', gf: 1, ga: 0, possession: 44 },
    { date: '2026-03-27', opponent: 'Dinamarca', result: 'W', gf: 2, ga: 1, possession: 43 },
    { date: '2025-11-18', opponent: 'Georgia', result: 'W', gf: 3, ga: 1, possession: 50 },
    { date: '2025-11-14', opponent: 'Ucrania', result: 'L', gf: 1, ga: 2, possession: 45 },
    { date: '2025-10-14', opponent: 'Albania', result: 'D', gf: 0, ga: 0, possession: 46 },
    { date: '2025-10-10', opponent: 'Georgia', result: 'W', gf: 2, ga: 0, possession: 52 },
    { date: '2025-09-09', opponent: 'Montenegro', result: 'W', gf: 1, ga: 0, possession: 49 },
    { date: '2025-09-05', opponent: 'Ucrania', result: 'D', gf: 2, ga: 2, possession: 44 }
  ],
  players: [
    { name: 'Jindřich Staněk', pos: 'POR', club: 'Slavia Praga', age: 30 },
    { name: 'Vitík Jaroš', pos: 'POR', club: 'Sturm Graz', age: 23 },
    { name: 'Matěj Kovář', pos: 'POR', club: 'Bayer Leverkusen', age: 24 },
    { name: 'Robin Hranáč', pos: 'DEF', club: 'Hoffenheim', age: 25 },
    { name: 'Ladislav Krejčí', pos: 'DEF', club: 'Girona', age: 25 },
    { name: 'Tomáš Holeš', pos: 'DEF', club: 'Slavia Praga', age: 33 },
    { name: 'David Zima', pos: 'DEF', club: 'Slavia Praga', age: 26 },
    { name: 'Vladimír Coufal', pos: 'DEF', club: 'West Ham', age: 33 },
    { name: 'Martin Vitík', pos: 'DEF', club: 'Sparta Praga', age: 22 },
    { name: 'Matěj Ryneš', pos: 'DEF', club: 'Slavia Praga', age: 24 },
    { name: 'Tomáš Vlček', pos: 'DEF', club: 'Sparta Praga', age: 22 },
    { name: 'Tomáš Souček', pos: 'MED', club: 'West Ham', age: 31 },
    { name: 'Lukáš Provod', pos: 'MED', club: 'Slavia Praga', age: 29 },
    { name: 'Alex Král', pos: 'MED', club: 'Espanyol', age: 28 },
    { name: 'Michal Sadílek', pos: 'MED', club: 'Twente', age: 27 },
    { name: 'Pavel Šulc', pos: 'MED', club: 'Viktoria Plzeň', age: 25 },
    { name: 'Ondřej Lingr', pos: 'MED', club: 'Feyenoord', age: 28 },
    { name: 'Antonín Barák', pos: 'MED', club: 'Fiorentina', age: 31 },
    { name: 'Adam Hložek', pos: 'DEL', club: 'Hoffenheim', age: 24 },
    { name: 'Patrik Schick', pos: 'DEL', club: 'Bayer Leverkusen', age: 30 },
    { name: 'Mojmír Chytil', pos: 'DEL', club: 'Slavia Praga', age: 25 },
    { name: 'Jan Kuchta', pos: 'DEL', club: 'Midtjylland', age: 29 },
    { name: 'Václav Černý', pos: 'DEL', club: 'Wolfsburgo', age: 28 },
    { name: 'Matěj Jurásek', pos: 'DEL', club: 'Slavia Praga', age: 22 },
    { name: 'Tomáš Čvančara', pos: 'DEL', club: 'Borussia M.', age: 25 },
    { name: 'David Douděra', pos: 'MED', club: 'Slavia Praga', age: 27 }
  ],
  strengths: 'Gran solidez defensiva con sistema de 3 centrales; garra y compromiso colectivo.',
  weaknesses: 'Falta de creatividad en ataque y poca posesión contra rivales superiores.',
  playStyle: 'Bloque bajo compacto con salida rápida en contraataque y juego directo a los delanteros.'
},
// ==================== GRUPO B ====================
'Canadá': {
  fifaRanking: 49, group: 'B',
  coach: { name: 'Jesse Marsch', nationality: 'Estadounidense', style: 'Transiciones rápidas', formation: '4-2-3-1' },
  stats: { goalsFor: 1.6, goalsAgainst: 1.1, possession: 48, corners: 4.5, fouls: 12, yellowCards: 1.5, redCards: 0.1, shots: 10.5, shotsOnTarget: 4.2, passAccuracy: 81, cleanSheets: 4, tackles: 16, interceptions: 11, saves: 3.2 },
  recentMatches: [
    { date: '2026-05-20', opponent: 'México', result: 'D', gf: 1, ga: 1, possession: 45 },
    { date: '2026-03-24', opponent: 'Jamaica', result: 'W', gf: 2, ga: 0, possession: 52 },
    { date: '2025-11-21', opponent: 'Honduras', result: 'W', gf: 3, ga: 1, possession: 55 }
  ],
  players: [
    { name: 'Maxime Crépeau', pos: 'POR', club: 'Portland', age: 32 },
    { name: 'Alphonso Davies', pos: 'DEF', club: 'Bayern Múnich', age: 25 },
    { name: 'Stephen Eustáquio', pos: 'MED', club: 'Porto', age: 29 },
    { name: 'Jonathan David', pos: 'DEL', club: 'Lille', age: 26 },
    { name: 'Tajon Buchanan', pos: 'DEL', club: 'Inter Milan', age: 27 },
    { name: 'Alistair Johnston', pos: 'DEF', club: 'Celtic', age: 27 },
    { name: 'Ismaël Koné', pos: 'MED', club: 'Watford', age: 24 },
    { name: 'Cyle Larin', pos: 'DEL', club: 'Mallorca', age: 31 }
  ],
  strengths: 'Extrema velocidad en las bandas con Davies y Buchanan; letales a la contra.',
  weaknesses: 'Falta de experiencia en mediocampo para controlar el ritmo del partido.',
  playStyle: 'Presión media y verticalidad absoluta al recuperar el balón.'
},
'Bosnia': {
  fifaRanking: 62, group: 'B',
  coach: { name: 'Savo Milošević', nationality: 'Serbia', style: 'Físico y directo', formation: '4-3-3' },
  stats: { goalsFor: 1.2, goalsAgainst: 1.5, possession: 46, corners: 4.0, fouls: 14, yellowCards: 2.2, redCards: 0.2, shots: 9.0, shotsOnTarget: 3.5, passAccuracy: 78, cleanSheets: 2, tackles: 18, interceptions: 12, saves: 3.5 },
  recentMatches: [
    { date: '2026-05-18', opponent: 'Eslovaquia', result: 'L', gf: 1, ga: 2, possession: 48 },
    { date: '2026-03-21', opponent: 'Islandia', result: 'W', gf: 2, ga: 0, possession: 51 },
    { date: '2025-11-19', opponent: 'Portugal', result: 'L', gf: 0, ga: 3, possession: 35 }
  ],
  players: [
    { name: 'Ibrahim Šehić', pos: 'POR', club: 'Al-Khaleej', age: 37 },
    { name: 'Sead Kolašinac', pos: 'DEF', club: 'Atalanta', age: 32 },
    { name: 'Anel Ahmedhodžić', pos: 'DEF', club: 'Sheffield Utd', age: 27 },
    { name: 'Rade Krunić', pos: 'MED', club: 'Fenerbahçe', age: 32 },
    { name: 'Edin Džeko', pos: 'DEL', club: 'Fenerbahçe', age: 40 },
    { name: 'Ermedin Demirović', pos: 'DEL', club: 'Augsburg', age: 28 },
    { name: 'Amar Dedić', pos: 'DEF', club: 'RB Salzburg', age: 23 },
    { name: 'Miralem Pjanić', pos: 'MED', club: 'Sharjah', age: 36 }
  ],
  strengths: 'Juego aéreo ofensivo (Džeko) y mucha fricción física en el medio.',
  weaknesses: 'Plantel envejecido en puestos clave y transición defensiva lenta.',
  playStyle: 'Juego de contacto, buscando faltas y pelotas paradas para imponer su altura.'
},
'Qatar': {
  fifaRanking: 58, group: 'B',
  coach: { name: 'Tintín Márquez', nationality: 'Española', style: 'Posesión y toque', formation: '3-5-2' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.3, possession: 52, corners: 4.8, fouls: 10, yellowCards: 1.4, redCards: 0.0, shots: 11.0, shotsOnTarget: 4.1, passAccuracy: 84, cleanSheets: 3, tackles: 14, interceptions: 10, saves: 2.8 },
  recentMatches: [
    { date: '2026-05-22', opponent: 'China', result: 'W', gf: 2, ga: 1, possession: 56 },
    { date: '2026-03-26', opponent: 'Jordania', result: 'D', gf: 1, ga: 1, possession: 50 },
    { date: '2025-11-20', opponent: 'Kuwait', result: 'W', gf: 3, ga: 0, possession: 60 }
  ],
  players: [
    { name: 'Meshaal Barsham', pos: 'POR', club: 'Al Sadd', age: 28 },
    { name: 'Boualem Khoukhi', pos: 'DEF', club: 'Al Sadd', age: 35 },
    { name: 'Pedro Miguel', pos: 'DEF', club: 'Al Sadd', age: 35 },
    { name: 'Abdulaziz Hatem', pos: 'MED', club: 'Al Rayyan', age: 35 },
    { name: 'Hassan Al-Haydos', pos: 'MED', club: 'Al Sadd', age: 35 },
    { name: 'Akram Afif', pos: 'DEL', club: 'Al Sadd', age: 29 },
    { name: 'Almoez Ali', pos: 'DEL', club: 'Al-Duhail', age: 29 },
    { name: 'Homam Ahmed', pos: 'DEF', club: 'Al-Gharafa', age: 26 }
  ],
  strengths: 'Excelente química entre Afif y Almoez Ali; campeones asiáticos con confianza.',
  weaknesses: 'Bajo nivel de competencia en su liga local y fragilidad defensiva ante presión alta.',
  playStyle: 'Salida limpia desde el fondo, usando carrileros profundos y asociaciones cortas.'
},
'Suiza': {
  fifaRanking: 14, group: 'B',
  coach: { name: 'Murat Yakin', nationality: 'Suiza', style: 'Sólido y estructurado', formation: '4-2-3-1' },
  stats: { goalsFor: 1.8, goalsAgainst: 0.9, possession: 54, corners: 5.2, fouls: 11.5, yellowCards: 1.6, redCards: 0.0, shots: 13.5, shotsOnTarget: 5.0, passAccuracy: 86, cleanSheets: 5, tackles: 15, interceptions: 13, saves: 3.1 },
  recentMatches: [
    { date: '2026-05-25', opponent: 'Italia', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-22', opponent: 'Rumania', result: 'W', gf: 2, ga: 0, possession: 58 },
    { date: '2025-11-18', opponent: 'Kosovo', result: 'D', gf: 1, ga: 1, possession: 60 }
  ],
  players: [
    { name: 'Yann Sommer', pos: 'POR', club: 'Inter Milan', age: 37 },
    { name: 'Manuel Akanji', pos: 'DEF', club: 'Man City', age: 30 },
    { name: 'Ricardo Rodríguez', pos: 'DEF', club: 'Torino', age: 33 },
    { name: 'Granit Xhaka', pos: 'MED', club: 'Bayer Leverkusen', age: 33 },
    { name: 'Remo Freuler', pos: 'MED', club: 'Bologna', age: 34 },
    { name: 'Xherdan Shaqiri', pos: 'MED', club: 'Chicago Fire', age: 34 },
    { name: 'Breel Embolo', pos: 'DEL', club: 'Mónaco', age: 29 },
    { name: 'Denis Zakaria', pos: 'MED', club: 'Mónaco', age: 29 }
  ],
  strengths: 'Bloque defensivo muy sólido (Akanji, Sommer) y liderazgo absoluto de Xhaka.',
  weaknesses: 'Falta un goleador nato consistente; a veces son demasiado previsibles.',
  playStyle: 'Construcción paciente, laterales proyectados y mucha disciplina táctica.'
},
// ==================== GRUPO C ====================
'Brasil': {
  fifaRanking: 5, group: 'C',
  coach: { name: 'Dorival Júnior', nationality: 'Brasileña', style: 'Ofensivo y creativo', formation: '4-2-3-1' },
  stats: { goalsFor: 2.3, goalsAgainst: 0.8, possession: 59, corners: 6.8, fouls: 12, yellowCards: 1.8, redCards: 0.1, shots: 16.0, shotsOnTarget: 7.1, passAccuracy: 89, cleanSheets: 6, tackles: 14, interceptions: 10, saves: 2.1 },
  recentMatches: [
    { date: '2026-05-26', opponent: 'Uruguay', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-03-24', opponent: 'Inglaterra', result: 'W', gf: 1, ga: 0, possession: 48 },
    { date: '2025-11-21', opponent: 'Argentina', result: 'L', gf: 0, ga: 1, possession: 51 }
  ],
  players: [
    { name: 'Alisson Becker', pos: 'POR', club: 'Liverpool', age: 33 },
    { name: 'Marquinhos', pos: 'DEF', club: 'PSG', age: 32 },
    { name: 'Éder Militão', pos: 'DEF', club: 'Real Madrid', age: 28 },
    { name: 'Bruno Guimarães', pos: 'MED', club: 'Newcastle', age: 28 },
    { name: 'Lucas Paquetá', pos: 'MED', club: 'West Ham', age: 28 },
    { name: 'Vinícius Júnior', pos: 'DEL', club: 'Real Madrid', age: 25 },
    { name: 'Rodrygo', pos: 'DEL', club: 'Real Madrid', age: 25 },
    { name: 'Endrick', pos: 'DEL', club: 'Real Madrid', age: 19 }
  ],
  strengths: 'Talento individual abrumador en ataque (Vini, Rodrygo) y poderío físico.',
  weaknesses: 'Desequilibrios defensivos por los laterales cuando atacan con muchos.',
  playStyle: 'Jogo bonito moderno: mucha libertad en el último tercio, regates y verticalidad.'
},
'Marruecos': {
  fifaRanking: 13, group: 'C',
  coach: { name: 'Walid Regragui', nationality: 'Marroquí', style: 'Ordenado y reactivo', formation: '4-1-4-1' },
  stats: { goalsFor: 1.5, goalsAgainst: 0.6, possession: 46, corners: 4.0, fouls: 13, yellowCards: 1.8, redCards: 0.1, shots: 10.5, shotsOnTarget: 4.1, passAccuracy: 81, cleanSheets: 6, tackles: 19, interceptions: 13, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Egipto', result: 'W', gf: 1, ga: 0, possession: 44 },
    { date: '2026-05-29', opponent: 'Senegal', result: 'D', gf: 0, ga: 0, possession: 48 },
    { date: '2026-03-24', opponent: 'Argelia', result: 'W', gf: 2, ga: 1, possession: 50 }
  ],
  players: [
    { name: 'Yassine Bounou', pos: 'POR', club: 'Al-Hilal', age: 35 },
    { name: 'Achraf Hakimi', pos: 'DEF', club: 'PSG', age: 27 },
    { name: 'Nayef Aguerd', pos: 'DEF', club: 'West Ham', age: 30 },
    { name: 'Sofyan Amrabat', pos: 'MED', club: 'Man United', age: 29 },
    { name: 'Azzedine Ounahi', pos: 'MED', club: 'Marseille', age: 26 },
    { name: 'Hakim Ziyech', pos: 'MED', club: 'Galatasaray', age: 33 },
    { name: 'Youssef En-Nesyri', pos: 'DEL', club: 'Sevilla', age: 29 },
    { name: 'Brahim Díaz', pos: 'DEL', club: 'Real Madrid', age: 26 }
  ],
  strengths: 'Arquero de élite, defensa impenetrable y contraataques liderados por Hakimi.',
  weaknesses: 'Les cuesta generar peligro ante equipos que se defienden muy atrás.',
  playStyle: 'Bloque medio/bajo muy agresivo y salidas rápidas con extremos técnicos.'
},
'Haití': {
  fifaRanking: 89, group: 'C',
  coach: { name: 'Gabriel Calderón Pellegrino', nationality: 'Argentina', style: 'Defensivo y directo', formation: '5-4-1' },
  stats: { goalsFor: 0.9, goalsAgainst: 1.8, possession: 38, corners: 3.2, fouls: 15, yellowCards: 2.3, redCards: 0.1, shots: 7.5, shotsOnTarget: 2.8, passAccuracy: 72, cleanSheets: 1, tackles: 21, interceptions: 16, saves: 4.5 },
  recentMatches: [
    { date: '2026-05-20', opponent: 'Jamaica', result: 'L', gf: 0, ga: 1, possession: 42 },
    { date: '2026-03-22', opponent: 'Trinidad', result: 'W', gf: 2, ga: 0, possession: 45 },
    { date: '2025-11-18', opponent: 'Cuba', result: 'D', gf: 0, ga: 0, possession: 50 }
  ],
  players: [
    { name: 'Johny Placide', pos: 'POR', club: 'Bastia', age: 38 },
    { name: 'Ricardo Adé', pos: 'DEF', club: 'LDU Quito', age: 35 },
    { name: 'Carlens Arcus', pos: 'DEF', club: 'Angers', age: 29 },
    { name: 'Bryan Alceus', pos: 'MED', club: 'Doxa', age: 30 },
    { name: 'Steeven Saba', pos: 'MED', club: 'Violette', age: 33 },
    { name: 'Frantzdy Pierrot', pos: 'DEL', club: 'Maccabi Haifa', age: 31 },
    { name: 'Duckens Nazon', pos: 'DEL', club: 'CSKA Sofía', age: 32 },
    { name: 'Mikaël Cantave', pos: 'MED', club: 'Vancouver FC', age: 29 }
  ],
  strengths: 'Gran presencia física y fortaleza en los duelos cuerpo a cuerpo.',
  weaknesses: 'Deficiencias tácticas graves y muy baja posesión de balón.',
  playStyle: 'Cerrojo defensivo intentando cazar un contragolpe aislado o balón parado.'
},
'Escocia': {
  fifaRanking: 36, group: 'C',
  coach: { name: 'Steve Clarke', nationality: 'Escocesa', style: 'Combativo y rígido', formation: '3-4-2-1' },
  stats: { goalsFor: 1.3, goalsAgainst: 1.1, possession: 45, corners: 5.0, fouls: 11, yellowCards: 1.6, redCards: 0.0, shots: 9.8, shotsOnTarget: 3.5, passAccuracy: 78, cleanSheets: 3, tackles: 18, interceptions: 14, saves: 2.9 },
  recentMatches: [
    { date: '2026-05-22', opponent: 'Inglaterra', result: 'L', gf: 1, ga: 3, possession: 35 },
    { date: '2026-03-25', opponent: 'Irlanda', result: 'W', gf: 1, ga: 0, possession: 48 },
    { date: '2025-11-19', opponent: 'Noruega', result: 'D', gf: 2, ga: 2, possession: 42 }
  ],
  players: [
    { name: 'Angus Gunn', pos: 'POR', club: 'Norwich City', age: 30 },
    { name: 'Andy Robertson', pos: 'DEF', club: 'Liverpool', age: 32 },
    { name: 'Kieran Tierney', pos: 'DEF', club: 'Real Sociedad', age: 29 },
    { name: 'Scott McTominay', pos: 'MED', club: 'Man United', age: 29 },
    { name: 'John McGinn', pos: 'MED', club: 'Aston Villa', age: 31 },
    { name: 'Billy Gilmour', pos: 'MED', club: 'Brighton', age: 24 },
    { name: 'Pavel Šulc', pos: 'MED', club: 'Viktoria Plzeň', age: 25 },
    { name: 'Ondřej Lingr', pos: 'MED', club: 'Feyenoord', age: 28 },
    { name: 'Antonín Barák', pos: 'MED', club: 'Fiorentina', age: 31 },
    { name: 'Adam Hložek', pos: 'DEL', club: 'Hoffenheim', age: 24 },
    { name: 'Patrik Schick', pos: 'DEL', club: 'Bayer Leverkusen', age: 30 },
    { name: 'Mojmír Chytil', pos: 'DEL', club: 'Slavia Praga', age: 25 },
    { name: 'Jan Kuchta', pos: 'DEL', club: 'Midtjylland', age: 29 },
    { name: 'Václav Černý', pos: 'DEL', club: 'Wolfsburgo', age: 28 },
    { name: 'Matěj Jurásek', pos: 'DEL', club: 'Slavia Praga', age: 22 },
    { name: 'Tomáš Čvančara', pos: 'DEL', club: 'Borussia M.', age: 25 },
    { name: 'David Douděra', pos: 'MED', club: 'Slavia Praga', age: 27 }
  ],
  strengths: 'Gran solidez defensiva con sistema de 3 centrales; garra y compromiso colectivo.',
  weaknesses: 'Falta de creatividad en ataque y poca posesión contra rivales superiores.',
  playStyle: 'Bloque bajo compacto con salida rápida en contraataque y juego directo a los delanteros.'
},
// ==================== GRUPO B ====================
'Canadá': {
  fifaRanking: 49, group: 'B',
  coach: { name: 'Jesse Marsch', nationality: 'Estadounidense', style: 'Transiciones rápidas', formation: '4-2-3-1' },
  stats: { goalsFor: 1.6, goalsAgainst: 1.1, possession: 48, corners: 4.5, fouls: 12, yellowCards: 1.5, redCards: 0.1, shots: 10.5, shotsOnTarget: 4.2, passAccuracy: 81, cleanSheets: 4, tackles: 16, interceptions: 11, saves: 3.2 },
  recentMatches: [
    { date: '2026-05-20', opponent: 'México', result: 'D', gf: 1, ga: 1, possession: 45 },
    { date: '2026-03-24', opponent: 'Jamaica', result: 'W', gf: 2, ga: 0, possession: 52 },
    { date: '2025-11-21', opponent: 'Honduras', result: 'W', gf: 3, ga: 1, possession: 55 }
  ],
  players: [
    { name: 'Maxime Crépeau', pos: 'POR', club: 'Portland', age: 32 },
    { name: 'Alphonso Davies', pos: 'DEF', club: 'Bayern Múnich', age: 25 },
    { name: 'Stephen Eustáquio', pos: 'MED', club: 'Porto', age: 29 },
    { name: 'Jonathan David', pos: 'DEL', club: 'Lille', age: 26 },
    { name: 'Tajon Buchanan', pos: 'DEL', club: 'Inter Milan', age: 27 },
    { name: 'Alistair Johnston', pos: 'DEF', club: 'Celtic', age: 27 },
    { name: 'Ismaël Koné', pos: 'MED', club: 'Watford', age: 24 },
    { name: 'Cyle Larin', pos: 'DEL', club: 'Mallorca', age: 31 }
  ],
  strengths: 'Extrema velocidad en las bandas con Davies y Buchanan; letales a la contra.',
  weaknesses: 'Falta de experiencia en mediocampo para controlar el ritmo del partido.',
  playStyle: 'Presión media y verticalidad absoluta al recuperar el balón.'
},
'Bosnia': {
  fifaRanking: 62, group: 'B',
  coach: { name: 'Savo Milošević', nationality: 'Serbia', style: 'Físico y directo', formation: '4-3-3' },
  stats: { goalsFor: 1.2, goalsAgainst: 1.5, possession: 46, corners: 4.0, fouls: 14, yellowCards: 2.2, redCards: 0.2, shots: 9.0, shotsOnTarget: 3.5, passAccuracy: 78, cleanSheets: 2, tackles: 18, interceptions: 12, saves: 3.5 },
  recentMatches: [
    { date: '2026-05-18', opponent: 'Eslovaquia', result: 'L', gf: 1, ga: 2, possession: 48 },
    { date: '2026-03-21', opponent: 'Islandia', result: 'W', gf: 2, ga: 0, possession: 51 },
    { date: '2025-11-19', opponent: 'Portugal', result: 'L', gf: 0, ga: 3, possession: 35 }
  ],
  players: [
    { name: 'Ibrahim Šehić', pos: 'POR', club: 'Al-Khaleej', age: 37 },
    { name: 'Sead Kolašinac', pos: 'DEF', club: 'Atalanta', age: 32 },
    { name: 'Anel Ahmedhodžić', pos: 'DEF', club: 'Sheffield Utd', age: 27 },
    { name: 'Rade Krunić', pos: 'MED', club: 'Fenerbahçe', age: 32 },
    { name: 'Edin Džeko', pos: 'DEL', club: 'Fenerbahçe', age: 40 },
    { name: 'Ermedin Demirović', pos: 'DEL', club: 'Augsburg', age: 28 },
    { name: 'Amar Dedić', pos: 'DEF', club: 'RB Salzburg', age: 23 },
    { name: 'Miralem Pjanić', pos: 'MED', club: 'Sharjah', age: 36 }
  ],
  strengths: 'Juego aéreo ofensivo (Džeko) y mucha fricción física en el medio.',
  weaknesses: 'Plantel envejecido en puestos clave y transición defensiva lenta.',
  playStyle: 'Juego de contacto, buscando faltas y pelotas paradas para imponer su altura.'
},
'Qatar': {
  fifaRanking: 58, group: 'B',
  coach: { name: 'Tintín Márquez', nationality: 'Española', style: 'Posesión y toque', formation: '3-5-2' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.3, possession: 52, corners: 4.8, fouls: 10, yellowCards: 1.4, redCards: 0.0, shots: 11.0, shotsOnTarget: 4.1, passAccuracy: 84, cleanSheets: 3, tackles: 14, interceptions: 10, saves: 2.8 },
  recentMatches: [
    { date: '2026-05-22', opponent: 'China', result: 'W', gf: 2, ga: 1, possession: 56 },
    { date: '2026-03-26', opponent: 'Jordania', result: 'D', gf: 1, ga: 1, possession: 50 },
    { date: '2025-11-20', opponent: 'Kuwait', result: 'W', gf: 3, ga: 0, possession: 60 }
  ],
  players: [
    { name: 'Meshaal Barsham', pos: 'POR', club: 'Al Sadd', age: 28 },
    { name: 'Boualem Khoukhi', pos: 'DEF', club: 'Al Sadd', age: 35 },
    { name: 'Pedro Miguel', pos: 'DEF', club: 'Al Sadd', age: 35 },
    { name: 'Abdulaziz Hatem', pos: 'MED', club: 'Al Rayyan', age: 35 },
    { name: 'Hassan Al-Haydos', pos: 'MED', club: 'Al Sadd', age: 35 },
    { name: 'Akram Afif', pos: 'DEL', club: 'Al Sadd', age: 29 },
    { name: 'Almoez Ali', pos: 'DEL', club: 'Al-Duhail', age: 29 },
    { name: 'Homam Ahmed', pos: 'DEF', club: 'Al-Gharafa', age: 26 }
  ],
  strengths: 'Excelente química entre Afif y Almoez Ali; campeones asiáticos con confianza.',
  weaknesses: 'Bajo nivel de competencia en su liga local y fragilidad defensiva ante presión alta.',
  playStyle: 'Salida limpia desde el fondo, usando carrileros profundos y asociaciones cortas.'
},
'Suiza': {
  fifaRanking: 14, group: 'B',
  coach: { name: 'Murat Yakin', nationality: 'Suiza', style: 'Sólido y estructurado', formation: '4-2-3-1' },
  stats: { goalsFor: 1.8, goalsAgainst: 0.9, possession: 54, corners: 5.2, fouls: 11.5, yellowCards: 1.6, redCards: 0.0, shots: 13.5, shotsOnTarget: 5.0, passAccuracy: 86, cleanSheets: 5, tackles: 15, interceptions: 13, saves: 3.1 },
  recentMatches: [
    { date: '2026-05-25', opponent: 'Italia', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-22', opponent: 'Rumania', result: 'W', gf: 2, ga: 0, possession: 58 },
    { date: '2025-11-18', opponent: 'Kosovo', result: 'D', gf: 1, ga: 1, possession: 60 }
  ],
  players: [
    { name: 'Yann Sommer', pos: 'POR', club: 'Inter Milan', age: 37 },
    { name: 'Manuel Akanji', pos: 'DEF', club: 'Man City', age: 30 },
    { name: 'Ricardo Rodríguez', pos: 'DEF', club: 'Torino', age: 33 },
    { name: 'Granit Xhaka', pos: 'MED', club: 'Bayer Leverkusen', age: 33 },
    { name: 'Remo Freuler', pos: 'MED', club: 'Bologna', age: 34 },
    { name: 'Xherdan Shaqiri', pos: 'MED', club: 'Chicago Fire', age: 34 },
    { name: 'Breel Embolo', pos: 'DEL', club: 'Mónaco', age: 29 },
    { name: 'Denis Zakaria', pos: 'MED', club: 'Mónaco', age: 29 }
  ],
  strengths: 'Bloque defensivo muy sólido (Akanji, Sommer) y liderazgo absoluto de Xhaka.',
  weaknesses: 'Falta un goleador nato consistente; a veces son demasiado previsibles.',
  playStyle: 'Construcción paciente, laterales proyectados y mucha disciplina táctica.'
},
// ==================== GRUPO C ====================
'Brasil': {
  fifaRanking: 5, group: 'C',
  coach: { name: 'Dorival Júnior', nationality: 'Brasileña', style: 'Ofensivo y creativo', formation: '4-2-3-1' },
  stats: { goalsFor: 2.3, goalsAgainst: 0.8, possession: 59, corners: 6.8, fouls: 12, yellowCards: 1.8, redCards: 0.1, shots: 16.0, shotsOnTarget: 7.1, passAccuracy: 89, cleanSheets: 6, tackles: 14, interceptions: 10, saves: 2.1 },
  recentMatches: [
    { date: '2026-05-26', opponent: 'Uruguay', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-03-24', opponent: 'Inglaterra', result: 'W', gf: 1, ga: 0, possession: 48 },
    { date: '2025-11-21', opponent: 'Argentina', result: 'L', gf: 0, ga: 1, possession: 51 }
  ],
  players: [
    { name: 'Alisson Becker', pos: 'POR', club: 'Liverpool', age: 33 },
    { name: 'Marquinhos', pos: 'DEF', club: 'PSG', age: 32 },
    { name: 'Éder Militão', pos: 'DEF', club: 'Real Madrid', age: 28 },
    { name: 'Bruno Guimarães', pos: 'MED', club: 'Newcastle', age: 28 },
    { name: 'Lucas Paquetá', pos: 'MED', club: 'West Ham', age: 28 },
    { name: 'Vinícius Júnior', pos: 'DEL', club: 'Real Madrid', age: 25 },
    { name: 'Rodrygo', pos: 'DEL', club: 'Real Madrid', age: 25 },
    { name: 'Endrick', pos: 'DEL', club: 'Real Madrid', age: 19 }
  ],
  strengths: 'Talento individual abrumador en ataque (Vini, Rodrygo) y poderío físico.',
  weaknesses: 'Desequilibrios defensivos por los laterales cuando atacan con muchos.',
  playStyle: 'Jogo bonito moderno: mucha libertad en el último tercio, regates y verticalidad.'
},
'Marruecos': {
  fifaRanking: 13, group: 'C',
  coach: { name: 'Walid Regragui', nationality: 'Marroquí', style: 'Ordenado y reactivo', formation: '4-1-4-1' },
  stats: { goalsFor: 1.5, goalsAgainst: 0.6, possession: 46, corners: 4.0, fouls: 13, yellowCards: 1.8, redCards: 0.1, shots: 10.5, shotsOnTarget: 4.1, passAccuracy: 81, cleanSheets: 6, tackles: 19, interceptions: 13, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Egipto', result: 'W', gf: 1, ga: 0, possession: 44 },
    { date: '2026-05-29', opponent: 'Senegal', result: 'D', gf: 0, ga: 0, possession: 48 },
    { date: '2026-03-24', opponent: 'Argelia', result: 'W', gf: 2, ga: 1, possession: 50 }
  ],
  players: [
    { name: 'Yassine Bounou', pos: 'POR', club: 'Al-Hilal', age: 35 },
    { name: 'Achraf Hakimi', pos: 'DEF', club: 'PSG', age: 27 },
    { name: 'Nayef Aguerd', pos: 'DEF', club: 'West Ham', age: 30 },
    { name: 'Sofyan Amrabat', pos: 'MED', club: 'Man United', age: 29 },
    { name: 'Azzedine Ounahi', pos: 'MED', club: 'Marseille', age: 26 },
    { name: 'Hakim Ziyech', pos: 'MED', club: 'Galatasaray', age: 33 },
    { name: 'Youssef En-Nesyri', pos: 'DEL', club: 'Sevilla', age: 29 },
    { name: 'Brahim Díaz', pos: 'DEL', club: 'Real Madrid', age: 26 }
  ],
  strengths: 'Arquero de élite, defensa impenetrable y contraataques liderados por Hakimi.',
  weaknesses: 'Les cuesta generar peligro ante equipos que se defienden muy atrás.',
  playStyle: 'Bloque medio/bajo muy agresivo y salidas rápidas con extremos técnicos.'
},
'Haití': {
  fifaRanking: 89, group: 'C',
  coach: { name: 'Gabriel Calderón Pellegrino', nationality: 'Argentina', style: 'Defensivo y directo', formation: '5-4-1' },
  stats: { goalsFor: 0.9, goalsAgainst: 1.8, possession: 38, corners: 3.2, fouls: 15, yellowCards: 2.3, redCards: 0.1, shots: 7.5, shotsOnTarget: 2.8, passAccuracy: 72, cleanSheets: 1, tackles: 21, interceptions: 16, saves: 4.5 },
  recentMatches: [
    { date: '2026-05-20', opponent: 'Jamaica', result: 'L', gf: 0, ga: 1, possession: 42 },
    { date: '2026-03-22', opponent: 'Trinidad', result: 'W', gf: 2, ga: 0, possession: 45 },
    { date: '2025-11-18', opponent: 'Cuba', result: 'D', gf: 0, ga: 0, possession: 50 }
  ],
  players: [
    { name: 'Johny Placide', pos: 'POR', club: 'Bastia', age: 38 },
    { name: 'Ricardo Adé', pos: 'DEF', club: 'LDU Quito', age: 35 },
    { name: 'Carlens Arcus', pos: 'DEF', club: 'Angers', age: 29 },
    { name: 'Bryan Alceus', pos: 'MED', club: 'Doxa', age: 30 },
    { name: 'Steeven Saba', pos: 'MED', club: 'Violette', age: 33 },
    { name: 'Frantzdy Pierrot', pos: 'DEL', club: 'Maccabi Haifa', age: 31 },
    { name: 'Duckens Nazon', pos: 'DEL', club: 'CSKA Sofía', age: 32 },
    { name: 'Mikaël Cantave', pos: 'MED', club: 'Vancouver FC', age: 29 }
  ],
  strengths: 'Gran presencia física y fortaleza en los duelos cuerpo a cuerpo.',
  weaknesses: 'Deficiencias tácticas graves y muy baja posesión de balón.',
  playStyle: 'Cerrojo defensivo intentando cazar un contragolpe aislado o balón parado.'
},
'Escocia': {
  fifaRanking: 36, group: 'C',
  coach: { name: 'Steve Clarke', nationality: 'Escocesa', style: 'Combativo y rígido', formation: '3-4-2-1' },
  stats: { goalsFor: 1.3, goalsAgainst: 1.1, possession: 45, corners: 5.0, fouls: 11, yellowCards: 1.6, redCards: 0.0, shots: 9.8, shotsOnTarget: 3.5, passAccuracy: 78, cleanSheets: 3, tackles: 18, interceptions: 14, saves: 2.9 },
  recentMatches: [
    { date: '2026-05-22', opponent: 'Inglaterra', result: 'L', gf: 1, ga: 3, possession: 35 },
    { date: '2026-03-25', opponent: 'Irlanda', result: 'W', gf: 1, ga: 0, possession: 48 },
    { date: '2025-11-19', opponent: 'Noruega', result: 'D', gf: 2, ga: 2, possession: 42 }
  ],
  players: [
    { name: 'Angus Gunn', pos: 'POR', club: 'Norwich City', age: 30 },
    { name: 'Andy Robertson', pos: 'DEF', club: 'Liverpool', age: 32 },
    { name: 'Kieran Tierney', pos: 'DEF', club: 'Real Sociedad', age: 29 },
    { name: 'Scott McTominay', pos: 'MED', club: 'Man United', age: 29 },
    { name: 'John McGinn', pos: 'MED', club: 'Aston Villa', age: 31 },
    { name: 'Billy Gilmour', pos: 'MED', club: 'Brighton', age: 24 },
    { name: 'Ché Adams', pos: 'DEL', club: 'Southampton', age: 29 },
    { name: 'Callum McGregor', pos: 'MED', club: 'Celtic', age: 32 }
  ],
  strengths: 'Corazón, empuje por las bandas (Robertson) y llegadas de McTominay.',
  weaknesses: 'Les falta un goleador prolífico y sufren contra rivales de mucha posesión.',
  playStyle: 'Juego por las bandas con centros constantes y presión incansable en el medio.'
},
// ==================== GRUPO D ====================
'Estados Unidos': {
  fifaRanking: 11, group: 'D',
  coach: { name: 'Gregg Berhalter', nationality: 'Estadounidense', style: 'Ofensivo y dinámico', formation: '4-3-3' },
  stats: { goalsFor: 1.8, goalsAgainst: 1.0, possession: 54, corners: 5.8, fouls: 11, yellowCards: 1.5, redCards: 0.1, shots: 13.0, shotsOnTarget: 5.5, passAccuracy: 84, cleanSheets: 4, tackles: 16, interceptions: 11, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Uruguay', result: 'D', gf: 1, ga: 1, possession: 50 },
    { date: '2026-05-29', opponent: 'Ecuador', result: 'W', gf: 2, ga: 0, possession: 53 },
    { date: '2026-03-24', opponent: 'Alemania', result: 'L', gf: 1, ga: 3, possession: 45 }
  ],
  players: [
    { name: 'Matt Turner', pos: 'POR', club: 'Nott Forest', age: 31 },
    { name: 'Sergiño Dest', pos: 'DEF', club: 'PSV', age: 25 },
    { name: 'Chris Richards', pos: 'DEF', club: 'Crystal Palace', age: 26 },
    { name: 'Weston McKennie', pos: 'MED', club: 'Juventus', age: 27 },
    { name: 'Tyler Adams', pos: 'MED', club: 'Bournemouth', age: 27 },
    { name: 'Giovanni Reyna', pos: 'MED', club: 'Dortmund', age: 23 },
    { name: 'Christian Pulisic', pos: 'DEL', club: 'AC Milan', age: 27 },
    { name: 'Folarin Balogun', pos: 'DEL', club: 'Mónaco', age: 24 }
  ],
  strengths: 'Gran despliegue físico, transiciones rápidas y juventud con experiencia europea.',
  weaknesses: 'Errores defensivos puntuales y falta de consistencia ante rivales top.',
  playStyle: 'Presión alta y verticalidad utilizando la velocidad de sus extremos.'
},
'Paraguay': {
  fifaRanking: 45, group: 'D',
  coach: { name: 'Daniel Garnero', nationality: 'Argentina', style: 'Combativo y directo', formation: '4-4-2' },
  stats: { goalsFor: 1.0, goalsAgainst: 1.1, possession: 42, corners: 3.8, fouls: 16, yellowCards: 2.5, redCards: 0.2, shots: 8.5, shotsOnTarget: 3.0, passAccuracy: 75, cleanSheets: 3, tackles: 22, interceptions: 15, saves: 3.8 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Perú', result: 'D', gf: 0, ga: 0, possession: 45 },
    { date: '2026-05-28', opponent: 'Chile', result: 'W', gf: 1, ga: 0, possession: 38 },
    { date: '2026-03-26', opponent: 'Venezuela', result: 'L', gf: 0, ga: 1, possession: 40 }
  ],
  players: [
    { name: 'Carlos Coronel', pos: 'POR', club: 'NY Red Bulls', age: 29 },
    { name: 'Gustavo Gómez', pos: 'DEF', club: 'Palmeiras', age: 33 },
    { name: 'Junior Alonso', pos: 'DEF', club: 'Krasnodar', age: 33 },
    { name: 'Mathías Villasanti', pos: 'MED', club: 'Gremio', age: 29 },
    { name: 'Andrés Cubas', pos: 'MED', club: 'Vancouver', age: 30 },
    { name: 'Miguel Almirón', pos: 'MED', club: 'Newcastle', age: 32 },
    { name: 'Julio Enciso', pos: 'DEL', club: 'Brighton', age: 22 },
    { name: 'Ramón Sosa', pos: 'DEL', club: 'Talleres', age: 26 }
  ],
  strengths: 'Firmeza defensiva tradicional (garra guaraní) y contragolpes letales con Almirón y Enciso.',
  weaknesses: 'Generación de juego pobre en estático; poca posesión de pelota.',
  playStyle: 'Defensa aguerrida en bloque bajo y juego directo a sus velocistas ofensivos.'
},
'Australia': {
  fifaRanking: 23, group: 'D',
  coach: { name: 'Graham Arnold', nationality: 'Australiana', style: 'Físico y directo', formation: '4-4-2' },
  stats: { goalsFor: 1.4, goalsAgainst: 1.1, possession: 45, corners: 4.2, fouls: 12.5, yellowCards: 1.8, redCards: 0.0, shots: 9.5, shotsOnTarget: 3.8, passAccuracy: 76, cleanSheets: 3, tackles: 18, interceptions: 15, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Corea del Sur', result: 'L', gf: 1, ga: 2, possession: 40 },
    { date: '2026-05-28', opponent: 'Japón', result: 'D', gf: 0, ga: 0, possession: 38 },
    { date: '2026-03-25', opponent: 'Irán', result: 'W', gf: 1, ga: 0, possession: 45 }
  ],
  players: [
    { name: 'Mathew Ryan', pos: 'POR', club: 'AZ Alkmaar', age: 34 },
    { name: 'Harry Souttar', pos: 'DEF', club: 'Leicester', age: 27 },
    { name: 'Kye Rowles', pos: 'DEF', club: 'Hearts', age: 28 },
    { name: 'Jackson Irvine', pos: 'MED', club: 'St. Pauli', age: 33 },
    { name: 'Aaron Mooy', pos: 'MED', club: 'Retirado', age: 35 },
    { name: 'Riley McGree', pos: 'MED', club: 'Middlesbrough', age: 27 },
    { name: 'Craig Goodwin', pos: 'DEL', club: 'Al Wehda', age: 34 },
    { name: 'Mitchell Duke', pos: 'DEL', club: 'Machida', age: 35 }
  ],
  strengths: 'Gran poderío en el juego aéreo y orden táctico estricto.',
  weaknesses: 'Poca creatividad en el mediocampo y falta de profundidad en el plantel.',
  playStyle: 'Bloque bajo, balones largos y mucho enfoque en las jugadas a balón parado.'
},
'Turquía': {
  fifaRanking: 32, group: 'D',
  coach: { name: 'Vincenzo Montella', nationality: 'Italiana', style: 'Técnico y ofensivo', formation: '4-2-3-1' },
  stats: { goalsFor: 1.7, goalsAgainst: 1.3, possession: 52, corners: 5.0, fouls: 13, yellowCards: 2.1, redCards: 0.1, shots: 12.5, shotsOnTarget: 4.8, passAccuracy: 82, cleanSheets: 3, tackles: 15, interceptions: 12, saves: 2.9 },
  recentMatches: [
    { date: '2026-06-01', opponent: 'Polonia', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-26', opponent: 'Austria', result: 'L', gf: 1, ga: 3, possession: 48 },
    { date: '2026-03-24', opponent: 'Hungría', result: 'D', gf: 1, ga: 1, possession: 51 }
  ],
  players: [
    { name: 'Uğurcan Çakır', pos: 'POR', club: 'Trabzonspor', age: 30 },
    { name: 'Merih Demiral', pos: 'DEF', club: 'Al-Ahli', age: 28 },
    { name: 'Çağlar Söyüncü', pos: 'DEF', club: 'Fenerbahçe', age: 30 },
    { name: 'Hakan Çalhanoğlu', pos: 'MED', club: 'Inter Milan', age: 32 },
    { name: 'Orkun Kökçü', pos: 'MED', club: 'Benfica', age: 25 },
    { name: 'Arda Güler', pos: 'MED', club: 'Real Madrid', age: 21 },
    { name: 'Kenan Yıldız', pos: 'DEL', club: 'Juventus', age: 21 },
    { name: 'Barış Alper Yılmaz', pos: 'DEL', club: 'Galatasaray', age: 26 }
  ],
  strengths: 'Gran calidad técnica en mediocampo (Güler, Çalhanoğlu) y tiros de larga distancia.',
  weaknesses: 'Inconsistencia emocional y errores defensivos bajo presión.',
  playStyle: 'Juego asociativo por el medio y mucha creatividad en el último tercio.'
},
// ==================== GRUPO E ====================
'Alemania': {
  fifaRanking: 7, group: 'E',
  coach: { name: 'Julian Nagelsmann', nationality: 'Alemana', style: 'Ofensivo y dinámico', formation: '4-2-3-1' },
  stats: { goalsFor: 2.4, goalsAgainst: 0.9, possession: 60, corners: 6.5, fouls: 10, yellowCards: 1.2, redCards: 0.0, shots: 16.5, shotsOnTarget: 7.0, passAccuracy: 88, cleanSheets: 5, tackles: 14, interceptions: 11, saves: 2.5 },
  recentMatches: [
    { date: '2026-06-05', opponent: 'Francia', result: 'D', gf: 1, ga: 1, possession: 55 },
    { date: '2026-05-30', opponent: 'Países Bajos', result: 'W', gf: 2, ga: 1, possession: 58 },
    { date: '2026-03-24', opponent: 'España', result: 'W', gf: 2, ga: 0, possession: 52 }
  ],
  players: [
    { name: 'Marc-André ter Stegen', pos: 'POR', club: 'Barcelona', age: 34 },
    { name: 'Antonio Rüdiger', pos: 'DEF', club: 'Real Madrid', age: 33 },
    { name: 'Jonathan Tah', pos: 'DEF', club: 'Bayer Leverkusen', age: 30 },
    { name: 'Joshua Kimmich', pos: 'MED', club: 'Bayern Múnich', age: 31 },
    { name: 'İlkay Gündoğan', pos: 'MED', club: 'Barcelona', age: 35 },
    { name: 'Jamal Musiala', pos: 'MED', club: 'Bayern Múnich', age: 23 },
    { name: 'Florian Wirtz', pos: 'MED', club: 'Bayer Leverkusen', age: 23 },
    { name: 'Kai Havertz', pos: 'DEL', club: 'Arsenal', age: 26 }
  ],
  strengths: 'Talento generacional (Musiala, Wirtz) y dominio total de la posesión.',
  weaknesses: 'Falta un 9 de área tradicional que defina partidos cerrados.',
  playStyle: 'Presión tras pérdida extrema (Gegenpressing) y mucha movilidad en ataque.'
},
'Curazao': {
  fifaRanking: 85, group: 'E',
  coach: { name: 'Dick Advocaat', nationality: 'Neerlandesa', style: 'Ordenado y defensivo', formation: '4-3-3' },
  stats: { goalsFor: 1.1, goalsAgainst: 1.5, possession: 45, corners: 3.5, fouls: 14, yellowCards: 2.0, redCards: 0.1, shots: 8.0, shotsOnTarget: 3.2, passAccuracy: 77, cleanSheets: 2, tackles: 17, interceptions: 14, saves: 4.0 },
  recentMatches: [
    { date: '2026-06-01', opponent: 'Panamá', result: 'L', gf: 0, ga: 2, possession: 40 },
    { date: '2026-05-25', opponent: 'El Salvador', result: 'W', gf: 1, ga: 0, possession: 48 },
    { date: '2026-03-22', opponent: 'Honduras', result: 'D', gf: 1, ga: 1, possession: 45 }
  ],
  players: [
    { name: 'Eloy Room', pos: 'POR', club: 'Vitesse', age: 37 },
    { name: 'Cuco Martina', pos: 'DEF', club: 'NAC Breda', age: 36 },
    { name: 'Jurien Gaari', pos: 'DEF', club: 'RKC Waalwijk', age: 32 },
    { name: 'Leandro Bacuna', pos: 'MED', club: 'Groningen', age: 34 },
    { name: 'Juninho Bacuna', pos: 'MED', club: 'Birmingham', age: 28 },
    { name: 'Kenji Gorré', pos: 'MED', club: 'Boavista', age: 31 },
    { name: 'Rangelo Janga', pos: 'DEL', club: 'Nea Salamis', age: 34 },
    { name: 'Jürgen Locadia', pos: 'DEL', club: 'Cangzhou', age: 32 }
  ],
  strengths: 'Experiencia europea en su plantel base y gran físico en el mediocampo.',
  weaknesses: 'Edad avanzada de sus figuras principales y problemas para generar juego estático.',
  playStyle: 'Juego reactivo, apostando a contragolpes rápidos usando las bandas.'
},
'Costa de Marfil': {
  fifaRanking: 38, group: 'E',
  coach: { name: 'Emerse Faé', nationality: 'Marfileña', style: 'Físico y vertical', formation: '4-3-3' },
  stats: { goalsFor: 1.6, goalsAgainst: 1.0, possession: 51, corners: 5.2, fouls: 13, yellowCards: 1.8, redCards: 0.1, shots: 12.0, shotsOnTarget: 4.5, passAccuracy: 80, cleanSheets: 4, tackles: 18, interceptions: 12, saves: 2.8 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Nigeria', result: 'D', gf: 1, ga: 1, possession: 49 },
    { date: '2026-05-28', opponent: 'Ghana', result: 'W', gf: 2, ga: 0, possession: 53 },
    { date: '2026-03-24', opponent: 'Senegal', result: 'L', gf: 0, ga: 1, possession: 48 }
  ],
  players: [
    { name: 'Yahia Fofana', pos: 'POR', club: 'Angers', age: 25 },
    { name: 'Odilon Kossounou', pos: 'DEF', club: 'Bayer Leverkusen', age: 25 },
    { name: 'Evan Ndicka', pos: 'DEF', club: 'Roma', age: 26 },
    { name: 'Seko Fofana', pos: 'MED', club: 'Al-Ettifaq', age: 31 },
    { name: 'Franck Kessié', pos: 'MED', club: 'Al-Ahli', age: 29 },
    { name: 'Ibrahim Sangaré', pos: 'MED', club: 'Nott Forest', age: 28 },
    { name: 'Sébastien Haller', pos: 'DEL', club: 'Dortmund', age: 31 },
    { name: 'Simon Adingra', pos: 'DEL', club: 'Brighton', age: 24 }
  ],
  strengths: 'Mediocampo demoledor físicamente (Fofana, Kessié, Sangaré) y poderío aéreo.',
  weaknesses: 'Falta de concentración en defensa y problemas en la salida del balón.',
  playStyle: 'Imposición física, juego directo al 9 y mucha llegada de sus volantes.'
},
'Ecuador': {
  fifaRanking: 30, group: 'E',
  coach: { name: 'Félix Sánchez Bas', nationality: 'Española', style: 'Dinámico y organizado', formation: '3-4-2-1' },
  stats: { goalsFor: 1.4, goalsAgainst: 0.8, possession: 53, corners: 4.8, fouls: 14.5, yellowCards: 2.0, redCards: 0.1, shots: 11.0, shotsOnTarget: 4.0, passAccuracy: 82, cleanSheets: 5, tackles: 19, interceptions: 13, saves: 3.0 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Colombia', result: 'D', gf: 0, ga: 0, possession: 50 },
    { date: '2026-05-29', opponent: 'Uruguay', result: 'L', gf: 1, ga: 2, possession: 45 },
    { date: '2026-03-24', opponent: 'Chile', result: 'W', gf: 2, ga: 0, possession: 55 }
  ],
  players: [
    { name: 'Hernán Galíndez', pos: 'POR', club: 'Huracán', age: 39 },
    { name: 'Piero Hincapié', pos: 'DEF', club: 'Bayer Leverkusen', age: 24 },
    { name: 'Willian Pacho', pos: 'DEF', club: 'PSG', age: 24 },
    { name: 'Félix Torres', pos: 'DEF', club: 'Corinthians', age: 29 },
    { name: 'Moisés Caicedo', pos: 'MED', club: 'Chelsea', age: 24 },
    { name: 'Kendry Páez', pos: 'MED', club: 'Chelsea', age: 19 },
    { name: 'Pervis Estupiñán', pos: 'DEF', club: 'Brighton', age: 28 },
    { name: 'Enner Valencia', pos: 'DEL', club: 'Internacional', age: 36 }
  ],
  strengths: 'Bloque defensivo de élite mundial y talento desequilibrante joven (Páez, Caicedo).',
  weaknesses: 'Dependencia de Enner Valencia para los goles; sufren en partidos cerrados.',
  playStyle: 'Juego rocoso, transiciones defensa-ataque veloces por bandas y solidez central.'
},
// ==================== GRUPO F ====================
'Países Bajos': {
  fifaRanking: 6, group: 'F',
  coach: { name: 'Ronald Koeman', nationality: 'Neerlandesa', style: 'Ofensivo y estructural', formation: '4-3-3' },
  stats: { goalsFor: 2.0, goalsAgainst: 0.8, possession: 57, corners: 5.8, fouls: 10, yellowCards: 1.2, redCards: 0.1, shots: 13.5, shotsOnTarget: 5.5, passAccuracy: 86, cleanSheets: 5, tackles: 14, interceptions: 11, saves: 2.5 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Croacia', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-29', opponent: 'Alemania', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-24', opponent: 'Italia', result: 'L', gf: 0, ga: 1, possession: 52 }
  ],
  players: [
    { name: 'Bart Verbruggen', pos: 'POR', club: 'Brighton', age: 23 },
    { name: 'Virgil van Dijk', pos: 'DEF', club: 'Liverpool', age: 34 },
    { name: 'Nathan Aké', pos: 'DEF', club: 'Man City', age: 31 },
    { name: 'Frenkie de Jong', pos: 'MED', club: 'Barcelona', age: 29 },
    { name: 'Xavi Simons', pos: 'MED', club: 'RB Leipzig', age: 23 },
    { name: 'Teun Koopmeiners', pos: 'MED', club: 'Atalanta', age: 28 },
    { name: 'Cody Gakpo', pos: 'DEL', club: 'Liverpool', age: 27 },
    { name: 'Memphis Depay', pos: 'DEL', club: 'Corinthians', age: 32 }
  ],
  strengths: 'Estructura defensiva sólida y versatilidad en los mediocampistas creativos.',
  weaknesses: 'Falta de un delantero centro letal consistente en partidos cerrados.',
  playStyle: 'Fútbol total adaptado: juego de posición, laterales profundos y rotaciones constantes.'
},
'Japón': {
  fifaRanking: 17, group: 'F',
  coach: { name: 'Hajime Moriyasu', nationality: 'Japonesa', style: 'Intenso y técnico', formation: '4-2-3-1' },
  stats: { goalsFor: 2.2, goalsAgainst: 0.9, possession: 52, corners: 5.5, fouls: 10, yellowCards: 1.1, redCards: 0.0, shots: 13.5, shotsOnTarget: 5.8, passAccuracy: 85, cleanSheets: 4, tackles: 14, interceptions: 12, saves: 2.8 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Australia', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-29', opponent: 'Arabia Saudita', result: 'W', gf: 3, ga: 0, possession: 58 },
    { date: '2026-03-24', opponent: 'Corea del Sur', result: 'W', gf: 1, ga: 0, possession: 51 }
  ],
  players: [
    { name: 'Zion Suzuki', pos: 'POR', club: 'Sint-Truiden', age: 23 },
    { name: 'Takehiro Tomiyasu', pos: 'DEF', club: 'Arsenal', age: 27 },
    { name: 'Ko Itakura', pos: 'DEF', club: 'Borussia M.', age: 29 },
    { name: 'Wataru Endo', pos: 'MED', club: 'Liverpool', age: 33 },
    { name: 'Hidemasa Morita', pos: 'MED', club: 'Sporting CP', age: 31 },
    { name: 'Kaoru Mitoma', pos: 'DEL', club: 'Brighton', age: 29 },
    { name: 'Takefusa Kubo', pos: 'MED', club: 'Real Sociedad', age: 25 },
    { name: 'Ayase Ueda', pos: 'DEL', club: 'Feyenoord', age: 27 }
  ],
  strengths: 'Juego colectivo impecable, técnica en espacios reducidos y alta intensidad.',
  weaknesses: 'Falta de biotipo físico frente a selecciones de mayor envergadura.',
  playStyle: 'Juego de toque rápido, movilidad constante y presión coordinada.'
},
'Suecia': {
  fifaRanking: 26, group: 'F',
  coach: { name: 'Jon Dahl Tomasson', nationality: 'Danesa', style: 'Vertical y ofensivo', formation: '4-2-3-1' },
  stats: { goalsFor: 1.9, goalsAgainst: 1.2, possession: 50, corners: 5.4, fouls: 11, yellowCards: 1.4, redCards: 0.1, shots: 14.0, shotsOnTarget: 5.8, passAccuracy: 81, cleanSheets: 3, tackles: 15, interceptions: 13, saves: 2.7 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Dinamarca', result: 'L', gf: 0, ga: 2, possession: 45 },
    { date: '2026-05-28', opponent: 'Noruega', result: 'D', gf: 1, ga: 1, possession: 52 },
    { date: '2026-03-24', opponent: 'Polonia', result: 'W', gf: 3, ga: 1, possession: 55 }
  ],
  players: [
    { name: 'Robin Olsen', pos: 'POR', club: 'Aston Villa', age: 36 },
    { name: 'Victor Lindelöf', pos: 'DEF', club: 'Man United', age: 31 },
    { name: 'Isak Hien', pos: 'DEF', club: 'Atalanta', age: 27 },
    { name: 'Jens Cajuste', pos: 'MED', club: 'Napoli', age: 26 },
    { name: 'Mattias Svanberg', pos: 'MED', club: 'Wolfsburgo', age: 27 },
    { name: 'Dejan Kulusevski', pos: 'MED', club: 'Tottenham', age: 26 },
    { name: 'Alexander Isak', pos: 'DEL', club: 'Newcastle', age: 26 },
    { name: 'Viktor Gyökeres', pos: 'DEL', club: 'Sporting CP', age: 28 }
  ],
  strengths: 'Delantera letal (Isak, Gyökeres) y transiciones rapidísimas.',
  weaknesses: 'Fragilidad defensiva contra equipos muy tácticos.',
  playStyle: 'Fútbol muy vertical, apoyado en el talento de sus tres puntas para definir.'
},
'Túnez': {
  fifaRanking: 41, group: 'F',
  coach: { name: 'Jalel Kadri', nationality: 'Tunecina', style: 'Rocoso y táctico', formation: '3-4-2-1' },
  stats: { goalsFor: 1.0, goalsAgainst: 0.8, possession: 44, corners: 3.5, fouls: 15, yellowCards: 2.0, redCards: 0.1, shots: 8.5, shotsOnTarget: 3.0, passAccuracy: 76, cleanSheets: 5, tackles: 19, interceptions: 14, saves: 3.8 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Marruecos', result: 'L', gf: 0, ga: 1, possession: 42 },
    { date: '2026-05-28', opponent: 'Egipto', result: 'D', gf: 0, ga: 0, possession: 45 },
    { date: '2026-03-24', opponent: 'Camerún', result: 'W', gf: 1, ga: 0, possession: 48 }
  ],
  players: [
    { name: 'Aymen Dahmen', pos: 'POR', club: 'CS Sfaxien', age: 29 },
    { name: 'Montassar Talbi', pos: 'DEF', club: 'Lorient', age: 28 },
    { name: 'Yassine Meriah', pos: 'DEF', club: 'ES Tunis', age: 32 },
    { name: 'Ellyes Skhiri', pos: 'MED', club: 'Eintracht Frankfurt', age: 31 },
    { name: 'Aïssa Laïdouni', pos: 'MED', club: 'Union Berlin', age: 29 },
    { name: 'Hannibal Mejbri', pos: 'MED', club: 'Sevilla', age: 23 },
    { name: 'Youssef Msakni', pos: 'DEL', club: 'Al Arabi', age: 35 },
    { name: 'Elias Achouri', pos: 'DEL', club: 'FC Copenhague', age: 27 }
  ],
  strengths: 'Defensa extremadamente estructurada y un mediocampo incansable.',
  weaknesses: 'Problemas serios para convertir goles y generar ocasiones de peligro.',
  playStyle: 'Juego trabado, cerrando espacios por el centro y contragolpes muy calculados.'
},
// ==================== GRUPO G ====================
'Bélgica': {
  fifaRanking: 3, group: 'G',
  coach: { name: 'Domenico Tedesco', nationality: 'Italiana', style: 'Ofensivo y dinámico', formation: '4-3-3' },
  stats: { goalsFor: 2.1, goalsAgainst: 0.8, possession: 58, corners: 6.2, fouls: 10, yellowCards: 1.5, redCards: 0.0, shots: 15.0, shotsOnTarget: 6.5, passAccuracy: 87, cleanSheets: 5, tackles: 14, interceptions: 12, saves: 2.8 },
  recentMatches: [
    { date: '2026-06-05', opponent: 'Inglaterra', result: 'L', gf: 0, ga: 2, possession: 52 },
    { date: '2026-05-30', opponent: 'Alemania', result: 'D', gf: 1, ga: 1, possession: 50 },
    { date: '2026-03-24', opponent: 'Serbia', result: 'W', gf: 3, ga: 1, possession: 60 }
  ],
  players: [
    { name: 'Thibaut Courtois', pos: 'POR', club: 'Real Madrid', age: 34 },
    { name: 'Wout Faes', pos: 'DEF', club: 'Leicester City', age: 28 },
    { name: 'Arthur Theate', pos: 'DEF', club: 'Rennes', age: 26 },
    { name: 'Amadou Onana', pos: 'MED', club: 'Everton', age: 24 },
    { name: 'Kevin De Bruyne', pos: 'MED', club: 'Man City', age: 34 },
    { name: 'Jeremy Doku', pos: 'MED', club: 'Man City', age: 24 },
    { name: 'Leandro Trossard', pos: 'DEL', club: 'Arsenal', age: 31 },
    { name: 'Romelu Lukaku', pos: 'DEL', club: 'Roma', age: 33 }
  ],
  strengths: 'Visión élite de De Bruyne y el desequilibrio explosivo de Doku por las bandas.',
  weaknesses: 'Transición defensiva lenta cuando pierden el balón en campo rival.',
  playStyle: 'Ataque de posesión con mucha creatividad en el último cuarto de cancha.'
},
'Egipto': {
  fifaRanking: 34, group: 'G',
  coach: { name: 'Rui Vitória', nationality: 'Portuguesa', style: 'Directo y estructurado', formation: '4-3-3' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.0, possession: 48, corners: 4.8, fouls: 13, yellowCards: 1.8, redCards: 0.1, shots: 11.5, shotsOnTarget: 4.2, passAccuracy: 80, cleanSheets: 4, tackles: 16, interceptions: 14, saves: 3.1 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Marruecos', result: 'L', gf: 0, ga: 1, possession: 45 },
    { date: '2026-05-28', opponent: 'Túnez', result: 'D', gf: 0, ga: 0, possession: 52 },
    { date: '2026-03-24', opponent: 'Argelia', result: 'W', gf: 2, ga: 1, possession: 47 }
  ],
  players: [
    { name: 'Mohamed El Shenawy', pos: 'POR', club: 'Al Ahly', age: 37 },
    { name: 'Ahmed Hegazi', pos: 'DEF', club: 'Al-Ittihad', age: 35 },
    { name: 'Mohamed Abdelmonem', pos: 'DEF', club: 'Al Ahly', age: 27 },
    { name: 'Mohamed Elneny', pos: 'MED', club: 'Arsenal', age: 33 },
    { name: 'Emam Ashour', pos: 'MED', club: 'Al Ahly', age: 28 },
    { name: 'Mohamed Salah', pos: 'DEL', club: 'Liverpool', age: 33 },
    { name: 'Omar Marmoush', pos: 'DEL', club: 'Eintracht Frankfurt', age: 27 },
    { name: 'Mostafa Mohamed', pos: 'DEL', club: 'Nantes', age: 28 }
  ],
  strengths: 'Dependencia letal de Mohamed Salah y un bloque defensivo experimentado.',
  weaknesses: 'Falta de creatividad si Salah es marcado por dos o más jugadores.',
  playStyle: 'Defensa sólida y pases largos buscando la velocidad de sus extremos.'
},
'Irán': {
  fifaRanking: 21, group: 'G',
  coach: { name: 'Amir Ghalenoei', nationality: 'Iraní', style: 'Físico y táctico', formation: '4-2-3-1' },
  stats: { goalsFor: 1.9, goalsAgainst: 0.8, possession: 50, corners: 5.1, fouls: 14, yellowCards: 1.7, redCards: 0.1, shots: 13.0, shotsOnTarget: 5.5, passAccuracy: 81, cleanSheets: 5, tackles: 17, interceptions: 13, saves: 2.7 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Japón', result: 'L', gf: 1, ga: 2, possession: 44 },
    { date: '2026-05-28', opponent: 'Corea del Sur', result: 'W', gf: 2, ga: 0, possession: 48 },
    { date: '2026-03-25', opponent: 'Australia', result: 'L', gf: 0, ga: 1, possession: 52 }
  ],
  players: [
    { name: 'Alireza Beiranvand', pos: 'POR', club: 'Persepolis', age: 33 },
    { name: 'Sadegh Moharrami', pos: 'DEF', club: 'Dinamo Zagreb', age: 30 },
    { name: 'Majid Hosseini', pos: 'DEF', club: 'Kayserispor', age: 29 },
    { name: 'Saeid Ezatolahi', pos: 'MED', club: 'Vejle', age: 29 },
    { name: 'Saman Ghoddos', pos: 'MED', club: 'Brentford', age: 32 },
    { name: 'Alireza Jahanbakhsh', pos: 'MED', club: 'Feyenoord', age: 32 },
    { name: 'Mehdi Taremi', pos: 'DEL', club: 'Inter Milan', age: 33 },
    { name: 'Sardar Azmoun', pos: 'DEL', club: 'Roma', age: 31 }
  ],
  strengths: 'Gran presencia física, delanteros letales (Taremi, Azmoun) y buen juego aéreo.',
  weaknesses: 'Ritmo de juego pesado frente a equipos asiáticos o europeos muy veloces.',
  playStyle: 'Juego muy táctico, fuerte al choque y contragolpes letales por el centro.'
},
'Nueva Zelanda': {
  fifaRanking: 68, group: 'G',
  coach: { name: 'Darren Bazeley', nationality: 'Inglesa', style: 'Organizado y defensivo', formation: '5-3-2' },
  stats: { goalsFor: 1.1, goalsAgainst: 1.4, possession: 43, corners: 3.9, fouls: 12, yellowCards: 1.5, redCards: 0.1, shots: 8.5, shotsOnTarget: 3.2, passAccuracy: 75, cleanSheets: 3, tackles: 18, interceptions: 15, saves: 4.1 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'China', result: 'D', gf: 1, ga: 1, possession: 45 },
    { date: '2026-05-28', opponent: 'Arabia Saudita', result: 'L', gf: 0, ga: 2, possession: 40 },
    { date: '2026-03-24', opponent: 'Egipto', result: 'D', gf: 0, ga: 0, possession: 38 }
  ],
  players: [
    { name: 'Max Crocombe', pos: 'POR', club: 'Burton Albion', age: 32 },
    { name: 'Bill Tuiloma', pos: 'DEF', club: 'Charlotte FC', age: 31 },
    { name: 'Liberato Cacace', pos: 'DEF', club: 'Empoli', age: 25 },
    { name: 'Marko Stamenic', pos: 'MED', club: 'Estrella Roja', age: 24 },
    { name: 'Matthew Garbett', pos: 'MED', club: 'NAC Breda', age: 24 },
    { name: 'Sarpreet Singh', pos: 'MED', club: 'Hansa Rostock', age: 27 },
    { name: 'Elijah Just', pos: 'DEL', club: 'Horsens', age: 26 },
    { name: 'Chris Wood', pos: 'DEL', club: 'Nott Forest', age: 34 }
  ],
  strengths: 'Gran fortaleza física, orden defensivo con 5 en el fondo y juego aéreo de Chris Wood.',
  weaknesses: 'Muy poca posesión y dificultades para generar situaciones claras de gol.',
  playStyle: 'Defensa cerrada, cediendo la iniciativa y buscando envíos largos o pelota parada.'
},
// ==================== GRUPO H ====================
'España': {
  fifaRanking: 8, group: 'H',
  coach: { name: 'Luis de la Fuente', nationality: 'Española', style: 'Posesión y ataque', formation: '4-3-3' },
  stats: { goalsFor: 2.2, goalsAgainst: 0.7, possession: 68, corners: 7.0, fouls: 9.5, yellowCards: 1.1, redCards: 0.0, shots: 15.8, shotsOnTarget: 6.2, passAccuracy: 92, cleanSheets: 6, tackles: 13, interceptions: 9, saves: 2.0 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Francia', result: 'L', gf: 0, ga: 2, possession: 62 },
    { date: '2026-05-29', opponent: 'Inglaterra', result: 'W', gf: 2, ga: 1, possession: 65 },
    { date: '2026-03-24', opponent: 'Alemania', result: 'L', gf: 0, ga: 2, possession: 59 }
  ],
  players: [
    { name: 'Unai Simón', pos: 'POR', club: 'Athletic Club', age: 29 },
    { name: 'Dani Carvajal', pos: 'DEF', club: 'Real Madrid', age: 34 },
    { name: 'Aymeric Laporte', pos: 'DEF', club: 'Al-Nassr', age: 32 },
    { name: 'Rodri', pos: 'MED', club: 'Man City', age: 30 },
    { name: 'Pedri', pos: 'MED', club: 'Barcelona', age: 23 },
    { name: 'Gavi', pos: 'MED', club: 'Barcelona', age: 21 },
    { name: 'Lamine Yamal', pos: 'DEL', club: 'Barcelona', age: 18 },
    { name: 'Álvaro Morata', pos: 'DEL', club: 'Atlético Madrid', age: 33 }
  ],
  strengths: 'El mejor mediocampo del mundo, posesión asfixiante y frescura en los extremos.',
  weaknesses: 'Falta de contundencia en los últimos metros si el rival se encierra bien.',
  playStyle: 'Tiki-taka modernizado: posesión altísima, presión constante y circulación rápida.'
},
'Cabo Verde': {
  fifaRanking: 65, group: 'H',
  coach: { name: 'Bubista', nationality: 'Caboverdiana', style: 'Rápido y técnico', formation: '4-3-3' },
  stats: { goalsFor: 1.3, goalsAgainst: 1.2, possession: 47, corners: 4.1, fouls: 14, yellowCards: 1.9, redCards: 0.1, shots: 10.0, shotsOnTarget: 3.8, passAccuracy: 78, cleanSheets: 3, tackles: 16, interceptions: 13, saves: 3.4 },
  recentMatches: [
    { date: '2026-06-01', opponent: 'Senegal', result: 'L', gf: 0, ga: 1, possession: 45 },
    { date: '2026-05-25', opponent: 'Marruecos', result: 'D', gf: 1, ga: 1, possession: 40 },
    { date: '2026-03-22', opponent: 'Angola', result: 'W', gf: 2, ga: 1, possession: 52 }
  ],
  players: [
    { name: 'Vozinha', pos: 'POR', club: 'AS Trenčín', age: 39 },
    { name: 'Pico', pos: 'DEF', club: 'Shamrock Rovers', age: 32 },
    { name: 'Logan Costa', pos: 'DEF', club: 'Toulouse', age: 25 },
    { name: 'Kevin Pina', pos: 'MED', club: 'Krasnodar', age: 29 },
    { name: 'Jamiro Monteiro', pos: 'MED', club: 'San Jose', age: 32 },
    { name: 'Garry Rodrigues', pos: 'DEL', club: 'Ankaragücü', age: 35 },
    { name: 'Bebé', pos: 'DEL', club: 'Rayo Vallecano', age: 35 },
    { name: 'Ryan Mendes', pos: 'DEL', club: 'Karagümrük', age: 36 }
  ],
  strengths: 'Velocidad explosiva por las bandas y jugadores muy técnicos en el uno contra uno.',
  weaknesses: 'Plantel muy veterano y poca resistencia física en el tramo final de los partidos.',
  playStyle: 'Juego atrevido, usando la habilidad individual y el juego vertical sin complejos.'
},
'Arabia Saudita': {
  fifaRanking: 53, group: 'H',
  coach: { name: 'Roberto Mancini', nationality: 'Italiana', style: 'Táctico y disciplinado', formation: '3-5-2' },
  stats: { goalsFor: 1.4, goalsAgainst: 1.2, possession: 51, corners: 4.5, fouls: 12.5, yellowCards: 1.7, redCards: 0.1, shots: 10.5, shotsOnTarget: 3.9, passAccuracy: 82, cleanSheets: 4, tackles: 15, interceptions: 11, saves: 3.0 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Corea del Sur', result: 'D', gf: 1, ga: 1, possession: 45 },
    { date: '2026-05-28', opponent: 'Nueva Zelanda', result: 'W', gf: 2, ga: 0, possession: 58 },
    { date: '2026-03-24', opponent: 'Japón', result: 'L', gf: 0, ga: 2, possession: 42 }
  ],
  players: [
    { name: 'Mohammed Al-Owais', pos: 'POR', club: 'Al-Hilal', age: 34 },
    { name: 'Hassan Tambakti', pos: 'DEF', club: 'Al-Hilal', age: 27 },
    { name: 'Ali Al-Bulaihi', pos: 'DEF', club: 'Al-Hilal', age: 36 },
    { name: 'Saud Abdulhamid', pos: 'DEF', club: 'Al-Hilal', age: 26 },
    { name: 'Mohamed Kanno', pos: 'MED', club: 'Al-Hilal', age: 31 },
    { name: 'Nasser Al-Dawsari', pos: 'MED', club: 'Al-Hilal', age: 27 },
    { name: 'Salem Al-Dawsari', pos: 'DEL', club: 'Al-Hilal', age: 34 },
    { name: 'Firas Al-Buraikan', pos: 'DEL', club: 'Al-Ahli', age: 26 }
  ],
  strengths: 'Gran química de equipo (casi todos juegan en la liga local) y rigor táctico de Mancini.',
  weaknesses: 'Problemas ante el fútbol de alta intensidad física y presión adelantada.',
  playStyle: 'Defensa sólida con carrileros que suben, apostando a las contras de Salem Al-Dawsari.'
},
'Uruguay': {
  fifaRanking: 15, group: 'H',
  coach: { name: 'Marcelo Bielsa', nationality: 'Argentina', style: 'Presión asfixiante', formation: '4-3-3' },
  stats: { goalsFor: 1.8, goalsAgainst: 0.9, possession: 56, corners: 5.2, fouls: 15, yellowCards: 2.5, redCards: 0.2, shots: 13.0, shotsOnTarget: 5.2, passAccuracy: 82, cleanSheets: 4, tackles: 22, interceptions: 14, saves: 2.8 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Brasil', result: 'W', gf: 2, ga: 0, possession: 52 },
    { date: '2026-05-29', opponent: 'Colombia', result: 'D', gf: 1, ga: 1, possession: 55 },
    { date: '2026-03-24', opponent: 'Ecuador', result: 'W', gf: 1, ga: 0, possession: 60 }
  ],
  players: [
    { name: 'Sergio Rochet', pos: 'POR', club: 'Internacional', age: 33 },
    { name: 'Ronald Araújo', pos: 'DEF', club: 'Barcelona', age: 27 },
    { name: 'José María Giménez', pos: 'DEF', club: 'Atlético Madrid', age: 31 },
    { name: 'Federico Valverde', pos: 'MED', club: 'Real Madrid', age: 27 },
    { name: 'Manuel Ugarte', pos: 'MED', club: 'PSG', age: 25 },
    { name: 'Rodrigo Bentancur', pos: 'MED', club: 'Tottenham', age: 29 },
    { name: 'Darwin Núñez', pos: 'DEL', club: 'Liverpool', age: 26 },
    { name: 'Facundo Pellistri', pos: 'DEL', club: 'Man United', age: 24 }
  ],
  strengths: 'Intensidad física brutal, mediocampo dinámico (Valverde/Ugarte) y verticalidad.',
  weaknesses: 'Puede dejar espacios atrás si falla la presión inicial.',
  playStyle: 'Presión alta implacable (sello Bielsa), recuperación rápida y ataques muy verticales.'
},
// ==================== GRUPO I ====================
'Francia': {
  fifaRanking: 2, group: 'I',
  coach: { name: 'Didier Deschamps', nationality: 'Francesa', style: 'Equilibrado y reactivo', formation: '4-2-3-1' },
  stats: { goalsFor: 2.3, goalsAgainst: 0.8, possession: 54, corners: 6.1, fouls: 11, yellowCards: 1.3, redCards: 0.0, shots: 15.5, shotsOnTarget: 6.8, passAccuracy: 89, cleanSheets: 6, tackles: 15, interceptions: 11, saves: 2.2 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'España', result: 'W', gf: 2, ga: 0, possession: 38 },
    { date: '2026-05-29', opponent: 'Bélgica', result: 'W', gf: 1, ga: 0, possession: 45 },
    { date: '2026-03-24', opponent: 'Portugal', result: 'D', gf: 1, ga: 1, possession: 50 }
  ],
  players: [
    { name: 'Mike Maignan', pos: 'POR', club: 'AC Milan', age: 30 },
    { name: 'William Saliba', pos: 'DEF', club: 'Arsenal', age: 25 },
    { name: 'Dayot Upamecano', pos: 'DEF', club: 'Bayern Múnich', age: 27 },
    { name: 'Aurélien Tchouaméni', pos: 'MED', club: 'Real Madrid', age: 26 },
    { name: 'Eduardo Camavinga', pos: 'MED', club: 'Real Madrid', age: 23 },
    { name: 'Antoine Griezmann', pos: 'MED', club: 'Atlético Madrid', age: 35 },
    { name: 'Kylian Mbappé', pos: 'DEL', club: 'Real Madrid', age: 27 },
    { name: 'Ousmane Dembélé', pos: 'DEL', club: 'PSG', age: 29 }
  ],
  strengths: 'Transiciones ofensivas letales con Mbappé y profundidad de plantilla inigualable.',
  weaknesses: 'Poca creatividad estática cuando el rival les cede totalmente el balón.',
  playStyle: 'Bloque sólido, solidez física y contragolpes supersónicos.'
},
'Senegal': {
  fifaRanking: 18, group: 'I',
  coach: { name: 'Aliou Cissé', nationality: 'Senegalesa', style: 'Físico y directo', formation: '4-3-3' },
  stats: { goalsFor: 1.6, goalsAgainst: 0.9, possession: 52, corners: 5.0, fouls: 14, yellowCards: 1.9, redCards: 0.1, shots: 11.8, shotsOnTarget: 4.5, passAccuracy: 81, cleanSheets: 5, tackles: 18, interceptions: 12, saves: 3.1 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Argelia', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-29', opponent: 'Marruecos', result: 'D', gf: 0, ga: 0, possession: 52 },
    { date: '2026-03-24', opponent: 'Costa de Marfil', result: 'W', gf: 1, ga: 0, possession: 51 }
  ],
  players: [
    { name: 'Édouard Mendy', pos: 'POR', club: 'Al-Ahli', age: 34 },
    { name: 'Kalidou Koulibaly', pos: 'DEF', club: 'Al-Hilal', age: 34 },
    { name: 'Moussa Niakhaté', pos: 'DEF', club: 'Nott Forest', age: 30 },
    { name: 'Pape Matar Sarr', pos: 'MED', club: 'Tottenham', age: 23 },
    { name: 'Idrissa Gueye', pos: 'MED', club: 'Everton', age: 36 },
    { name: 'Lamine Camara', pos: 'MED', club: 'Metz', age: 22 },
    { name: 'Sadio Mané', pos: 'DEL', club: 'Al-Nassr', age: 34 },
    { name: 'Nicolas Jackson', pos: 'DEL', club: 'Chelsea', age: 24 }
  ],
  strengths: 'Gran presencia atlética, defensa impenetrable y talento desequilibrante de Mané.',
  weaknesses: 'Toma de decisiones apresurada en los últimos metros.',
  playStyle: 'Juego muy físico en el centro del campo y rápidas salidas por banda.'
},
'Irak': {
  fifaRanking: 58, group: 'I',
  coach: { name: 'Jesús Casas', nationality: 'Española', style: 'Técnico y ordenado', formation: '4-2-3-1' },
  stats: { goalsFor: 1.4, goalsAgainst: 1.1, possession: 48, corners: 4.5, fouls: 11.5, yellowCards: 1.6, redCards: 0.0, shots: 9.5, shotsOnTarget: 3.8, passAccuracy: 80, cleanSheets: 3, tackles: 15, interceptions: 13, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Jordania', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-28', opponent: 'Qatar', result: 'L', gf: 0, ga: 2, possession: 45 },
    { date: '2026-03-24', opponent: 'Irán', result: 'D', gf: 1, ga: 1, possession: 40 }
  ],
  players: [
    { name: 'Jalal Hassan', pos: 'POR', club: 'Al-Zawraa', age: 35 },
    { name: 'Rebin Sulaka', pos: 'DEF', club: 'FC Seoul', age: 34 },
    { name: 'Saad Natiq', pos: 'DEF', club: 'Al-Quwa Al-Jawiya', age: 32 },
    { name: 'Amir Al-Ammari', pos: 'MED', club: 'Halmstad', age: 28 },
    { name: 'Osama Rashid', pos: 'MED', club: 'Vizela', age: 34 },
    { name: 'Zidane Iqbal', pos: 'MED', club: 'Utrecht', age: 23 },
    { name: 'Aymen Hussein', pos: 'DEL', club: 'Al-Quwa Al-Jawiya', age: 30 },
    { name: 'Ali Jasim', pos: 'DEL', club: 'Al-Kahrabaa', age: 22 }
  ],
  strengths: 'Gran compromiso colectivo, buen trato de balón guiado por Casas y letalidad de Aymen.',
  weaknesses: 'Falta de roce internacional ante equipos europeos o sudamericanos.',
  playStyle: 'Juego asociativo con mucha disciplina, buscando espacios con paciencia.'
},
'Noruega': {
  fifaRanking: 39, group: 'I',
  coach: { name: 'Ståle Solbakken', nationality: 'Noruega', style: 'Estructurado y directo', formation: '4-3-3' },
  stats: { goalsFor: 1.8, goalsAgainst: 1.2, possession: 50, corners: 5.5, fouls: 10, yellowCards: 1.4, redCards: 0.0, shots: 13.0, shotsOnTarget: 5.1, passAccuracy: 82, cleanSheets: 3, tackles: 14, interceptions: 11, saves: 3.0 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Suecia', result: 'W', gf: 2, ga: 1, possession: 52 },
    { date: '2026-05-28', opponent: 'Dinamarca', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-03-24', opponent: 'Escocia', result: 'W', gf: 3, ga: 0, possession: 55 }
  ],
  players: [
    { name: 'Ørjan Nyland', pos: 'POR', club: 'Sevilla', age: 35 },
    { name: 'Kristoffer Ajer', pos: 'DEF', club: 'Brentford', age: 28 },
    { name: 'Leo Østigård', pos: 'DEF', club: 'Napoli', age: 26 },
    { name: 'Sander Berge', pos: 'MED', club: 'Burnley', age: 28 },
    { name: 'Martin Ødegaard', pos: 'MED', club: 'Arsenal', age: 27 },
    { name: 'Oscar Bobb', pos: 'MED', club: 'Man City', age: 22 },
    { name: 'Erling Haaland', pos: 'DEL', club: 'Man City', age: 25 },
    { name: 'Alexander Sørloth', pos: 'DEL', club: 'Villarreal', age: 30 }
  ],
  strengths: 'Delantero imparable (Haaland) e inteligencia creativa (Ødegaard).',
  weaknesses: 'Vulnerables en defensa y poca profundidad de talento fuera de sus dos estrellas.',
  playStyle: 'Pases filtrados de Ødegaard buscando los desmarques en ruptura de Haaland.'
},
// ==================== GRUPO J ====================
'Argentina': {
  fifaRanking: 1, group: 'J',
  coach: { name: 'Lionel Scaloni', nationality: 'Argentina', style: 'Inteligencia táctica', formation: '4-3-3' },
  stats: { goalsFor: 2.1, goalsAgainst: 0.5, possession: 62, corners: 5.8, fouls: 11.5, yellowCards: 1.6, redCards: 0.0, shots: 15.0, shotsOnTarget: 6.5, passAccuracy: 90, cleanSheets: 8, tackles: 17, interceptions: 12, saves: 2.1 },
  recentMatches: [
    { date: '2026-06-05', opponent: 'Brasil', result: 'W', gf: 1, ga: 0, possession: 51 },
    { date: '2026-05-30', opponent: 'Colombia', result: 'W', gf: 2, ga: 0, possession: 60 },
    { date: '2026-03-24', opponent: 'Uruguay', result: 'D', gf: 1, ga: 1, possession: 65 }
  ],
  players: [
    { name: 'Emiliano Martínez', pos: 'POR', club: 'Aston Villa', age: 33 },
    { name: 'Cristian Romero', pos: 'DEF', club: 'Tottenham', age: 28 },
    { name: 'Lisandro Martínez', pos: 'DEF', club: 'Man United', age: 28 },
    { name: 'Rodrigo De Paul', pos: 'MED', club: 'Atlético Madrid', age: 32 },
    { name: 'Enzo Fernández', pos: 'MED', club: 'Chelsea', age: 25 },
    { name: 'Alexis Mac Allister', pos: 'MED', club: 'Liverpool', age: 27 },
    { name: 'Lionel Messi', pos: 'DEL', club: 'Inter Miami', age: 38 },
    { name: 'Julián Álvarez', pos: 'DEL', club: 'Man City', age: 26 }
  ],
  strengths: 'Corazón, dominio del mediocampo, magia intacta de Messi y un arquero inmenso.',
  weaknesses: 'Falta de juego aéreo en defensa debido a la baja estatura de sus centrales.',
  playStyle: 'Posesión inteligente, toque rápido en el medio y agresividad para recuperar.'
},
'Argelia': {
  fifaRanking: 32, group: 'J',
  coach: { name: 'Vladimir Petković', nationality: 'Suiza', style: 'Técnico y veloz', formation: '4-1-4-1' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.1, possession: 51, corners: 4.8, fouls: 13, yellowCards: 1.8, redCards: 0.1, shots: 11.5, shotsOnTarget: 4.2, passAccuracy: 81, cleanSheets: 4, tackles: 16, interceptions: 13, saves: 3.1 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Senegal', result: 'L', gf: 1, ga: 2, possession: 45 },
    { date: '2026-05-29', opponent: 'Egipto', result: 'D', gf: 1, ga: 1, possession: 52 },
    { date: '2026-03-24', opponent: 'Túnez', result: 'W', gf: 2, ga: 0, possession: 55 }
  ],
  players: [
    { name: 'Anthony Mandrea', pos: 'POR', club: 'Caen', age: 29 },
    { name: 'Ramy Bensebaini', pos: 'DEF', club: 'Dortmund', age: 31 },
    { name: 'Aïssa Mandi', pos: 'DEF', club: 'Villarreal', age: 34 },
    { name: 'Ismaël Bennacer', pos: 'MED', club: 'AC Milan', age: 28 },
    { name: 'Nabil Bentaleb', pos: 'MED', club: 'Lille', age: 31 },
    { name: 'Riyad Mahrez', pos: 'MED', club: 'Al-Ahli', age: 35 },
    { name: 'Houssem Aouar', pos: 'MED', club: 'Roma', age: 27 },
    { name: 'Amine Gouiri', pos: 'DEL', club: 'Rennes', age: 26 }
  ],
  strengths: 'Gran talento técnico (Mahrez, Bennacer) y mucha experiencia.',
  weaknesses: 'Transiciones defensivas débiles; sufren cuando no tienen la pelota.',
  playStyle: 'Juego de posesión buscando el uno contra uno de sus extremos invertidos.'
},
'Austria': {
  fifaRanking: 24, group: 'J',
  coach: { name: 'Ralf Rangnick', nationality: 'Alemana', style: 'Presión alta e intensa', formation: '4-2-2-2' },
  stats: { goalsFor: 1.7, goalsAgainst: 1.0, possession: 48, corners: 5.2, fouls: 15, yellowCards: 2.1, redCards: 0.1, shots: 12.0, shotsOnTarget: 4.8, passAccuracy: 78, cleanSheets: 4, tackles: 20, interceptions: 15, saves: 2.9 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Turquía', result: 'W', gf: 3, ga: 1, possession: 46 },
    { date: '2026-05-28', opponent: 'Suiza', result: 'D', gf: 1, ga: 1, possession: 50 },
    { date: '2026-03-24', opponent: 'Alemania', result: 'W', gf: 2, ga: 0, possession: 42 }
  ],
  players: [
    { name: 'Patrick Pentz', pos: 'POR', club: 'Brøndby', age: 29 },
    { name: 'David Alaba', pos: 'DEF', club: 'Real Madrid', age: 33 },
    { name: 'Kevin Danso', pos: 'DEF', club: 'Lens', age: 27 },
    { name: 'Konrad Laimer', pos: 'MED', club: 'Bayern Múnich', age: 29 },
    { name: 'Xaver Schlager', pos: 'MED', club: 'RB Leipzig', age: 28 },
    { name: 'Marcel Sabitzer', pos: 'MED', club: 'Dortmund', age: 32 },
    { name: 'Christoph Baumgartner', pos: 'MED', club: 'RB Leipzig', age: 26 },
    { name: 'Michael Gregoritsch', pos: 'DEL', club: 'Friburgo', age: 32 }
  ],
  strengths: 'Presión asfixiante (Gegenpressing) y ritmo de juego altísimo.',
  weaknesses: 'Desgaste físico pronunciado que suele pasar factura en los últimos 15 minutos.',
  playStyle: 'Fútbol caótico controlado, buscando el error rival con presión extrema.'
},
'Jordania': {
  fifaRanking: 70, group: 'J',
  coach: { name: 'Hussein Ammouta', nationality: 'Marroquí', style: 'Ordenado y reactivo', formation: '3-4-3' },
  stats: { goalsFor: 1.2, goalsAgainst: 1.3, possession: 42, corners: 3.5, fouls: 14, yellowCards: 2.0, redCards: 0.1, shots: 8.5, shotsOnTarget: 3.5, passAccuracy: 74, cleanSheets: 3, tackles: 18, interceptions: 14, saves: 4.2 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Irak', result: 'L', gf: 1, ga: 2, possession: 40 },
    { date: '2026-05-28', opponent: 'Corea del Sur', result: 'W', gf: 2, ga: 0, possession: 32 },
    { date: '2026-03-24', opponent: 'Qatar', result: 'L', gf: 1, ga: 3, possession: 45 }
  ],
  players: [
    { name: 'Yazeed Abulaila', pos: 'POR', club: 'Al-Jabalain', age: 33 },
    { name: 'Yazan Al-Arab', pos: 'DEF', club: 'Muaither', age: 30 },
    { name: 'Abdallah Nasib', pos: 'DEF', club: 'Al-Hussein', age: 32 },
    { name: 'Noor Al-Rawabdeh', pos: 'MED', club: 'Selangor', age: 29 },
    { name: 'Nizar Al-Rashdan', pos: 'MED', club: 'Emirates Club', age: 27 },
    { name: 'Mahmoud Al-Mardi', pos: 'DEL', club: 'Al-Hussein', age: 32 },
    { name: 'Musa Al-Taamari', pos: 'DEL', club: 'Montpellier', age: 29 },
    { name: 'Yazan Al-Naimat', pos: 'DEL', club: 'Al-Ahli SC', age: 27 }
  ],
  strengths: 'Gran bloque defensivo y la velocidad supersónica de Al-Taamari.',
  weaknesses: 'Falta total de creatividad en ataque organizado y poca posesión.',
  playStyle: 'Juego rocoso esperando el contragolpe para aprovechar el talento de Al-Taamari.'
},
// ==================== GRUPO K ====================
'Portugal': {
  fifaRanking: 6, group: 'K',
  coach: { name: 'Roberto Martínez', nationality: 'Española', style: 'Ofensivo y dinámico', formation: '4-3-3' },
  stats: { goalsFor: 2.5, goalsAgainst: 0.6, possession: 60, corners: 6.8, fouls: 10, yellowCards: 1.2, redCards: 0.0, shots: 16.5, shotsOnTarget: 7.2, passAccuracy: 88, cleanSheets: 6, tackles: 14, interceptions: 12, saves: 2.3 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Inglaterra', result: 'W', gf: 2, ga: 1, possession: 55 },
    { date: '2026-05-30', opponent: 'Italia', result: 'W', gf: 1, ga: 0, possession: 58 },
    { date: '2026-03-24', opponent: 'Francia', result: 'D', gf: 1, ga: 1, possession: 50 }
  ],
  players: [
    { name: 'Diogo Costa', pos: 'POR', club: 'Porto', age: 26 },
    { name: 'Rúben Dias', pos: 'DEF', club: 'Man City', age: 29 },
    { name: 'António Silva', pos: 'DEF', club: 'Benfica', age: 22 },
    { name: 'Bruno Fernandes', pos: 'MED', club: 'Man United', age: 31 },
    { name: 'Bernardo Silva', pos: 'MED', club: 'Man City', age: 31 },
    { name: 'Vitinha', pos: 'MED', club: 'PSG', age: 26 },
    { name: 'Rafael Leão', pos: 'DEL', club: 'AC Milan', age: 27 },
    { name: 'Cristiano Ronaldo', pos: 'DEL', club: 'Al-Nassr', age: 41 }
  ],
  strengths: 'Talento individual abrumador en ataque y mediocampo muy creativo.',
  weaknesses: 'Pueden sufrir en transiciones rápidas si el mediocampo está adelantado.',
  playStyle: 'Fútbol asociativo, utilizando las bandas y la visión de Bruno Fernandes.'
},
'RD Congo': {
  fifaRanking: 60, group: 'K',
  coach: { name: 'Sébastien Desabre', nationality: 'Francesa', style: 'Sólido y físico', formation: '4-2-3-1' },
  stats: { goalsFor: 1.2, goalsAgainst: 1.0, possession: 46, corners: 4.2, fouls: 15, yellowCards: 2.1, redCards: 0.1, shots: 9.5, shotsOnTarget: 3.8, passAccuracy: 77, cleanSheets: 4, tackles: 20, interceptions: 16, saves: 3.5 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Egipto', result: 'D', gf: 0, ga: 0, possession: 42 },
    { date: '2026-05-28', opponent: 'Costa de Marfil', result: 'L', gf: 0, ga: 1, possession: 45 },
    { date: '2026-03-24', opponent: 'Sudáfrica', result: 'W', gf: 2, ga: 0, possession: 50 }
  ],
  players: [
    { name: 'Lionel Mpasi', pos: 'POR', club: 'Rodez', age: 31 },
    { name: 'Chancel Mbemba', pos: 'DEF', club: 'Marseille', age: 31 },
    { name: 'Arthur Masuaku', pos: 'DEF', club: 'Besiktas', age: 32 },
    { name: 'Samuel Moutoussamy', pos: 'MED', club: 'Sivasspor', age: 29 },
    { name: 'Charles Pickel', pos: 'MED', club: 'Cremonese', age: 29 },
    { name: 'Gael Kakuta', pos: 'MED', club: 'Amiens', age: 35 },
    { name: 'Yoane Wissa', pos: 'DEL', club: 'Brentford', age: 29 },
    { name: 'Cédric Bakambu', pos: 'DEL', club: 'Real Betis', age: 35 }
  ],
  strengths: 'Rigor táctico de Desabre, fortaleza física (Mbemba) y velocidad por las bandas.',
  weaknesses: 'Dificultad para destrabar bloques cerrados y baja efectividad goleadora.',
  playStyle: 'Bloque medio/bajo, presión fuerte en el centro y contragolpes directos a Wissa.'
},
'Uzbekistán': {
  fifaRanking: 64, group: 'K',
  coach: { name: 'Srečko Katanec', nationality: 'Eslovena', style: 'Disciplinado y colectivo', formation: '3-4-2-1' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.1, possession: 49, corners: 4.8, fouls: 12.5, yellowCards: 1.6, redCards: 0.1, shots: 10.5, shotsOnTarget: 4.1, passAccuracy: 80, cleanSheets: 4, tackles: 16, interceptions: 13, saves: 3.1 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Irán', result: 'D', gf: 1, ga: 1, possession: 48 },
    { date: '2026-05-29', opponent: 'Emiratos Árabes', result: 'W', gf: 2, ga: 0, possession: 55 },
    { date: '2026-03-24', opponent: 'Australia', result: 'L', gf: 0, ga: 1, possession: 42 }
  ],
  players: [
    { name: 'Utkir Yusupov', pos: 'POR', club: 'Navbahor', age: 35 },
    { name: 'Rustam Ashurmatov', pos: 'DEF', club: 'Rubin Kazan', age: 29 },
    { name: 'Abdukodir Khusanov', pos: 'DEF', club: 'Lens', age: 22 },
    { name: 'Otabek Shukurov', pos: 'MED', club: 'Kayserispor', age: 30 },
    { name: 'Odiljon Hamrobekov', pos: 'MED', club: 'Navbahor', age: 30 },
    { name: 'Jaloliddin Masharipov', pos: 'MED', club: 'Esteghlal', age: 32 },
    { name: 'Abbosbek Fayzullaev', pos: 'MED', club: 'CSKA Moscú', age: 22 },
    { name: 'Eldor Shomurodov', pos: 'DEL', club: 'Roma', age: 30 }
  ],
  strengths: 'Talento joven emergente (Fayzullaev, Khusanov) y un goleador letal en Shomurodov.',
  weaknesses: 'Falta de experiencia en mundiales y vulnerabilidad ante ritmo europeo alto.',
  playStyle: 'Fútbol técnico y ordenado, priorizando las combinaciones cortas en el centro.'
},
'Colombia': {
  fifaRanking: 12, group: 'K',
  coach: { name: 'Néstor Lorenzo', nationality: 'Argentina', style: 'Intenso y agresivo', formation: '4-2-3-1' },
  stats: { goalsFor: 1.8, goalsAgainst: 0.7, possession: 53, corners: 5.5, fouls: 14, yellowCards: 2.1, redCards: 0.1, shots: 13.5, shotsOnTarget: 5.2, passAccuracy: 84, cleanSheets: 5, tackles: 18, interceptions: 14, saves: 2.8 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Ecuador', result: 'D', gf: 0, ga: 0, possession: 50 },
    { date: '2026-05-30', opponent: 'Argentina', result: 'L', gf: 0, ga: 2, possession: 40 },
    { date: '2026-03-24', opponent: 'Uruguay', result: 'W', gf: 2, ga: 1, possession: 55 }
  ],
  players: [
    { name: 'Camilo Vargas', pos: 'POR', club: 'Atlas', age: 37 },
    { name: 'Jhon Lucumí', pos: 'DEF', club: 'Bologna', age: 27 },
    { name: 'Davinson Sánchez', pos: 'DEF', club: 'Galatasaray', age: 29 },
    { name: 'Jefferson Lerma', pos: 'MED', club: 'Crystal Palace', age: 31 },
    { name: 'Richard Ríos', pos: 'MED', club: 'Palmeiras', age: 26 },
    { name: 'James Rodríguez', pos: 'MED', club: 'São Paulo', age: 34 },
    { name: 'Luis Díaz', pos: 'DEL', club: 'Liverpool', age: 29 },
    { name: 'Jhon Arias', pos: 'DEL', club: 'Fluminense', age: 28 }
  ],
  strengths: 'Desequilibrio mundial de Luis Díaz, pegada de James y fortaleza en el mediocentro.',
  weaknesses: 'A veces sufren contra equipos que se encierran con doble línea de cuatro.',
  playStyle: 'Presión alta de Lorenzo, fútbol dinámico, desdobles por banda y talento individual.'
},
// ==================== GRUPO L ====================
'Inglaterra': {
  fifaRanking: 4, group: 'L',
  coach: { name: 'Gareth Southgate', nationality: 'Inglesa', style: 'Equilibrado y táctico', formation: '4-2-3-1' },
  stats: { goalsFor: 2.1, goalsAgainst: 0.6, possession: 58, corners: 6.2, fouls: 9.5, yellowCards: 1.2, redCards: 0.0, shots: 14.5, shotsOnTarget: 6.1, passAccuracy: 88, cleanSheets: 6, tackles: 15, interceptions: 9, saves: 2.1 },
  recentMatches: [
    { date: '2026-06-05', opponent: 'Bélgica', result: 'W', gf: 2, ga: 0, possession: 48 },
    { date: '2026-05-29', opponent: 'España', result: 'L', gf: 1, ga: 2, possession: 35 },
    { date: '2026-03-24', opponent: 'Brasil', result: 'D', gf: 0, ga: 0, possession: 52 }
  ],
  players: [
    { name: 'Jordan Pickford', pos: 'POR', club: 'Everton', age: 32 },
    { name: 'John Stones', pos: 'DEF', club: 'Man City', age: 32 },
    { name: 'Marc Guéhi', pos: 'DEF', club: 'Crystal Palace', age: 25 },
    { name: 'Declan Rice', pos: 'MED', club: 'Arsenal', age: 27 },
    { name: 'Jude Bellingham', pos: 'MED', club: 'Real Madrid', age: 22 },
    { name: 'Phil Foden', pos: 'MED', club: 'Man City', age: 26 },
    { name: 'Bukayo Saka', pos: 'DEL', club: 'Arsenal', age: 24 },
    { name: 'Harry Kane', pos: 'DEL', club: 'Bayern Múnich', age: 32 }
  ],
  strengths: 'Talento individual arrollador (Bellingham, Foden, Saka) y seguridad defensiva.',
  weaknesses: 'El planteamiento a veces es demasiado conservador y dependiente de individualidades.',
  playStyle: 'Dominio seguro, progresiones cuidadosas y aceleración letal en 3/4 de cancha.'
},
'Croacia': {
  fifaRanking: 10, group: 'L',
  coach: { name: 'Zlatko Dalić', nationality: 'Croata', style: 'Resiliente y técnico', formation: '4-3-3' },
  stats: { goalsFor: 1.5, goalsAgainst: 1.0, possession: 54, corners: 4.8, fouls: 11, yellowCards: 1.6, redCards: 0.0, shots: 11.5, shotsOnTarget: 4.5, passAccuracy: 85, cleanSheets: 3, tackles: 14, interceptions: 12, saves: 3.2 },
  recentMatches: [
    { date: '2026-06-04', opponent: 'Países Bajos', result: 'L', gf: 1, ga: 2, possession: 45 },
    { date: '2026-05-29', opponent: 'Gales', result: 'W', gf: 2, ga: 0, possession: 60 },
    { date: '2026-03-24', opponent: 'Italia', result: 'D', gf: 1, ga: 1, possession: 50 }
  ],
  players: [
    { name: 'Dominik Livaković', pos: 'POR', club: 'Fenerbahçe', age: 31 },
    { name: 'Joško Gvardiol', pos: 'DEF', club: 'Man City', age: 24 },
    { name: 'Josip Šutalo', pos: 'DEF', club: 'Ajax', age: 26 },
    { name: 'Mateo Kovačić', pos: 'MED', club: 'Man City', age: 32 },
    { name: 'Marcelo Brozović', pos: 'MED', club: 'Al-Nassr', age: 33 },
    { name: 'Luka Modrić', pos: 'MED', club: 'Real Madrid', age: 40 },
    { name: 'Lovro Majer', pos: 'MED', club: 'Wolfsburgo', age: 28 },
    { name: 'Andrej Kramarić', pos: 'DEL', club: 'Hoffenheim', age: 34 }
  ],
  strengths: 'Dominio psicológico de los tiempos, resiliencia y el mejor triángulo de mediocampo.',
  weaknesses: 'Falta de un delantero top mundial y envejecimiento de su eje vertebral.',
  playStyle: 'Ritmo pausado, dominio de la posesión para adormecer al rival e inteligencia táctica.'
},
'Ghana': {
  fifaRanking: 59, group: 'L',
  coach: { name: 'Otto Addo', nationality: 'Ghanesa', style: 'Rápido y físico', formation: '4-2-3-1' },
  stats: { goalsFor: 1.3, goalsAgainst: 1.4, possession: 47, corners: 4.5, fouls: 13.5, yellowCards: 1.8, redCards: 0.1, shots: 10.0, shotsOnTarget: 3.8, passAccuracy: 79, cleanSheets: 2, tackles: 17, interceptions: 14, saves: 3.1 },
  recentMatches: [
    { date: '2026-06-03', opponent: 'Marruecos', result: 'L', gf: 0, ga: 2, possession: 42 },
    { date: '2026-05-28', opponent: 'Costa de Marfil', result: 'L', gf: 0, ga: 2, possession: 47 },
    { date: '2026-03-24', opponent: 'Nigeria', result: 'W', gf: 2, ga: 1, possession: 45 }
  ],
  players: [
    { name: 'Lawrence Ati-Zigi', pos: 'POR', club: 'St. Gallen', age: 29 },
    { name: 'Alexander Djiku', pos: 'DEF', club: 'Fenerbahçe', age: 31 },
    { name: 'Mohammed Salisu', pos: 'DEF', club: 'Mónaco', age: 27 },
    { name: 'Thomas Partey', pos: 'MED', club: 'Arsenal', age: 32 },
    { name: 'Salis Abdul Samed', pos: 'MED', club: 'Lens', age: 26 },
    { name: 'Mohammed Kudus', pos: 'MED', club: 'West Ham', age: 25 },
    { name: 'Iñaki Williams', pos: 'DEL', club: 'Athletic Club', age: 31 },
    { name: 'Antoine Semenyo', pos: 'DEL', club: 'Bournemouth', age: 26 }
  ],
  strengths: 'Talento puro de Mohammed Kudus y desborde imparable de Semenyo/Williams.',
  weaknesses: 'Errores graves de concentración defensiva y problemas de conexión en la salida.',
  playStyle: 'Transiciones rápidas, explotando espacios a la espalda de la defensa rival.'
},
'Panamá': {
  fifaRanking: 43, group: 'L',
  coach: { name: 'Thomas Christiansen', nationality: 'Española', style: 'Posesión y orden', formation: '3-4-3' },
  stats: { goalsFor: 1.4, goalsAgainst: 1.2, possession: 52, corners: 4.5, fouls: 12, yellowCards: 1.7, redCards: 0.1, shots: 9.5, shotsOnTarget: 3.8, passAccuracy: 81, cleanSheets: 3, tackles: 15, interceptions: 13, saves: 3.2 },
  recentMatches: [
    { date: '2026-06-02', opponent: 'Jamaica', result: 'W', gf: 2, ga: 0, possession: 55 },
    { date: '2026-05-28', opponent: 'Costa Rica', result: 'W', gf: 1, ga: 0, possession: 58 },
    { date: '2026-03-24', opponent: 'Estados Unidos', result: 'L', gf: 0, ga: 2, possession: 45 }
  ],
  players: [
    { name: 'Orlando Mosquera', pos: 'POR', club: 'Maccabi T.A.', age: 31 },
    { name: 'Andrés Andrade', pos: 'DEF', club: 'LASK', age: 27 },
    { name: 'Fidel Escobar', pos: 'DEF', club: 'Saprissa', age: 31 },
    { name: 'José Córdoba', pos: 'DEF', club: 'Levski Sofia', age: 24 },
    { name: 'Adalberto Carrasquilla', pos: 'MED', club: 'Houston Dynamo', age: 27 },
    { name: 'Aníbal Godoy', pos: 'MED', club: 'Nashville', age: 36 },
    { name: 'Édgar Bárcenas', pos: 'DEL', club: 'Mazatlán', age: 32 },
    { name: 'José Fajardo', pos: 'DEL', club: 'Univ. Católica', age: 32 }
  ],
  strengths: 'Juego de toque impulsado por Carrasquilla (Coco) y buena salida con balón.',
  weaknesses: 'Falta de peso ofensivo frente a centrales físicamente dominantes.',
  playStyle: 'Juego proactivo con línea de 3, buen trato del balón y uso constante de carrileros.'
}
};
