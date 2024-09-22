importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-storage-compat.js");

const firebaseConfigProd = {
    apiKey: "AIzaSyAGWxqlKTss2SFE_jdq6aMLxD4EHx-E9oE",
    authDomain: "petin-prod.firebaseapp.com",
    projectId: "petin-prod",
    storageBucket: "petin-prod.appspot.com",
    messagingSenderId: "81894334028",
    appId: "1:81894334028:web:8bd3054079c6d53418dee9",
    measurementId: "G-2K1ZYNC00G"
};

const firebaseConfigDev = {
    apiKey: "AIzaSyC_wBmA-Sy9HzxJ2LSLFG7hlLcSzoXn7qE",
    authDomain: "petin-333318.firebaseapp.com",
    projectId: "petin-333318",
    storageBucket: "petin-333318.appspot.com",
    messagingSenderId: "484491527318",
    appId: "1:484491527318:web:38af7de134c56b968faeb7",
    measurementId: "G-9KSNF5RKHR"
};

firebase.initializeApp({
    apiKey: "AIzaSyC_wBmA-Sy9HzxJ2LSLFG7hlLcSzoXn7qE",
    authDomain: "petin-333318.firebaseapp.com",
    projectId: "petin-333318",
    storageBucket: "petin-333318.appspot.com",
    messagingSenderId: "484491527318",
    appId: "1:484491527318:web:38af7de134c56b968faeb7",
    measurementId: "G-9KSNF5RKHR"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});