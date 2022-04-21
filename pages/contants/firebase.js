// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC_o-oHrSb6foYEL6hO_YDfK9KIFZA18M8",
  authDomain: "zomia-client.firebaseapp.com",
  projectId: "zomia-client",
  storageBucket: "zomia-client.appspot.com",
  messagingSenderId: "237132421567",
  appId: "1:237132421567:web:fef867a8957e6014ce290a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
