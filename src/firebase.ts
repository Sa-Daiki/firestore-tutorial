// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCifYoXvPrQY-MQI30LccpGphZu_T-cexY",
  authDomain: "fir-tutorial-100e5.firebaseapp.com",
  projectId: "fir-tutorial-100e5",
  storageBucket: "fir-tutorial-100e5.appspot.com",
  messagingSenderId: "301616120031",
  appId: "1:301616120031:web:eaac23fa52725dba95296a",
  measurementId: "G-CMWX2TR4YW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
