// ============================================
// 🔥 FIREBASE CONFIGURATION
// ============================================
// INSTRUCCIONES PARA CONFIGURAR:
// 1. Andá a https://console.firebase.google.com
// 2. Creá un proyecto nuevo (ej: "prode-mundial-2026")
// 3. En Authentication → Sign-in method → Habilitá "Anonymous"
// 4. En Realtime Database → Create Database → Start in test mode
// 5. En Project Settings ⚙️ → Tu app web → Copiá el firebaseConfig
// 6. Reemplazá los valores de abajo con los tuyos
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyAyo5HIgWHqXN6seOzBYvjhWNMT7pGsU6Q",
  authDomain: "prode-f1d05.firebaseapp.com",
  databaseURL: "https://prode-f1d05-default-rtdb.firebaseio.com",
  projectId: "prode-f1d05",
  storageBucket: "prode-f1d05.firebasestorage.app",
  messagingSenderId: "875310508776",
  appId: "1:875310508776:web:c67182cb470d3b4bb1f75d",
  measurementId: "G-DVTLSXDQDY"
};

// ---- Initialize Firebase ----
let fbApp, fbAuth, fbDB;
let fbReady = false;
let fbUser = null;

try {
  fbApp = firebase.initializeApp(firebaseConfig);
  fbAuth = firebase.auth();
  fbDB = firebase.database();

  fbAuth.signInAnonymously()
    .then((cred) => {
      fbUser = cred.user;
      fbReady = true;
      console.log('🔥 Firebase listo. UID:', fbUser.uid);
      if (typeof onFirebaseReady === 'function') onFirebaseReady();
    })
    .catch((err) => {
      console.warn('⚠️ Firebase auth error:', err.message);
      console.log('La app funciona en modo local sin torneos.');
    });
} catch (e) {
  console.warn('⚠️ Firebase no configurado. La app funciona en modo local.');
  console.log('Para habilitar torneos, configurá firebase-config.js');
}

// ---- Firebase Helper Functions ----
function fbWrite(path, data) {
  if (!fbReady) return Promise.reject('Firebase not ready');
  return fbDB.ref(path).set(data);
}

function fbUpdate(path, data) {
  if (!fbReady) return Promise.reject('Firebase not ready');
  return fbDB.ref(path).update(data);
}

function fbRead(path) {
  if (!fbReady) return Promise.reject('Firebase not ready');
  return fbDB.ref(path).once('value').then(s => s.val());
}

function fbListen(path, callback) {
  if (!fbReady) return null;
  const r = fbDB.ref(path);
  r.on('value', (s) => callback(s.val()));
  return r;
}

function fbStopListening(ref) {
  if (ref) ref.off();
}

function fbPush(path, data) {
  if (!fbReady) return Promise.reject('Firebase not ready');
  return fbDB.ref(path).push(data);
}
