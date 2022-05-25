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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
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

const signOutUser = (unsub) => {
  signOut(auth).then(() => {
    unsub();
  })
}

export { createUser, signIn, signOutUser };

// Initialize firestore in project
import { getFirestore } from "firebase/firestore";

const database = getFirestore(app);

export { database };
