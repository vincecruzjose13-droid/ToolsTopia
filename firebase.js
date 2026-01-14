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
  apiKey: "AIzaSyDu_99pNy0ZSegAEPtuD5u3TjyrNzcjKEE",
  authDomain: "toolstopia.firebaseapp.com",
  databaseURL: "https://toolstopia-default-rtdb.firebaseio.com",
  projectId: "toolstopia",
  storageBucket: "toolstopia.firebasestorage.app",
  messagingSenderId: "922783777380",
  appId: "1:922783777380:web:46ca4a719181a0fb83d571",
  measurementId: "G-BHH5WBXY5M"
};
  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.database();

  console.log("✅ Firebase connected successfully");
};
