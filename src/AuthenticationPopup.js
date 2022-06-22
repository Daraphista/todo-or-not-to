import blob1 from "./assets/images/blob-1.svg";
import blob2 from "./assets/images/blob-2.svg";
import blob3 from "./assets/images/blob-3.svg";
import blob4 from "./assets/images/blob-4.svg";
import blob5 from "./assets/images/blob-5.svg";
import blob6 from "./assets/images/blob-6.svg";

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

import { useAuthState } from "react-firebase-hooks";

const AuthenticationPopup = () => {
  return (
    <div className="authentication fixed hidden h-full w-full items-center justify-center bg-[#2C2B2B] text-white transition-opacity duration-200">
      <Background />
    </div>
  );
};

export default AuthenticationPopup