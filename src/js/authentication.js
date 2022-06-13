// move sign in functionality here

import { signIn } from "./firebase";

const handleSignIn = (signInForm, emailInput, passwordInput) => {
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    signIn(email, password);
  });
};

export { handleSignIn };

// move sign up functionality here

import { createUser } from "./firebase";

const handleSignUp = (signUpForm, emailInput, passwordInput) => {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    createUser(email, password);
  });
};

import { signOut, getAuth } from "firebase/auth";

// Authentication module object

const Authentication = (() => {
  // move sign out functionality here
  
  const handleSignOut = (logOutButton) => {
    logOutButton.addEventListener("click", () => {
      signOut(getAuth());
    });
  };

  const showForm = () => {};
  
  const hideForm = () => {};

  const changeForm = () => {};

  return { showForm, hideForm, changeForm };
})();
