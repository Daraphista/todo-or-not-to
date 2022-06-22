import blob1 from "./assets/images/blob-1.svg";
import blob2 from "./assets/images/blob-2.svg";
import blob3 from "./assets/images/blob-3.svg";
import blob4 from "./assets/images/blob-4.svg";
import blob5 from "./assets/images/blob-5.svg";
import blob6 from "./assets/images/blob-6.svg";

import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useState } from "react";

const AuthenticationPopup = () => {
  const [user, loading, error] = useAuthState(auth);

  const [signInFormIsShown, setSignInFormIsShown] = useState(true);
  const [signUpFormIsShown, setSignUpFormIsShown] = useState(false);

  return (
    <div
      className={`authentication fixed ${
        user ? "hidden" : "flex"
      } h-full w-full items-center justify-center bg-[#2C2B2B] text-white transition-opacity duration-200`}
    >
      <Background />
      <SignInForm signInFormIsShown={signInFormIsShown} />
      <SignUpForm signUpFormIsShown={signUpFormIsShown} />
    </div>
  );
};

export default AuthenticationPopup;

const Background = () => {
  return (
    <div className="background absolute z-[-1] grid grid-cols-[448px_448px]">
      <img
        src={blob3}
        className="scale-0 animate-[grow_250ms] fill-mode-forwards"
        alt="blob 3"
      />
      <div className="top-left-blobs relative">
        <img
          src={blob4}
          className="scale-0 animate-[grow_250ms_200ms] fill-mode-forwards"
          alt="blob 4"
        />
        <img
          src={blob1}
          className="absolute bottom-[-10%] scale-0 animate-[grow_250ms_400ms] fill-mode-forwards"
          alt="blob 1"
        />
        <img
          src={blob2}
          className="absolute right-[40%] bottom-[-10%] scale-0 animate-[grow_250ms_500ms] fill-mode-forwards"
          alt="blob 2"
        />
      </div>
      <img
        src={blob5}
        className="scale-0 animate-[grow_250ms_300ms] fill-mode-forwards"
        alt="blob 5"
      />
      <img
        src={blob6}
        className="scale-0 animate-[grow_250ms_100ms] fill-mode-forwards"
        alt="blob 6"
      />
    </div>
  );
};

const SignInForm = (props) => {
  const { signInFormIsShown } = props;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className={`sign-in ${
        signInFormIsShown ? "flex" : "hidden"
      } min-w-[25rem] scale-0 animate-[grow_250ms_600ms] flex-col gap-8 rounded-xl bg-white/[0.05] px-8 py-9 text-center shadow-lg backdrop-blur-lg fill-mode-forwards`}
      onSubmit={(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password);
      }}
    >
      <h1 className="text-4xl">Sign In</h1>
      <div className="picker flex">
        <button
          className="sign-in flex-1 rounded-l-md bg-[#393939]/[0.8] py-2"
          type="button"
        >
          Sign In
        </button>
        <button
          className="sign-up flex-1 rounded-r-md bg-[#2C2B2B]/[0.8] py-2"
          type="button"
        >
          Sign Up
        </button>
      </div>
      <label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 placeholder:text-neutral-300"
          onInput={(e) => setEmail(e.value)}
        />
      </label>
      <label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 placeholder:text-neutral-300"
          onInput={(e) => setPassword(e.value)}
        />
      </label>
      <button className="sign-in flex-1 rounded-md bg-[#393939]/[0.8] py-2">
        Sign In
      </button>
      <p className="picker text-neutral-300">
        Not a member yet?{" "}
        <a href="" className="sign-up text-white">
          Sign up now
        </a>
      </p>
    </form>
  );
};

const SignUpForm = (props) => {
  const { signUpFormIsShown } = props;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="sign-up hidden min-w-[25rem] scale-0 animate-[grow_250ms_600ms] flex-col gap-8 rounded-xl bg-white/[0.05] px-8 py-9 text-center shadow-lg backdrop-blur-lg fill-mode-forwards"
      onSubmit={(e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
      }}
    >
      <h1 className="text-4xl">Sign In</h1>
      <div className="picker flex">
        <button
          className="sign-in flex-1 rounded-l-md bg-[#2C2B2B]/[0.8] py-2"
          type="button"
        >
          Sign In
        </button>
        <button
          className="sign-up flex-1 rounded-r-md bg-[#393939]/[0.8] py-2"
          type="button"
        >
          Sign Up
        </button>
      </div>
      <label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 placeholder:text-neutral-300"
          onInput={(e) => setEmail(e.value)}
        />
      </label>
      <label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 placeholder:text-neutral-300"
          onInput={(e) => setPassword(e.value)}
        />
      </label>
      <label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          className="w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 placeholder:text-neutral-300"
        />
      </label>
      <button className="sign-up flex-1 rounded-md bg-[#393939]/[0.8] py-2">
        Sign Up
      </button>
      <p className="picker text-neutral-300">
        Already have an account?{" "}
        <a href="" className="sign-in text-white">
          Sign in now
        </a>
      </p>
    </form>
  );
};
