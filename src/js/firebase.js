// Initialize firebase in project
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJOoRvmW5p3Z0ojgH8TU3E5aQ52NRdxuw",
  authDomain: "todo-or-not-to.firebaseapp.com",
  projectId: "todo-or-not-to",
  storageBucket: "todo-or-not-to.appspot.com",
  messagingSenderId: "659746874836",
  appId: "1:659746874836:web:1c51f5af18f4b66b296241",
  measurementId: "G-N2P5G75KEE",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication in project
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { createUser };

// Initialize firestore in project
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";

const database = getFirestore(app);

let userData;

// Read and listen to user data and it's changes
const unsub = onSnapshot(
  doc(database, "user-data", "iONDlZkvsAWMD64xItJEvUpGcWp2"),
  (doc) => {
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc.data());
    userData = doc.data();
  }
);
