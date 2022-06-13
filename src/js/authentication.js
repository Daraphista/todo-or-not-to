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

import { createUser } from "./firebase";

import { signOut, getAuth } from "firebase/auth";

// Authentication module object

const Authentication = (() => {
  // move sign up functionality here
  
  const handleSignUp = (signUpForm, emailInput, passwordInput) => {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const email = emailInput.value;
      const password = passwordInput.value;
      
      createUser(email, password);
    });
  };
  
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
