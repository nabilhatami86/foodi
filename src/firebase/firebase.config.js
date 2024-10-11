// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFtz3YxSJi4pknfIdwMFwnpB09G3pNN1s",
  authDomain: "fir-foodi-client-7da3f.firebaseapp.com",
  projectId: "fir-foodi-client-7da3f",
  storageBucket: "fir-foodi-client-7da3f.appspot.com",
  messagingSenderId: "234916792536",
  appId: "1:234916792536:web:3d2acb0686592ee9d86fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app