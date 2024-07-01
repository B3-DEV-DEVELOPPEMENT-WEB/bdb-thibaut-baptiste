// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUN2Wo72cQr9FP5E5HMsV9D76gRMPtQb8",
    authDomain: "woooowbdb.firebaseapp.com",
    projectId: "woooowbdb",
    storageBucket: "woooowbdb.appspot.com",
    messagingSenderId: "320689363768",
    appId: "1:320689363768:web:fba93c9011cf36d84f7fcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
