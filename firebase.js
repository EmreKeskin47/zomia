// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMAzNM4hr5fsd1lwjmPdHnEc7oye5Xsc",
  authDomain: "zomia-dev.firebaseapp.com",
  projectId: "zomia-dev",
  storageBucket: "zomia-dev.appspot.com",
  messagingSenderId: "1060559309732",
  appId: "1:1060559309732:web:538600295a354b0076cf31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const db = getFirestore();

export const auth = getAuth(app);
export default app;
