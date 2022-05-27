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

handleSignOut(logOutButton);

// Get user data when signed in

import { onAuthStateChanged } from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";
import { database, auth } from "./firebase";

const getContainers = (id) => {
  const collectionQuery = query(
    collection(database, `user-data/${id}/containers`)
  );
  onSnapshot(collectionQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    getContainers(user.uid);
  } else {
    console.log("user signed out");
  }
});

// Set new user data when signed in

const setNewUserData = (user) => {
  // set document using user id as it's id
  setDoc(doc(database, "user-data", user.uid), {
    email: user.email,
  });

  // set containers collection in user document
  setDoc(doc(database, `user-data/${user.uid}/containers`, "inbox"), {
    title: "inbox",
  });
  setDoc(doc(database, `user-data/${user.uid}/containers`, "today"), {
    title: "today",
  });
  setDoc(doc(database, `user-data/${user.uid}/containers`, "projects"), {
    title: "projects",
  });
};

import { doc, getDoc, setDoc } from "firebase/firestore";

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
