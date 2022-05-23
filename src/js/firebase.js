import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJOoRvmW5p3Z0ojgH8TU3E5aQ52NRdxuw",
  authDomain: "todo-or-not-to.firebaseapp.com",
  projectId: "todo-or-not-to",
  storageBucket: "todo-or-not-to.appspot.com",
  messagingSenderId: "659746874836",
  appId: "1:659746874836:web:1c51f5af18f4b66b296241",
  measurementId: "G-N2P5G75KEE"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };