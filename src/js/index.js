import "../style/style.css";

// Sign In functionality

import { handleSignIn } from "./authentication";

const signInForm = {
  signInForm: document.querySelector(".sign-in"),
  emailInput: document.querySelector(".sign-in #email"),
  passwordInput: document.querySelector(".sign-in #password"),
};

handleSignIn(
  signInForm.signInForm,
  signInForm.emailInput,
  signInForm.passwordInput
);

// Sign Up functionality

import { handleSignUp } from "./authentication";

const signUpForm = {
  signUpForm: document.querySelector(".sign-up"),
  emailInput: document.querySelector(".sign-up #email"),
  passwordInput: document.querySelector(".sign-up #password"),
};

handleSignUp(
  signUpForm.signUpForm,
  signUpForm.emailInput,
  signUpForm.passwordInput
);

// Log out functionality

import { handleSignOut } from "./authentication";

const logOutButton = document.querySelector(".logout");

// handleSignOut(logOutButton);

// Get user data when signed in

import { onAuthStateChanged } from "firebase/auth";
import { database, auth } from "./firebase";
import { getUserData } from "./user-data";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);

    const containersPath = `user-data/${user.uid}/containers`;
    const logContainers = (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };

    getUserData(database, containersPath, logContainers);
  } else {
    console.log("user signed out");
  }
});

// Set new user data when signed in

import { doc, getDoc } from "firebase/firestore";
import { setNewUserData } from "./user-data";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(database, "user-data", user.uid);
    const document = await getDoc(docRef);
    if (document.data()) {
      console.log("user has data", document.data());
    } else {
      console.log("user hasn't any data");

      setNewUserData(user);
    }
  }
});
