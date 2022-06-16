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

  const showForm = (formElements) => {
    const form = formElements.form;

    form.classList.remove("hidden");
    form.classList.add("flex");
  };

  const handleFormPicker = (pickerElements, signInElements, signUpElements) => {
    const signInPickers = pickerElements.signInPickers;
    const signUpPickers = pickerElements.signUpPickers;

    const signInForm = signInElements.form;
    const signUpForm = signUpElements.form;

    signInPickers.forEach((signInPicker) => {
      signInPicker.addEventListener("click", (e) => {
        e.preventDefault();

        signInForm.style.animationDelay = "0s";
        signInForm.classList.remove("hidden");
        signInForm.classList.add("flex");

        signUpForm.classList.remove("flex");
        signUpForm.classList.add("hidden");
      });
    });

    signUpPickers.forEach((signUpPicker) => {
      signUpPicker.addEventListener("click", (e) => {
        e.preventDefault();

        signUpForm.style.animationDelay = "0s";
        signUpForm.classList.remove("hidden");
        signUpForm.classList.add("flex");

        signInForm.classList.remove("flex");
        signInForm.classList.add("hidden");
      });
    });
  };

  const showAuthenticationPopup = (
    authenticationElement,
    signInElements,
    signUpElements,
    pickerElements
  ) => {
    authenticationElement.classList.remove("hidden");
    authenticationElement.classList.add("flex");

    showForm(signInElements);

    const signInForm = signInElements.form;
    const signInEmailInput = signInElements.emailInput;
    const signInPasswordInput = signInElements.passwordInput;

    handleSignIn(signInForm, signInEmailInput, signInPasswordInput);

    const signUpForm = signUpElements.form;
    const signUpEmailInput = signUpElements.emailInput;
    const signUpPasswordInput = signUpElements.passwordInput;

    handleSignUp(signUpForm, signUpEmailInput, signUpPasswordInput);

    handleFormPicker(pickerElements, signInElements, signUpElements);
  };

  const hideAuthenticationPopup = (authenticationElement) => {
    authenticationElement.style.opacity = "0";
    setTimeout(() => {
      authenticationElement.classList.add("hidden");
      authenticationElement.classList.remove("flex");
    }, 1000);
  };

  return { showAuthenticationPopup, hideAuthenticationPopup };
})();

export default Authentication;
