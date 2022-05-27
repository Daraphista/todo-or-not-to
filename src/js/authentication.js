// move sign in functionality here

import { signIn } from "./firebase";

const handleSignIn = (signInForm, emailInput, passwordInput) => {
  
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    signIn(email, password);
  });
}

export { handleSignIn };


// TODO move sign up functionality here

// TODO move sign out functionality here