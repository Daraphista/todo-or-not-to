import { signIn } from "./firebase";
import { createUser } from "./firebase";
import { signOut, getAuth } from "firebase/auth";

// Authentication module object

const Authentication = (() => {
  // move sign in functionality here

  const handleSignIn = (signInForm, emailInput, passwordInput) => {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value;
      const password = passwordInput.value;

      signIn(email, password);
    });
  };

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

  const showForm = (authenticationElements) => {
    const authenticationDiv = authenticationElements.authenticationDiv;

    authenticationDiv.classList.remove("hidden");
    authenticationDiv.classList.add("flex");
  };

  const hideForm = (authenticationElements) => {
    authenticationElements.authenticationDiv.style.opacity = "0";
    setTimeout(() => {
      authenticationElements.authenticationDiv.classList.add("hidden");
      authenticationElements.authenticationDiv.classList.remove("flex");
    }, 1000)
  };

  const changeForm = () => {};

  return { showForm, hideForm, changeForm };
})();

export default Authentication;
