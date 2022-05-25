// Sign In functionality

import { signIn } from "./firebase";

const signInForm = document.querySelector(".sign-in");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector(".sign-in #email");
  const passwordInput = document.querySelector(".sign-in #password");

  const email = emailInput.value;
  const password = passwordInput.value;

  signIn(email, password);
});

// Sign Up functionality

import { createUser } from "./firebase";

const signUpForm = document.querySelector(".sign-up");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.querySelector(".sign-up #email");
  const passwordInput = document.querySelector(".sign-up #password");

  const email = emailInput.value;
  const password = passwordInput.value;

  createUser(email, password);
});

// Log out functionality

import { signOut } from "firebase/auth";

const logOutButton = document.querySelector(".logout");

logOutButton.addEventListener("click", () => {
  signOut(auth);
});

// Get user data when signed in

import { onAuthStateChanged } from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";
import { database, auth } from "./firebase";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);

    const searchQuery = query(
      collection(database, `user-data/${user.uid}/containers`)
    );
    onSnapshot(searchQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  } else {
    console.log("can't get user data");
  }
});
