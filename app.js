const STORAGE_KEY = 'bolaoCopa2026State';

const matchData = [
  { id: 1, date: '2026-06-11', stage: 'Group A', home: 'Mexico', away: 'South Africa', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 2, date: '2026-06-11', stage: 'Group A', home: 'South Korea', away: 'Czech Republic', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 3, date: '2026-06-12', stage: 'Group B', home: 'Canada', away: 'Bosnia and Herzegovina', venue: 'BMO Field', timezone: 'UTC-4' },
  { id: 4, date: '2026-06-12', stage: 'Group D', home: 'United States', away: 'Paraguay', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 5, date: '2026-06-13', stage: 'Group C', home: 'Haiti', away: 'Scotland', venue: 'MetLife Stadium', timezone: 'UTC-4' },
  { id: 6, date: '2026-06-13', stage: 'Group D', home: 'Australia', away: 'Turkey', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 7, date: '2026-06-13', stage: 'Group C', home: 'Brazil', away: 'Morocco', venue: 'MetLife Stadium', timezone: 'UTC-4' },
  { id: 8, date: '2026-06-13', stage: 'Group B', home: 'Qatar', away: 'Switzerland', venue: 'BMO Field', timezone: 'UTC-7' },
  { id: 9, date: '2026-06-14', stage: 'Group E', home: 'Ivory Coast', away: 'Ecuador', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 10, date: '2026-06-14', stage: 'Group E', home: 'Germany', away: 'Curaçao', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 11, date: '2026-06-14', stage: 'Group F', home: 'Netherlands', away: 'Japan', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 12, date: '2026-06-14', stage: 'Group F', home: 'Sweden', away: 'Tunisia', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 13, date: '2026-06-15', stage: 'Group H', home: 'Saudi Arabia', away: 'Uruguay', venue: 'Mercedes-Benz Stadium', timezone: 'UTC-4' },
  { id: 14, date: '2026-06-15', stage: 'Group H', home: 'Spain', away: 'Cape Verde', venue: 'Mercedes-Benz Stadium', timezone: 'UTC-4' },
  { id: 15, date: '2026-06-15', stage: 'Group G', home: 'Iran', away: 'New Zealand', venue: 'Lumen Field', timezone: 'UTC-7' },
  { id: 16, date: '2026-06-15', stage: 'Group G', home: 'Belgium', away: 'Egypt', venue: 'Lumen Field', timezone: 'UTC-7' },
  { id: 17, date: '2026-06-16', stage: 'Group I', home: 'France', away: 'Senegal', venue: 'MetLife Stadium', timezone: 'UTC-4' },
  { id: 18, date: '2026-06-16', stage: 'Group I', home: 'Iraq', away: 'Norway', venue: 'MetLife Stadium', timezone: 'UTC-4' },
  { id: 19, date: '2026-06-16', stage: 'Group J', home: 'Argentina', away: 'Algeria', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 20, date: '2026-06-16', stage: 'Group J', home: 'Austria', away: 'Jordan', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 21, date: '2026-06-17', stage: 'Group L', home: 'Ghana', away: 'Panama', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 22, date: '2026-06-17', stage: 'Group L', home: 'England', away: 'Croatia', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 23, date: '2026-06-17', stage: 'Group K', home: 'Portugal', away: 'DR Congo', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 24, date: '2026-06-17', stage: 'Group K', home: 'Uzbekistan', away: 'Colombia', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 25, date: '2026-06-18', stage: 'Group A', home: 'Czech Republic', away: 'South Africa', venue: 'Estadio Akron', timezone: 'UTC-4' },
  { id: 26, date: '2026-06-18', stage: 'Group B', home: 'Switzerland', away: 'Bosnia and Herzegovina', venue: 'Levi\'s Stadium', timezone: 'UTC-7' },
  { id: 27, date: '2026-06-18', stage: 'Group B', home: 'Canada', away: 'Qatar', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 28, date: '2026-06-18', stage: 'Group A', home: 'Mexico', away: 'South Korea', venue: 'Mercedes-Benz Stadium', timezone: 'UTC-6' },
  { id: 29, date: '2026-06-19', stage: 'Group C', home: 'Brazil', away: 'Haiti', venue: 'Gillette Stadium', timezone: 'UTC-4' },
  { id: 30, date: '2026-06-19', stage: 'Group C', home: 'Scotland', away: 'Morocco', venue: 'Gillette Stadium', timezone: 'UTC-4' },
  { id: 31, date: '2026-06-19', stage: 'Group D', home: 'Turkey', away: 'Paraguay', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 32, date: '2026-06-19', stage: 'Group D', home: 'United States', away: 'Australia', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 33, date: '2026-06-20', stage: 'Group E', home: 'Germany', away: 'Ivory Coast', venue: 'Lincoln Financial Field', timezone: 'UTC-4' },
  { id: 34, date: '2026-06-20', stage: 'Group E', home: 'Ecuador', away: 'Curaçao', venue: 'BMO Field', timezone: 'UTC-5' },
  { id: 35, date: '2026-06-20', stage: 'Group F', home: 'Netherlands', away: 'Sweden', venue: 'Estadio BBVA', timezone: 'UTC-5' },
  { id: 36, date: '2026-06-20', stage: 'Group F', home: 'Tunisia', away: 'Japan', venue: 'NRG Stadium', timezone: 'UTC-6' },
  { id: 37, date: '2026-06-21', stage: 'Group D', home: 'Uruguay', away: 'Cape Verde', venue: 'Hard Rock Stadium', timezone: 'UTC-4' },
  { id: 38, date: '2026-06-21', stage: 'Group H', home: 'Spain', away: 'Saudi Arabia', venue: 'Mercedes-Benz Stadium', timezone: 'UTC-4' },
  { id: 39, date: '2026-06-21', stage: 'Group G', home: 'Belgium', away: 'Iran', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 40, date: '2026-06-21', stage: 'Group G', home: 'New Zealand', away: 'Egypt', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 41, date: '2026-06-22', stage: 'Group I', home: 'Norway', away: 'Senegal', venue: 'Gillette Stadium', timezone: 'UTC-4' },
  { id: 42, date: '2026-06-22', stage: 'Group I', home: 'France', away: 'Iraq', venue: 'Gillette Stadium', timezone: 'UTC-4' },
  { id: 43, date: '2026-06-22', stage: 'Group J', home: 'Argentina', away: 'Austria', venue: 'Levi\'s Stadium', timezone: 'UTC-5' },
  { id: 44, date: '2026-06-22', stage: 'Group J', home: 'Jordan', away: 'Algeria', venue: 'AT&T Stadium', timezone: 'UTC-7' },
  { id: 45, date: '2026-06-23', stage: 'Group L', home: 'England', away: 'Ghana', venue: 'BMO Field', timezone: 'UTC-5' },
  { id: 46, date: '2026-06-23', stage: 'Group L', home: 'Croatia', away: 'Panama', venue: 'BMO Field', timezone: 'UTC-5' },
  { id: 47, date: '2026-06-23', stage: 'Group K', home: 'Portugal', away: 'Uzbekistan', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 48, date: '2026-06-23', stage: 'Group K', home: 'DR Congo', away: 'Colombia', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 49, date: '2026-06-24', stage: 'Group C', home: 'Scotland', away: 'Brazil', venue: 'Lincoln Financial Field', timezone: 'UTC-4' },
  { id: 50, date: '2026-06-24', stage: 'Group C', home: 'Morocco', away: 'Haiti', venue: 'Hard Rock Stadium', timezone: 'UTC-4' },
  { id: 51, date: '2026-06-24', stage: 'Group B', home: 'Canada', away: 'Switzerland', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 52, date: '2026-06-24', stage: 'Group B', home: 'Bosnia and Herzegovina', away: 'Qatar', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 53, date: '2026-06-24', stage: 'Group A', home: 'Czech Republic', away: 'Mexico', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 54, date: '2026-06-24', stage: 'Group A', home: 'South Africa', away: 'South Korea', venue: 'Estadio Azteca', timezone: 'UTC-6' },
  { id: 55, date: '2026-06-25', stage: 'Group E', home: 'Curaçao', away: 'Ivory Coast', venue: 'Arrowhead Stadium', timezone: 'UTC-5' },
  { id: 56, date: '2026-06-25', stage: 'Group E', home: 'Germany', away: 'Ecuador', venue: 'Lincoln Financial Field', timezone: 'UTC-4' },
  { id: 57, date: '2026-06-25', stage: 'Group F', home: 'Japan', away: 'Sweden', venue: 'Levi\'s Stadium', timezone: 'UTC-5' },
  { id: 58, date: '2026-06-25', stage: 'Group F', home: 'Tunisia', away: 'Netherlands', venue: 'Levi\'s Stadium', timezone: 'UTC-5' },
  { id: 59, date: '2026-06-25', stage: 'Group D', home: 'United States', away: 'Turkey', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 60, date: '2026-06-25', stage: 'Group D', home: 'Paraguay', away: 'Australia', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 61, date: '2026-06-26', stage: 'Group I', home: 'France', away: 'Norway', venue: 'MetLife Stadium', timezone: 'UTC-6' },
  { id: 62, date: '2026-06-26', stage: 'Group I', home: 'Senegal', away: 'Iraq', venue: 'MetLife Stadium', timezone: 'UTC-6' },
  { id: 63, date: '2026-06-26', stage: 'Group G', home: 'Egypt', away: 'Iran', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 64, date: '2026-06-26', stage: 'Group G', home: 'New Zealand', away: 'Belgium', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 65, date: '2026-06-26', stage: 'Group H', home: 'Saudi Arabia', away: 'Cape Verde', venue: 'Hard Rock Stadium', timezone: 'UTC-4' },
  { id: 66, date: '2026-06-26', stage: 'Group H', home: 'Uruguay', away: 'Spain', venue: 'NRG Stadium', timezone: 'UTC-6' },
  { id: 67, date: '2026-06-27', stage: 'Group L', home: 'England', away: 'Panama', venue: 'BMO Field', timezone: 'UTC-4' },
  { id: 68, date: '2026-06-27', stage: 'Group L', home: 'Croatia', away: 'Ghana', venue: 'MetLife Stadium', timezone: 'UTC-4' },
  { id: 69, date: '2026-06-27', stage: 'Group J', home: 'Austria', away: 'Algeria', venue: 'BMO Field', timezone: 'UTC-4' },
  { id: 70, date: '2026-06-27', stage: 'Group J', home: 'Argentina', away: 'Jordan', venue: 'AT&T Stadium', timezone: 'UTC-7' },
  { id: 71, date: '2026-06-27', stage: 'Group K', home: 'Colombia', away: 'Portugal', venue: 'Estadio Akron', timezone: 'UTC-6' },
  { id: 72, date: '2026-06-27', stage: 'Group K', home: 'DR Congo', away: 'Uzbekistan', venue: 'Hard Rock Stadium', timezone: 'UTC-4' },
  { id: 73, date: '2026-06-28', stage: 'Round of 32', home: '2A', away: '2B', venue: 'SoFi Stadium', timezone: 'UTC-7' },
  { id: 74, date: '2026-06-29', stage: 'Round of 32', home: '1C', away: '2F', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 75, date: '2026-06-29', stage: 'Round of 32', home: '1E', away: '3ABCDF', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 76, date: '2026-06-29', stage: 'Round of 32', home: '1F', away: '2C', venue: 'Gillette Stadium', timezone: 'UTC-6' },
  { id: 77, date: '2026-06-29', stage: 'Round of 32', home: '2E', away: '2I', venue: 'Levi\'s Stadium', timezone: 'UTC-5' },
  { id: 78, date: '2026-06-30', stage: 'Round of 32', home: '1I', away: '3CDFGH', venue: 'Estadio BBVA', timezone: 'UTC-5' },
  { id: 79, date: '2026-06-30', stage: 'Round of 32', home: '1A', away: '3CEFHI', venue: 'MetLife Stadium', timezone: 'UTC-6' },
  { id: 80, date: '2026-07-01', stage: 'Round of 32', home: '1L', away: '3EHIJK', venue: 'Estadio Azteca', timezone: 'UTC-5' },
  { id: 81, date: '2026-07-01', stage: 'Round of 32', home: '1D', away: '3BEFIJ', venue: 'Lumen Field', timezone: 'UTC-7' },
  { id: 82, date: '2026-07-01', stage: 'Round of 32', home: '1G', away: '3AEHIJ', venue: 'Lumen Field', timezone: 'UTC-7' },
  { id: 83, date: '2026-07-02', stage: 'Round of 32', home: '1H', away: '2J', venue: 'SoFi Stadium', timezone: 'UTC-4' },
  { id: 84, date: '2026-07-02', stage: 'Round of 32', home: '2K', away: '2L', venue: 'Levi\'s Stadium', timezone: 'UTC-7' },
  { id: 85, date: '2026-07-03', stage: 'Round of 32', home: '1B', away: '3EFGIJ', venue: 'AT&T Stadium', timezone: 'UTC-4' },
  { id: 86, date: '2026-07-03', stage: 'Round of 32', home: '2D', away: '2G', venue: 'Hard Rock Stadium', timezone: 'UTC-5' },
  { id: 87, date: '2026-07-03', stage: 'Round of 32', home: '1J', away: '2H', venue: 'AT&T Stadium', timezone: 'UTC-4' },
  { id: 88, date: '2026-07-03', stage: 'Round of 32', home: '1K', away: '3DEIJL', venue: 'AT&T Stadium', timezone: 'UTC-4' },
  { id: 89, date: '2026-07-04', stage: 'Round of 16', home: 'W74', away: 'W77', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 90, date: '2026-07-04', stage: 'Round of 16', home: 'W73', away: 'W75', venue: 'NRG Stadium', timezone: 'UTC-4' },
  { id: 91, date: '2026-07-05', stage: 'Round of 16', home: 'W76', away: 'W78', venue: 'Lincoln Financial Field', timezone: 'UTC-4' },
  { id: 92, date: '2026-07-05', stage: 'Round of 16', home: 'W79', away: 'W80', venue: 'MetLife Stadium', timezone: 'UTC-6' },
  { id: 93, date: '2026-07-06', stage: 'Round of 16', home: 'W83', away: 'W84', venue: 'Estadio Azteca', timezone: 'UTC-5' },
  { id: 94, date: '2026-07-06', stage: 'Round of 16', home: 'W81', away: 'W82', venue: 'AT&T Stadium', timezone: 'UTC-6' },
  { id: 95, date: '2026-07-07', stage: 'Round of 16', home: 'W86', away: 'W88', venue: 'Lumen Field', timezone: 'UTC-7' },
  { id: 96, date: '2026-07-07', stage: 'Round of 16', home: 'W85', away: 'W87', venue: 'BC Place', timezone: 'UTC-7' },
  { id: 97, date: '2026-07-09', stage: 'Quarterfinal', home: 'W89', away: 'W90', venue: 'Gillette Stadium', timezone: 'UTC-7' },
  { id: 98, date: '2026-07-10', stage: 'Quarterfinal', home: 'W93', away: 'W94', venue: 'SoFi Stadium', timezone: 'UTC-4' },
  { id: 99, date: '2026-07-11', stage: 'Quarterfinal', home: 'W91', away: 'W92', venue: 'Hard Rock Stadium', timezone: 'UTC-5' },
  { id: 100, date: '2026-07-11', stage: 'Quarterfinal', home: 'W95', away: 'W96', venue: 'Arrowhead Stadium', timezone: 'UTC-5' },
  { id: 101, date: '2026-07-14', stage: 'Semifinal', home: 'W97', away: 'W98', venue: 'AT&T Stadium', timezone: 'UTC-5' },
  { id: 102, date: '2026-07-15', stage: 'Semifinal', home: 'W99', away: 'W100', venue: 'AT&T Stadium', timezone: 'UTC-5' },
  { id: 103, date: '2026-07-18', stage: 'Third place', home: 'RU101', away: 'RU102', venue: 'Hard Rock Stadium', timezone: 'UTC-5' },
  { id: 104, date: '2026-07-19', stage: 'Final', home: 'W101', away: 'W102', venue: 'MetLife Stadium', timezone: 'UTC-4' },
];

const teamTranslations = {
  'Mexico': 'México',
  'South Africa': 'África do Sul',
  'South Korea': 'Coreia do Sul',
  'Czech Republic': 'República Tcheca',
  'Canada': 'Canadá',
  'Bosnia and Herzegovina': 'Bósnia e Herzegovina',
  'United States': 'Estados Unidos',
  'Paraguay': 'Paraguai',
  'Haiti': 'Haiti',
  'Scotland': 'Escócia',
  'Australia': 'Austrália',
  'Turkey': 'Turquia',
  'Brazil': 'Brasil',
  'Morocco': 'Marrocos',
  'Qatar': 'Catar',
  'Switzerland': 'Suíça',
  'Ivory Coast': 'Costa do Marfim',
  'Ecuador': 'Equador',
  'Germany': 'Alemanha',
  'Curaçao': 'Curaçao',
  'Netherlands': 'Holanda',
  'Japan': 'Japão',
  'Sweden': 'Suécia',
  'Tunisia': 'Tunísia',
  'Saudi Arabia': 'Arábia Saudita',
  'Uruguay': 'Uruguai',
  'Spain': 'Espanha',
  'Cape Verde': 'Cabo Verde',
  'Iran': 'Irã',
  'New Zealand': 'Nova Zelândia',
  'Belgium': 'Bélgica',
  'Egypt': 'Egito',
  'France': 'França',
  'Senegal': 'Senegal',
  'Iraq': 'Iraque',
  'Norway': 'Noruega',
  'Argentina': 'Argentina',
  'Algeria': 'Argélia',
  'Austria': 'Áustria',
  'Jordan': 'Jordânia',
  'Ghana': 'Gana',
  'Panama': 'Panamá',
  'England': 'Inglaterra',
  'Croatia': 'Croácia',
  'Portugal': 'Portugal',
  'DR Congo': 'RD Congo',
  'Uzbekistan': 'Uzbequistão',
  'Colombia': 'Colômbia',
};

const stageTranslations = {
  'Group A': 'Grupo A',
  'Group B': 'Grupo B',
  'Group C': 'Grupo C',
  'Group D': 'Grupo D',
  'Group E': 'Grupo E',
  'Group F': 'Grupo F',
  'Group G': 'Grupo G',
  'Group H': 'Grupo H',
  'Group I': 'Grupo I',
  'Group J': 'Grupo J',
  'Group K': 'Grupo K',
  'Group L': 'Grupo L',
  'Round of 32': 'Oitavas de Final',
  'Round of 16': 'Oitavas de Final',
  'Quarterfinal': 'Quartas de Final',
  'Semifinal': 'Semifinal',
  'Third place': '3º Lugar',
  'Final': 'Final',
};

function translateTeam(name) {
  return teamTranslations[name] || name;
}

function translateStage(stage) {
  return stageTranslations[stage] || stage;
}

const elements = {
  tabs: document.querySelectorAll('.tab-button'),
  panels: document.querySelectorAll('.panel'),
  stageFilter: document.getElementById('stageFilter'),
  teamSearch: document.getElementById('teamSearch'),
  calendarTable: document.getElementById('calendarTable'),
  participantForm: document.getElementById('participantForm'),
  participantsList: document.getElementById('participantsList'),
  participantName: document.getElementById('participantName'),
  participantEmail: document.getElementById('participantEmail'),
  participantNickname: document.getElementById('participantNickname'),
  predictionForm: document.getElementById('predictionForm'),
  predictionParticipant: document.getElementById('predictionParticipant'),
  predictionMatch: document.getElementById('predictionMatch'),
  selectedMatchText: document.getElementById('selectedMatchText'),
  predictionHome: document.getElementById('predictionHome'),
  calendarGrid: document.getElementById('calendarGrid'),
  predictionAway: document.getElementById('predictionAway'),
  predictionsTable: document.getElementById('predictionsTable'),
  scoreCards: document.getElementById('scoreCards'),
  rankingTable: document.getElementById('rankingTable'),
  exportButton: document.getElementById('exportButton'),
  downloadButton: document.getElementById('downloadButton'),
  cloudSaveButton: document.getElementById('cloudSaveButton'),
  cloudLoadButton: document.getElementById('cloudLoadButton'),
  loginScreen: document.getElementById('loginScreen'),
  appShell: document.getElementById('appShell'),
  authEmail: document.getElementById('authEmail'),
  authPassword: document.getElementById('authPassword'),
  authStatus: document.getElementById('authStatus'),
  signInButton: document.getElementById('signInButton'),
  signUpButton: document.getElementById('signUpButton'),
  signOutButton: document.getElementById('signOutButton'),
  importFile: document.getElementById('importFile'),
  timezoneButtons: document.querySelectorAll('.timezone-toggle'),
  viewButtons: document.querySelectorAll('.view-toggle'),
};

let supabaseClient = null;
let currentUser = null;
let cloudConfigured = false;

let state = {
  participants: [],
  predictions: [],
  results: [],
};

function defaultParticipants() {
  return [
    { id: 1, name: 'Gé', email: '', nickname: 'Gé' },
    { id: 2, name: 'Gui', email: '', nickname: 'Gui' },
  ];
}

async function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      state = JSON.parse(stored);
      state.participants = Array.isArray(state.participants) && state.participants.length > 0
        ? state.participants
        : defaultParticipants();
      state.predictions = Array.isArray(state.predictions) ? state.predictions : [];
      state.results = Array.isArray(state.results) ? state.results : [];
      state.timezoneMode = state.timezoneMode || 'br';
      state.calendarView = state.calendarView || 'grid';
      return;
    } catch (error) {
      console.warn('Falha ao ler dados do bolão:', error);
    }
  }

  try {
    const response = await fetch('data/bolao-state.json');
    if (!response.ok) throw new Error('Não foi possível carregar o arquivo de estado.');
    const imported = await response.json();
    state = imported;
  } catch (error) {
    console.warn('Não foi possível abrir o estado padrão do repositório:', error);
    state = { participants: defaultParticipants(), predictions: [], results: [], timezoneMode: 'br', calendarView: 'grid' };
  }

  state.participants = Array.isArray(state.participants) && state.participants.length > 0
    ? state.participants
    : defaultParticipants();
  state.predictions = Array.isArray(state.predictions) ? state.predictions : [];
  state.results = Array.isArray(state.results) ? state.results : [];
  state.timezoneMode = state.timezoneMode || 'br';
  state.calendarView = state.calendarView || 'grid';
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTimezoneInfo(mode) {
  const map = {
    br: { zone: 'America/Sao_Paulo', label: 'Horário Brasil' },
    ca: { zone: 'America/Toronto', label: 'Horário Canadá' },
  };
  return map[mode] || map.br;
}

function formatDate(value, mode = state.timezoneMode) {
  const { zone } = getTimezoneInfo(mode);
  const date = new Date(value + 'T12:00:00');
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    weekday: 'short',
    timeZone: zone,
  });
}

function getResult(matchId) {
  return state.results.find((result) => result.matchId === matchId) || null;
}

function initCloudClient() {
  if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
    return false;
  }
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes('YOUR') || SUPABASE_ANON_KEY.includes('YOUR')) {
    return false;
  }
  if (typeof supabase === 'undefined' || !supabase?.createClient) {
    return false;
  }
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  cloudConfigured = true;
  return true;
}

function setStatusMessage(message, variant = 'light') {
  if (!elements.authStatus) return;
  elements.authStatus.textContent = message;
  elements.authStatus.className = 'auth-status';
  if (variant === 'success') {
    elements.authStatus.classList.add('text-success');
  } else if (variant === 'danger') {
    elements.authStatus.classList.add('text-danger');
  } else if (variant === 'warning') {
    elements.authStatus.classList.add('text-warning');
  } else {
    elements.authStatus.classList.add('text-white');
  }
}

function updateAuthUI(user) {
  currentUser = user;
  const signedIn = Boolean(user);
  setStatusMessage(signedIn ? `Logado como ${user.email}` : 'Você não está autenticado.', signedIn ? 'success' : 'light');
  elements.signOutButton.style.display = signedIn ? 'inline-flex' : 'none';
  elements.signInButton.style.display = signedIn ? 'none' : 'inline-flex';
  elements.signUpButton.style.display = signedIn ? 'none' : 'inline-flex';
  elements.cloudSaveButton.disabled = !cloudConfigured || !signedIn;
  elements.cloudLoadButton.disabled = !cloudConfigured || !signedIn;

  if (elements.loginScreen && elements.appShell) {
    elements.loginScreen.classList.toggle('hidden', signedIn);
    elements.appShell.classList.toggle('hidden', !signedIn);
  }

  renderPredictionParticipantField();
  renderParticipants();
}

function getAuthenticatedParticipant() {
  if (!currentUser) return null;
  const participantId = String(currentUser.id);
  const existingParticipant = state.participants.find((participant) => String(participant.id) === participantId);
  if (existingParticipant) return existingParticipant;

  const displayName = currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || currentUser.email || 'Usuário autenticado';
  return {
    id: participantId,
    name: displayName,
    email: currentUser.email,
    nickname: currentUser.user_metadata?.name || currentUser.email || displayName,
  };
}

function ensureAuthenticatedParticipant() {
  const authParticipant = getAuthenticatedParticipant();
  if (!authParticipant) return null;

  const existingIndex = state.participants.findIndex((participant) => String(participant.id) === String(authParticipant.id));
  if (existingIndex === -1) {
    state.participants.push(authParticipant);
    saveState();
    if (currentUser && cloudConfigured) {
      saveToCloud();
    }
    return authParticipant;
  }

  const existing = state.participants[existingIndex];
  if (existing.email !== authParticipant.email || existing.nickname !== authParticipant.nickname || existing.name !== authParticipant.name) {
    state.participants[existingIndex] = authParticipant;
    saveState();
    if (currentUser && cloudConfigured) {
      saveToCloud();
    }
  }
  return state.participants[existingIndex];
}

function renderPredictionParticipantField() {
  const wrapper = document.getElementById('predictionParticipantField');
  const info = document.getElementById('predictionUserInfo');
  if (!wrapper || !elements.predictionParticipant || !info) return;

  if (currentUser) {
    wrapper.style.display = 'none';
    elements.predictionParticipant.removeAttribute('required');
    const authParticipant = ensureAuthenticatedParticipant();
    const label = authParticipant ? authParticipant.nickname || authParticipant.name : 'usuário autenticado';
    info.classList.remove('d-none');
    info.textContent = `O palpite será atribuído automaticamente a ${label}.`;
  } else {
    wrapper.style.display = '';
    elements.predictionParticipant.setAttribute('required', 'required');
    info.classList.add('d-none');
  }
}

function extractAuthUser(data) {
  return data?.user || data?.session?.user || null;
}

async function signInUser() {
  if (!supabaseClient) {
    setStatusMessage('Configuração de nuvem não encontrada. Preencha supabase-config.js.', 'danger');
    return;
  }
  const email = elements.authEmail.value.trim();
  const password = elements.authPassword.value.trim();
  if (!email || !password) {
    setStatusMessage('Informe email e senha.', 'warning');
    return;
  }
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    setStatusMessage(`Falha ao entrar: ${error.message}`, 'danger');
    return;
  }
  const user = extractAuthUser(data);
  if (user) {
    updateAuthUI(user);
    setStatusMessage('Autenticado com sucesso. Carregando seu bolão...', 'success');
    await loadFromCloud();
  } else {
    setStatusMessage('Login concluído, mas não foi possível recuperar o usuário. Tente recarregar a página.', 'warning');
  }
}

async function signUpUser() {
  if (!supabaseClient) {
    setStatusMessage('Configuração de nuvem não encontrada. Preencha supabase-config.js.', 'danger');
    return;
  }
  const email = elements.authEmail.value.trim();
  const password = elements.authPassword.value.trim();
  if (!email || !password) {
    setStatusMessage('Informe email e senha para registrar.', 'warning');
    return;
  }
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    setStatusMessage(`Falha ao registrar: ${error.message}`, 'danger');
    return;
  }
  const user = extractAuthUser(data);
  if (user) {
    updateAuthUI(user);
    setStatusMessage('Registro concluído. Carregando seu bolão...', 'success');
    await loadFromCloud();
  } else {
    setStatusMessage('Registro enviado. Verifique seu email para confirmar o acesso.', 'warning');
  }
}

async function signOutUser() {
  if (!supabaseClient) {
    return;
  }
  await supabaseClient.auth.signOut();
  updateAuthUI(null);
  setStatusMessage('Sessão encerrada.', 'warning');
}

async function saveToCloud() {
  if (!supabaseClient || !currentUser) {
    setStatusMessage('Faça login antes de salvar na nuvem.', 'warning');
    return;
  }

  const { error } = await supabaseClient
    .from('bolao_state')
    .upsert(
      { user_id: currentUser.id, payload: state },
      { onConflict: 'user_id' }
    );

  if (error) {
    setStatusMessage(`Erro ao salvar na nuvem: ${error.message}`, 'danger');
  } else {
    setStatusMessage('Estado salvo na nuvem com sucesso!', 'success');
  }
}

async function loadFromCloud() {
  if (!supabaseClient || !currentUser) {
    setStatusMessage('Faça login antes de carregar da nuvem.', 'warning');
    return;
  }

  const { data, error } = await supabaseClient
    .from('bolao_state')
    .select('payload')
    .eq('user_id', currentUser.id)
    .maybeSingle();

  if (error) {
    setStatusMessage(`Erro ao carregar da nuvem: ${error.message}`, 'danger');
    return;
  }

  if (data?.payload) {
    state = data.payload;
    state.participants = Array.isArray(state.participants) && state.participants.length > 0
      ? state.participants
      : defaultParticipants();
    state.predictions = Array.isArray(state.predictions) ? state.predictions : [];
    state.results = Array.isArray(state.results) ? state.results : [];
    state.timezoneMode = state.timezoneMode || 'br';
    state.calendarView = state.calendarView || 'grid';
    saveState();
    renderAll();
    renderToggleStates();
    updateMatchSummary();
    setStatusMessage('Estado carregado da nuvem com sucesso!', 'success');
  } else {
    setStatusMessage('Nenhum estado encontrado na nuvem para este usuário. Criando estado inicial...', 'info');
    await saveToCloud();
  }
}

function getMatchById(matchId) {
  return matchData.find((match) => match.id === matchId) || null;
}

function updateMatchSummary() {
  const matchId = Number(elements.predictionMatch.value);
  const match = getMatchById(matchId);
  if (!match) {
    elements.selectedMatchText.textContent = 'Selecione um jogo para ver mandante e visitante';
    return;
  }
  elements.selectedMatchText.textContent = `${translateTeam(match.home)} (mandante) x ${translateTeam(match.away)} (visitante)`;
}

function recordMatch(matchId, home, away) {
  const existing = getResult(matchId);
  if (existing) {
    existing.home = home;
    existing.away = away;
  } else {
    state.results.push({ matchId, home, away });
  }
  saveState();
  renderCalendar();
  renderPredictions();
  renderRanking();
}

function calcPoints(prediction, result) {
  if (!result) return 0;
  const homeDiff = prediction.predHome - prediction.predAway;
  const realDiff = result.home - result.away;
  if (prediction.predHome === result.home && prediction.predAway === result.away) {
    return 3;
  }
  return Math.sign(homeDiff) === Math.sign(realDiff) ? 1 : 0;
}

function getOutcomeLabel(points) {
  if (points === 3) return 'Exato';
  if (points === 1) return 'Resultado certo';
  return 'Erro';
}

function renderTab(tabName) {
  elements.tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === tabName));
  elements.panels.forEach((panel) => panel.classList.toggle('active', panel.id === tabName));
}

function renderStageOptions() {
  const stages = Array.from(new Set(matchData.map((match) => match.stage)));
  elements.stageFilter.innerHTML = '<option value="all">Todas as fases</option>' + stages
    .map((stage) => `<option value="${stage}">${translateStage(stage)}</option>`)
    .join('');
}

function renderCalendarVisual() {
  const stage = elements.stageFilter.value;
  const search = elements.teamSearch.value.trim().toLowerCase();
  const matches = matchData
    .filter((match) => stage === 'all' || match.stage === stage)
    .filter((match) => {
      if (!search) return true;
      return [match.home, match.away, match.venue, match.stage]
        .some((value) => value.toLowerCase().includes(search));
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date) || a.id - b.id);

  const groups = matches.reduce((acc, match) => {
    acc[match.date] = acc[match.date] || [];
    acc[match.date].push(match);
    return acc;
  }, {});

  const timezoneInfo = getTimezoneInfo(state.timezoneMode);
  elements.calendarGrid.classList.toggle('calendar-list', state.calendarView === 'list');

  const cards = Object.keys(groups)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((date) => {
      const dayMatches = groups[date];
      if (state.calendarView === 'list') {
        return dayMatches
          .map((match) => {
            const result = getResult(match.id);
            const resultText = result ? `Resultado: ${result.home} x ${result.away}` : 'Sem resultado';
            const resultClass = result ? 'match-result' : '';
            return `
              <section class="calendar-list-row">
                <div class="list-row-header">
                  <strong>#${match.id} • ${formatDate(match.date)} - ${translateStage(match.stage)}</strong>
                  <small>${timezoneInfo.label}</small>
                </div>
                <div class="list-row-details">
                  <p class="match-title">${translateTeam(match.home)} x ${translateTeam(match.away)}</p>
                  <p class="venue">${match.venue} · ${match.timezone}</p>
                  <p class="${resultClass}">${resultText}</p>
                </div>
              </section>
            `;
          })
          .join('');
      }

      return `
        <article class="calendar-day-card">
          <div class="day-header">
            <div>
              <strong>${formatDate(date)}</strong>
              <div class="day-meta">${dayMatches.length} jogo${dayMatches.length > 1 ? 's' : ''}</div>
            </div>
            <small>${timezoneInfo.label}</small>
          </div>
          ${dayMatches
            .map((match) => {
              const result = getResult(match.id);
              return `
                <div class="match-card">
                  <p class="match-title">#${match.id} • ${translateTeam(match.home)} x ${translateTeam(match.away)}</p>
                  <p class="stage">${translateStage(match.stage)}</p>
                  <p class="venue">${match.venue} · ${match.timezone}</p>
                  ${result ? `<p class="match-result">Resultado: ${result.home} x ${result.away}</p>` : ''}
                </div>
              `;
            })
            .join('')}
        </article>
      `;
    });

  elements.calendarGrid.innerHTML = cards.join('') || '<div class="empty-state">Nenhum jogo encontrado para o calendário visual.</div>';
}

function renderCalendar() {
  const stage = elements.stageFilter.value;
  const search = elements.teamSearch.value.trim().toLowerCase();
  const rows = matchData
    .filter((match) => stage === 'all' || match.stage === stage)
    .filter((match) => {
      if (!search) return true;
      return [match.home, match.away, match.venue, match.stage].some((value) => value.toLowerCase().includes(search));
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date) || a.id - b.id)
    .map((match) => {
      const result = getResult(match.id);
      const home = translateTeam(match.home);
      const away = translateTeam(match.away);
      const resultText = result ? `${result.home} x ${result.away}` : '-';
      return `
        <tr>
          <td>${match.id}</td>
          <td>${formatDate(match.date)}</td>
          <td>${translateStage(match.stage)}</td>
          <td>${home}</td>
          <td>${away}</td>
          <td>${match.venue}<br><small>${getTimezoneInfo(state.timezoneMode).label}</small></td>
          <td>
            <div class="field-row small-row">
              <input type="number" min="0" value="${result ? result.home : ''}" data-match="${match.id}" data-side="home" class="result-input" />
              <input type="number" min="0" value="${result ? result.away : ''}" data-match="${match.id}" data-side="away" class="result-input" />
            </div>
          </td>
        </tr>
      `;
    });
  elements.calendarTable.innerHTML = rows.join('') || '<tr><td colspan="7">Nenhum jogo encontrado.</td></tr>';
  document.querySelectorAll('.result-input').forEach((input) => {
    input.addEventListener('change', handleResultChange);
  });
  renderCalendarVisual();
}

function handleResultChange(event) {
  const matchId = Number(event.target.dataset.match);
  const side = event.target.dataset.side;
  const row = event.target.closest('tr');
  const homeInput = row.querySelector('[data-side="home"]');
  const awayInput = row.querySelector('[data-side="away"]');
  const home = homeInput.value !== '' ? Number(homeInput.value) : null;
  const away = awayInput.value !== '' ? Number(awayInput.value) : null;
  if (home === null || away === null) return;
  recordMatch(matchId, home, away);
}

function renderParticipants() {
  elements.predictionParticipant.innerHTML =
    '<option value="">Selecione um participante</option>' +
    state.participants
      .map((participant) => `<option value="${participant.id}">${participant.nickname || participant.name}</option>`)
      .join('');

  elements.participantsList.innerHTML = state.participants
    .map((participant) => `
      <li>
        <span>${participant.nickname || participant.name}</span>
        <small>${participant.email || 'sem email'}</small>
      </li>
    `)
    .join('') || '<li>Nenhum participante cadastrado.</li>';
}

function renderPredictions() {
  elements.predictionMatch.innerHTML = matchData
    .map((match) => {
      const home = translateTeam(match.home);
      const away = translateTeam(match.away);
      return `<option value="${match.id}">#${match.id} • ${home} x ${away}</option>`;
    })
    .join('');

  const rows = state.predictions
    .sort((a, b) => a.matchId - b.matchId || a.participantName.localeCompare(b.participantName))
    .map((pred) => {
      const result = getResult(pred.matchId);
      const points = calcPoints(pred, result);
      return `
        <tr>
          <td>${pred.participantName}</td>
          <td>#${pred.matchId}</td>
          <td>${pred.predHome} x ${pred.predAway}</td>
          <td>${result ? `${result.home} x ${result.away}` : '-'}</td>
          <td>${points} <span style="opacity:.7">(${getOutcomeLabel(points)})</span></td>
        </tr>
      `;
    });

  elements.predictionsTable.innerHTML = rows.join('') || '<tr><td colspan="5">Nenhum palpite registrado.</td></tr>';
}

function computeRanking() {
  const ranking = state.participants.map((participant) => {
    const predictions = state.predictions.filter((pred) => String(pred.participantId) === String(participant.id));
    const stats = predictions.reduce(
      (acc, pred) => {
        const result = getResult(pred.matchId);
        const points = calcPoints(pred, result);
        acc.total += points;
        acc.exacts += points === 3 ? 1 : 0;
        acc.corrects += points === 1 ? 1 : 0;
        return acc;
      },
      { total: 0, exacts: 0, corrects: 0 }
    );
    return {
      name: participant.nickname || participant.name,
      total: stats.total,
      exacts: stats.exacts,
      corrects: stats.corrects,
    };
  });

  ranking.sort((a, b) => b.total - a.total || b.exacts - a.exacts || b.corrects - a.corrects || a.name.localeCompare(b.name));
  return ranking;
}

function renderRanking() {
  const ranking = computeRanking();
  const scoreCount = ranking.reduce((acc, player) => {
    acc[player.total] = (acc[player.total] || 0) + 1;
    return acc;
  }, {});

  elements.rankingTable.innerHTML = ranking
    .map((player, index) => {
      const positionLabel = scoreCount[player.total] > 1 ? 'Empate' : index + 1;
      return `
      <tr>
        <td>${positionLabel}</td>
        <td>${player.name}</td>
        <td>${player.total}</td>
        <td>${player.exacts}</td>
        <td>${player.corrects}</td>
      </tr>
    `;
    })
    .join('') || '<tr><td colspan="5">Ainda não há pontos registrados.</td></tr>';

  elements.scoreCards.innerHTML = ranking.slice(0, 3)
    .map((player, index) => `
      <article class="scorecard">
        <h4>${['Campeão', 'Vice', 'Terceiro'][index] || 'Top'} • ${player.name}</h4>
        <strong>${player.total} pts</strong>
        <p>${player.exacts} exatos · ${player.corrects} resultados certos</p>
      </article>
    `)
    .join('');
}

function addParticipant(event) {
  event.preventDefault();
  const name = elements.participantName.value.trim();
  if (!name) return;
  const email = elements.participantEmail.value.trim();
  const nickname = elements.participantNickname.value.trim();
  const id = Date.now();
  state.participants.push({ id, name, email, nickname });
  saveState();
  if (currentUser) {
    saveToCloud();
  }
  elements.participantForm.reset();
  renderParticipants();
  renderRanking();
}

function addPrediction(event) {
  event.preventDefault();
  const matchId = Number(elements.predictionMatch.value);
  const predHome = Number(elements.predictionHome.value);
  const predAway = Number(elements.predictionAway.value);

  let participantId;
  let participant;
  if (currentUser) {
    const authParticipant = ensureAuthenticatedParticipant();
    if (!authParticipant) {
      setStatusMessage('Usuário autenticado não encontrado. Faça login novamente.', 'danger');
      return;
    }
    participantId = String(authParticipant.id);
    participant = authParticipant;
  } else {
    participantId = Number(elements.predictionParticipant.value);
    participant = state.participants.find((item) => item.id === participantId);
  }

  if (!participant || Number.isNaN(matchId) || Number.isNaN(predHome) || Number.isNaN(predAway)) return;

  const existingIndex = state.predictions.findIndex((pred) => String(pred.participantId) === String(participantId) && pred.matchId === matchId);
  const predictionObject = {
    id: existingIndex > -1 ? state.predictions[existingIndex].id : Date.now(),
    participantId,
    participantName: participant.nickname || participant.name,
    matchId,
    predHome,
    predAway,
  };
  if (existingIndex > -1) {
    state.predictions[existingIndex] = predictionObject;
  } else {
    state.predictions.push(predictionObject);
  }
  saveState();
  if (currentUser) {
    saveToCloud();
  }
  elements.predictionForm.reset();
  renderPredictions();
  renderRanking();
}

function exportData() {
  const json = JSON.stringify(state, null, 2);
  navigator.clipboard.writeText(json).then(() => {
    elements.exportButton.textContent = 'Copiado!';
    setTimeout(() => {
      elements.exportButton.textContent = 'Copiar dados do bolão';
    }, 1500);
  });
}

function downloadData() {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'bolao-copa-2026-state.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (imported.participants && imported.predictions && imported.results) {
        state = imported;
        saveState();
        renderAll();
        alert('Dados importados com sucesso!');
      } else {
        alert('Arquivo inválido. Use um arquivo exportado pelo bolão.');
      }
    } catch (error) {
      alert('Não foi possível importar o arquivo.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function renderAll() {
  renderStageOptions();
  renderCalendar();
  renderPredictionParticipantField();
  renderParticipants();
  renderPredictions();
  renderRanking();
}

function renderToggleStates() {
  elements.timezoneButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.timezone === state.timezoneMode);
  });
  elements.viewButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.view === state.calendarView);
  });
}

async function restoreAuth() {
  if (!supabaseClient) {
    updateAuthUI(null);
    return;
  }
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) {
    console.warn('Falha ao obter usuário:', error.message);
    updateAuthUI(null);
    return;
  }
  const user = extractAuthUser(data);
  updateAuthUI(user);
  if (user) {
    await loadFromCloud();
  }
}

async function setupEvents() {
  elements.tabs.forEach((tab) => tab.addEventListener('click', () => renderTab(tab.dataset.tab)));
  elements.stageFilter.addEventListener('change', () => {
    renderCalendar();
    renderCalendarVisual();
  });
  elements.teamSearch.addEventListener('input', () => {
    renderCalendar();
    renderCalendarVisual();
  });
  const cloudEnabled = initCloudClient();
  elements.cloudSaveButton.disabled = !cloudEnabled;
  elements.cloudLoadButton.disabled = !cloudEnabled;
  if (!cloudEnabled) {
    elements.cloudSaveButton.title = 'Configuração de nuvem não encontrada. Preencha supabase-config.js.';
    elements.cloudLoadButton.title = 'Configuração de nuvem não encontrada. Preencha supabase-config.js.';
  }

  await restoreAuth();
  if (cloudEnabled) {
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      updateAuthUI(session?.user || null);
    });
  }

  elements.timezoneButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.timezoneMode = button.dataset.timezone;
      saveState();
      renderToggleStates();
      renderCalendar();
      renderCalendarVisual();
    });
  });
  elements.viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.calendarView = button.dataset.view;
      saveState();
      renderToggleStates();
      renderCalendarVisual();
    });
  });
  elements.signInButton.addEventListener('click', signInUser);
  elements.signUpButton.addEventListener('click', signUpUser);
  elements.signOutButton.addEventListener('click', signOutUser);
  elements.cloudSaveButton.addEventListener('click', saveToCloud);
  elements.cloudLoadButton.addEventListener('click', loadFromCloud);
  elements.downloadButton.addEventListener('click', downloadData);
  elements.participantForm.addEventListener('submit', addParticipant);
  elements.predictionForm.addEventListener('submit', addPrediction);
  elements.predictionMatch.addEventListener('change', updateMatchSummary);
  elements.exportButton.addEventListener('click', exportData);
  elements.importFile.addEventListener('change', importData);
}

loadState().then(async () => {
  await setupEvents();
  renderAll();
  renderToggleStates();
  updateMatchSummary();
});
