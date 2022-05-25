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

