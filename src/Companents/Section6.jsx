import React from "react";

function Section6() {
  return (
    <div className=" bg-[#4A2B33] text-[#D27487] p-[100px] items-center flex flex-wrap justify-around">
      <div className="md:w-[50%]">
        <h1 className="font-mono my-10 xs:text-[30px] md:text-[50px]  text-center">
          Award winning cafe and bar.
        </h1>
      </div>
      <div className="md:w-[50%]">
        <p className=" md:text-[20px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <span className="hidden md:flex">
          aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Section6;
