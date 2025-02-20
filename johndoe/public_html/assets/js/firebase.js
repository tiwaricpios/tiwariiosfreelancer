// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6oiQTbKAihl9c0L_mkQNvQj_zdWbRarM",
  authDomain: "portfolio-9de4e.firebaseapp.com",
  projectId: "portfolio-9de4e",
  storageBucket: "portfolio-9de4e.firebasestorage.app",
  messagingSenderId: "1017439623109",
  appId: "1:1017439623109:web:7e34c0ece946ecc5e0ddac",
  measurementId: "G-SY9ENW1Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized:", app);
