// Firebase CDN loaders
const firebaseAppScript = document.createElement("script");
firebaseAppScript.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js";
document.head.appendChild(firebaseAppScript);

const firebaseAuthScript = document.createElement("script");
firebaseAuthScript.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js";
document.head.appendChild(firebaseAuthScript);

const firebaseDbScript = document.createElement("script");
firebaseDbScript.src = "https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js";
document.head.appendChild(firebaseDbScript);

firebaseDbScript.onload = () => {

  const firebaseConfig = {
    apiKey: "PASTE_YOUR_KEY",
    authDomain: "PASTE_YOUR_DOMAIN",
    databaseURL: "PASTE_YOUR_DB",
    projectId: "PASTE_YOUR_PROJECT",
    storageBucket: "PASTE_YOUR_BUCKET",
    messagingSenderId: "PASTE_YOUR_SENDER",
    appId: "PASTE_YOUR_APPID"
  };

  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.database();

  console.log("✅ Firebase connected successfully");
};
