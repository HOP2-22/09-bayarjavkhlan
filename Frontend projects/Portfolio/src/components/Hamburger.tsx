import React, { useContext } from "react";
import { Provider } from "../provider/DataContext";

import { AiFillGithub } from "react-icons/ai";

const Hamburger = ({ hamburger, setHamburger, header }: any) => {
  const { setTheme, theme } = useContext<any>(Provider);

  return (
    <>
      <div
        className={`${
          theme ? "border-white" : "border-gray-900"
        } relative md:hidden flex flex-col border  rounded gap-1 items-center justify-center w-8 h-8`}
        onClick={() => {
          setHamburger(!hamburger);
        }}
      >
        <div
          className={`${hamburger ? "rotate-45 translate-y-[3px]" : ""}  ${
            theme ? "bg-white" : "bg-gray-900"
          } h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${hamburger ? "hidden" : "block"} ${
            theme ? "bg-white" : "bg-gray-900"
          } h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${hamburger ? "-rotate-45 -translate-y-[3px]" : ""} ${
            theme ? "bg-white" : "bg-gray-900"
          } h-[1.5px] rounded bg-white w-[60%] transition duration-200`}
        ></div>
        <div
          className={`${theme ? "bg-[#2d3748]" : "bg-white"} ${
            hamburger ? "flex" : "hidden"
          } absolute w-[180px] top-[43px] rounded-lg right-0 border p-4  flex-col gap-2`}
        >
          {header.map((item: any, index: number) => {
            return (
              <div
                className={`${
                  theme ? "hover:decoration-gray-900" : "hover:decoration-white"
                } flex items-center cursor-pointer hover:underline`}
                key={index}
              >
                {index === 3 && (
                  <div>
                    <AiFillGithub
                      className={`${theme ? "text-white" : "text-black"} `}
                    />
                  </div>
                )}
                <p
                  className={`${
                    theme
                      ? "text-white hover:decoration-white"
                      : "text-gray-800 hover:decoration-gray-8000"
                  } hover:underline underline-offset-4`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hamburger;
