import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkkQhfT5HbB2nt3NWYhyQChY-kDfu0a8Q",
  authDomain: "value-c71b4.firebaseapp.com",
  projectId: "value-c71b4",
  storageBucket: "value-c71b4.appspot.com",
  messagingSenderId: "702873906229",
  appId: "1:702873906229:web:4e6e52956e038e825c157c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);