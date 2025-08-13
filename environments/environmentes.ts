// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGPUQNFgWi2gAMACf31oV_-g8ysut0Nw",
  authDomain: "riggle-c3ce7.firebaseapp.com",
  projectId: "riggle-c3ce7",
  storageBucket: "riggle-c3ce7.firebasestorage.app",
  messagingSenderId: "481154277810",
  appId: "1:481154277810:web:dae6e32cffc6f383e484ab",
  measurementId: "G-EPH0X8W3CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);