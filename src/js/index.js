import "../style/style.css";
import { onAuthStateChanged } from "firebase/auth";
import { database, auth } from "./firebase";

// decide whether to show authentication form or not

import Authentication from "./authentication";

const authenticationDiv = document.querySelector(".authentication");
const signInElements = {
  form: document.querySelector("form.sign-in"),
  emailInput: document.querySelector("form.sign-in #email"),
  passwordInput: document.querySelector("form.sign-in #password"),
};
const signUpElements = {
  form: document.querySelector("form.sign-up"),
  emailInput: document.querySelector("form.sign-up #email"),
  passwordInput: document.querySelector("form.sign-up #password"),
};
const formPicker = {
  signInPickers: Array.from(document.querySelectorAll(".picker .sign-in")),
  signUpPickers: Array.from(document.querySelectorAll(".picker .sign-up")),
};

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // if there is no user...
    Authentication.showAuthenticationPopup(
      authenticationDiv,
      signInElements,
      signUpElements,
      formPicker
    );
  } else {
    // else if user is signed in...
    Authentication.hideAuthenticationPopup(authenticationDiv);
  }
});

// Get user data when signed in

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
