// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrVlgV70y-qRp1VcFCpjnFBH4E_PTnXGc",
  authDomain: "car-service-app-98501.firebaseapp.com",
  projectId: "car-service-app-98501",
  storageBucket: "car-service-app-98501.appspot.com",
  messagingSenderId: "451041379997",
  appId: "1:451041379997:web:60503c6103dc27287a3674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
