/* ==========================================
   SUPABASE CONFIG
========================================== */

const SUPABASE_URL =
    "https://ykcbdmdqzeonodemcavc.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_yhzQvFqLaMw861azeWeBSQ_iDUy70Jg";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

/* ==========================================
   FIREBASE CONFIG
========================================== */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyB0Trr4efCMBUW7mupdjWIIdOFiL4zSK7k",

    authDomain: "finops-ai-1388d.firebaseapp.com",

    projectId: "finops-ai-1388d",

    storageBucket:
        "finops-ai-1388d.firebasestorage.app",

    messagingSenderId: "216271734584",

    appId:
        "1:216271734584:web:137af68ef5cfe8d7d1e3cd",

    measurementId: "G-9K7F5BKV5L"
};

/* ==========================================
   INITIALIZE FIREBASE
========================================== */

const firebaseApp =
    initializeApp(firebaseConfig);

const auth =
    getAuth(firebaseApp);

/* ==========================================
   GLOBAL VARIABLES
========================================== */

window.supabaseClient = supabaseClient;
window.firebaseAuth = auth;
