// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBrVlgV70y-qRp1VcFCpjnFBH4E_PTnXGc",
//   authDomain: "car-service-app-98501.firebaseapp.com",
//   projectId: "car-service-app-98501",
//   storageBucket: "car-service-app-98501.appspot.com",
//   messagingSenderId: "451041379997",
//   appId: "1:451041379997:web:60503c6103dc27287a3674",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlq-3Qd1XRdGS60CQTUr8RPV2S5AId_rI",
  authDomain: "car-service-app-recap.firebaseapp.com",
  projectId: "car-service-app-recap",
  storageBucket: "car-service-app-recap.appspot.com",
  messagingSenderId: "818368440967",
  appId: "1:818368440967:web:d3fea5520299e31f45a622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
