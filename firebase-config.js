// ─────────────────────────────────────────────
//  TOUSSEN — Firebase Config
//  Compartido entre index.html y admin.html
// ─────────────────────────────────────────────

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDluOazVJb-op1_qTWKZsKgGnYO52lWu4k",
  authDomain: "toussen.firebaseapp.com",
  projectId: "toussen",
  storageBucket: "toussen.firebasestorage.app",
  messagingSenderId: "135428395325",
  appId: "1:135428395325:web:ac7c670341b7c587e9b554",
  measurementId: "G-Y5QCWSS8CH"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
