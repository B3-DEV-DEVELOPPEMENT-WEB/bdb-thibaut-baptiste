// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpyzSspkRHykU511oNXD5O2quiWDEOfbk",
    authDomain: "bdbgroupe1.firebaseapp.com",
    projectId: "bdbgroupe1",
    storageBucket: "bdbgroupe1.appspot.com",
    messagingSenderId: "364814758757",
    appId: "1:364814758757:web:072e9703483a785e5f678c",
    measurementId: "G-TXF0V65T21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
