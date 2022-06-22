import blob1 from "./assets/images/blob-1.svg";
import blob2 from "./assets/images/blob-2.svg";
import blob3 from "./assets/images/blob-3.svg";
import blob4 from "./assets/images/blob-4.svg";
import blob5 from "./assets/images/blob-5.svg";
import blob6 from "./assets/images/blob-6.svg";

import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./firebase"
import { useState } from "react";

const AuthenticationPopup = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className={`authentication fixed ${user ? "hidden" : "flex"} h-full w-full items-center justify-center bg-[#2C2B2B] text-white transition-opacity duration-200`}>
      <Background />
      <SignInForm />
    </div>
  );
};

export default AuthenticationPopup

const Background = () => {
  return (
    <div className="background grid grid-cols-[448px_448px] absolute z-[-1]">
      <img src={blob3} className="scale-0 animate-[grow_250ms] fill-mode-forwards" alt="blob 3" />
      <div className="top-left-blobs relative">
        <img src={blob4} className="scale-0 animate-[grow_250ms_200ms] fill-mode-forwards"
          alt="blob 4" />
        <img src={blob1}
          className="scale-0 animate-[grow_250ms_400ms] fill-mode-forwards absolute bottom-[-10%]" alt="blob 1" />
        <img src={blob2}
          className="scale-0 animate-[grow_250ms_500ms] fill-mode-forwards absolute right-[40%] bottom-[-10%]"
          alt="blob 2" />
      </div>
      <img src={blob5} className="scale-0 animate-[grow_250ms_300ms] fill-mode-forwards"
        alt="blob 5" />
      <img src={blob6} className="scale-0 animate-[grow_250ms_100ms] fill-mode-forwards"
        alt="blob 6" />
    </div>
  )
}

const SignInForm = () => {
  const [SignInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="sign-in shadow-lg scale-0 backdrop-blur-lg bg-white/[0.05] hidden flex-col gap-8 text-center min-w-[25rem] rounded-xl px-8 py-9 animate-[grow_250ms_600ms] animation-fill-forwards">
      <h1 className="text-4xl">Sign In</h1>
      <div className="picker flex">
        <button className="sign-in flex-1 bg-[#393939]/[0.8] rounded-l-md py-2" type="button">Sign In</button>
        <button className="sign-up flex-1 bg-[#2C2B2B]/[0.8] rounded-r-md py-2" type="button">Sign Up</button>
      </div>
      <label>
        <input type="email" id="email" placeholder="Email Address"
          className="w-full bg-transparent rounded-md py-2 px-3 border-neutral-300 border placeholder:text-neutral-300" />
      </label>
      <label>
        <input type="password" id="password" placeholder="Password"
          className="w-full bg-transparent rounded-md py-2 px-3 border-neutral-300 border placeholder:text-neutral-300" />
      </label>
      <button className="sign-in flex-1 bg-[#393939]/[0.8] rounded-md py-2">Sign In</button>
      <p className="picker text-neutral-300">
        Not a member yet? <a href="" className="sign-up text-white">Sign up now</a>
      </p>
    </form>
  )
}