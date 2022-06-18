import "../style/style.css";
import { onAuthStateChanged } from "firebase/auth";
import { database, auth } from "./firebase";

// decide whether to show authentication form or not

import Authentication from "./authentication";

const authenticationDiv = document.querySelector(".authentication");
const SignInElements = {
  form: document.querySelector("form.sign-in"),
  emailInput: document.querySelector("form.sign-in #email"),
  passwordInput: document.querySelector("form.sign-in #password"),
};
const SignUpElements = {
  form: document.querySelector("form.sign-up"),
  emailInput: document.querySelector("form.sign-up #email"),
  passwordInput: document.querySelector("form.sign-up #password"),
};
const FormPicker = {
  signInPickers: Array.from(document.querySelectorAll(".picker .sign-in")),
  signUpPickers: Array.from(document.querySelectorAll(".picker .sign-up")),
};

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // if there is no user...
    Authentication.showAuthenticationPopup(
      authenticationDiv,
      SignInElements,
      SignUpElements,
      FormPicker
    );
  } else {
    // else if user is signed in...
    Authentication.hideAuthenticationPopup(authenticationDiv);
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
