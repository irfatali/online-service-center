
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXkSs8N4JH3kN8duPCPs3d8JCvKUeR6aQ",
  authDomain: "jafri-online-service-centre.firebaseapp.com",
  projectId: "jafri-online-service-centre",
  storageBucket: "jafri-online-service-centre.firebasestorage.app",
  messagingSenderId: "34665693727",
  appId: "1:34665693727:web:aeecb6cf84a1f6a20b4b2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber
};
