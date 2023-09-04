import React from "react";

export default function ProgressBar({
  special = false,
  progress = 0,
  label = "",
  padding = 2,
  title = "",
  subtitle = "",
}) {
  return (
    <div className="">
      {special ? (
        <div className=" text-white fixed bottom-0 w-screen bg-black px-5 py-3">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className=" mt-3 border border-[#B0B0B0] w-full max-w-[385px] bg-[#B0B0B0] rounded-3xl">
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
        <div className=" fixed bottom-5 border border-[#B0B0B0] w-full max-w-[385px] bg-[#B0B0B0] rounded-3xl">
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
      )}
    </div>

  );
}
