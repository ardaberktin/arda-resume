// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ToDO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjXaiyCxVC_Igw-noQermhaH5yy-c03N0",
  authDomain: "arda-s-portfolio.firebaseapp.com",
  projectId: "arda-s-portfolio",
  storageBucket: "arda-s-portfolio.appspot.com",
  messagingSenderId: "1024967409409",
  appId: "1:1024967409409:web:a8eebf15d1bb9293716500",
  measurementId: "G-P7Z398R6GK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
