// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCVCXNCBL1LiB9X7sNojkalMhu9jFwU_fI",
  // authDomain: "khanapakyo-2ad84.firebaseapp.com",
  // projectId: "khanapakyo-2ad84",
  // storageBucket: "khanapakyo-2ad84.appspot.com",
  // messagingSenderId: "912000116379",
  // appId: "1:912000116379:web:97828f9b6c795cf63c483e",
  // measurementId: "G-FYGL1RBVCN"


  apikey:"AIzaSyCVCXNCBL1LiB9X7sNojkalMhu9jFwU_fI",
  authDomain : "khanapakyo-2ad84.firebaseapp.com",
  projectID:"khanapakyo-2ad84"                                                                                                           
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
