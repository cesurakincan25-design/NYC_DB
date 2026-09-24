/**
 * config.js — NYC_DB
 */
window.RPCONFIG = {
  tableName:     'nyc_db',
  storageKey:    'nyc_db_v10',
  storageLegacy: 'nyc_db_v8',
  sfxKey:        'nyc_sfx_muted',
  langKey:       'nyc_lang',
  themeKey:      'nyc_theme',
  playerKey:     'nyc_active_player',
  bootMode:      'splash',
  universe:      'NYC Cyber-Noir RP',
  colorPhotos:   false,

  players: [
    { id: 'eren',  name: 'Eren',  role: 'admin', color: '#00a2ff' },
    { id: 'melih', name: 'Melih', role: 'admin', color: '#ff2a2a' },
    { id: 'tuna',  name: 'Tuna',  role: 'admin', color: '#00ff66' },
    { id: 'nes',   name: 'Nes',   role: 'admin', color: '#a855f7' },
    { id: 'aley',  name: 'Aley',  role: 'admin', color: '#f59e0b' }
  ],

  firebaseConfig: {
    apiKey:            "AIzaSyCk5-f6fPp8GX7Ce_z0M74y_ai1017t4Yc",
    authDomain:        "roleplay-databases.firebaseapp.com",
    projectId:         "roleplay-databases",
    storageBucket:     "roleplay-databases.firebasestorage.app",
    messagingSenderId: "265831449807",
    appId:             "1:265831449807:web:d5eeb3f114e13dd5f8e3ba"
  },

  seedDB: {
    metadata: { version: '8.5', universe: 'NYC Cyber-Noir RP', lastUpdated: new Date().toISOString() },
    organizations: [], characters: [], vehicles: [], properties: [],
    equipments: [], contracts: [], cases: [], logs: []
  }
};

// Firebase init - SDK hazır olunca başlat
function _initFirebase() {
  if(window._fbApp) return;
  var cfg = window.RPCONFIG.firebaseConfig;
  var { initializeApp } = window._fbSDK;
  window._fbApp = initializeApp(cfg);
  window._fbDb  = window._fbFirestore.getFirestore(window._fbApp);
  console.log('[Firebase] NYC_DB bağlantısı hazır');
}

if(window._fbFirestoreReady) {
  _initFirebase();
} else {
  window.addEventListener('firebase-ready', _initFirebase, { once: true });
}
