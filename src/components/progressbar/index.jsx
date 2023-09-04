import React from "react";

export default function ProgressBar({
  special = false,
  progress = 0,
  label = "",
  padding = 1,
  title = "",
  subtitle = "",
}) {
  return (
    <div className="">
      {special ? (
        <div className=" text-white fixed bottom-0 w-screen bg-black px-5 py-3">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className=" mt-3 border w-full max-w-[385px] bg-[#B0B0B0] rounded-3xl">
            <div
              className=" text-center text-xs font-medium leading-none text-white"
              style={{
                width: `${progress * 100 + "%"}`,
                padding: `${padding}px`,
                backgroundColor: `#FFF`,
              }}
            >
              {label}
            </div>
          </div>
        </div>
      ) : (
        <div className=" text-white fixed bottom-0 w-screen [background:linear-gradient(180deg,_rgba(17,_17,_17,_0)_0%,_rgba(17,_17,_17,_0.2)_100%)] px-5 py-3">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className=" mt-3 border w-full max-w-[385px] border-transparent bg-[#B0B0B0] rounded-3xl">
            <div
              className=" text-center text-xs font-medium leading-none text-white"
              style={{
                width: `${progress * 100 + "%"}`,
                padding: `${padding}px`,
                backgroundColor: `#FFF`,
              }}
            >
              {label}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
