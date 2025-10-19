// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // load the API key from the environment (.env). For Create React App use REACT_APP_ prefix.
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-1d953.firebaseapp.com",
  projectId: "netflixgpt-1d953",
  storageBucket: "netflixgpt-1d953.appspot.com",
  messagingSenderId: "560686352672",
  appId: "1:560686352672:web:99351bfaf14a19f8a26f45",
  measurementId: "G-VLDLNKVDJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();