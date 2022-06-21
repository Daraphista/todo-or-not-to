const Background = () => {
  return (
    <div className="background grid grid-cols-[448px_448px] absolute z-[-1]">
      <img src="./assets/images/blob-3.svg" className="scale-0 animate-[grow_250ms] animation-fill-forwards" alt="blob 3" />
      <div className="top-left-blobs relative">
        <img src="./assets/images/blob-4.svg" className="scale-0 animate-[grow_250ms_200ms] animation-fill-forwards"
          alt="blob 4" />
        <img src={blob1}
          className="scale-0 animate-[grow_250ms_400ms] animation-fill-forwards absolute bottom-[-10%]" alt="blob 1" />
        <img src="./assets/images/blob-2.svg"
          className="scale-0 animate-[grow_250ms_500ms] animation-fill-forwards absolute right-[40%] bottom-[-10%]"
          alt="blob 2" />
      </div>
      <img src="./assets/images/blob-5.svg" className="scale-0 animate-[grow_250ms_300ms] animation-fill-forwards"
        alt="blob 5" />
      <img src="./assets/images/blob-6.svg" className="scale-0 animate-[grow_250ms_100ms] animation-fill-forwards"
        alt="blob 6" />
    </div>
  )
}

const AuthenticationPopup = () => {
  return (
    <div className="authentication fixed hidden h-full w-full items-center justify-center bg-[#2C2B2B] text-white transition-opacity duration-200"></div>
  );
};
