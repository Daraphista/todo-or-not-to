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

export { handleSignUp };

// TODO move sign out functionality here
