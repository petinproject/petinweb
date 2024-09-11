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

firebase.initializeApp(firebaseConfigProd);
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});