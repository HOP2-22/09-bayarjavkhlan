import React, { useEffect, useState } from "react";
import { FaPaw } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Nav = ({ theme, setTheme }: any) => {
  const header = [
    { title: "Works" },
    { title: "Posts" },
    { title: "Uses" },
    { title: "Sources" },
  ];

  const [button, setButton] = useState<boolean[]>(new Array(4).fill(false));
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  const [hamburger, setHamburger] = useState<boolean>(false);

  useEffect(() => {
    let newArray: boolean[] = new Array(4).fill(false);
    newArray[buttonIndex] = true;
    setButton(newArray);
  }, [buttonIndex]);

  return (
    <div
      className={`${
        !theme ? "bg-[#f4ede4]" : "bg-main"
      } w-full flex justify-center transition fixed`}
    >
      <div className="w-full md:w-[768px] flex justify-between py-3">
        <div className="flex items-center gap-8">
          <div className="flex gap-2 items-center group">
            <FaPaw
              className={`${
                theme ? "text-white" : "text-gray-900"
              }  text-2xl -rotate-[30deg] group-hover:rotate-0 transition-transform`}
            />
            <div
              className={`${
                theme ? "text-white" : "text-gray-900"
              } text-lg font-medium`}
            >
              Takuya Matsuyama
            </div>
          </div>
          <div className="md:flex hidden gap-4">
            {header.map((item: any, index: number) => {
              return (
                <div
                  className="flex items-center"
                  onClick={() => {
                    setButtonIndex(index);
                  }}
                >
                  {index === 3 && (
                    <div>
                      <AiFillGithub
                        className={`${theme ? "text-white" : "text-gray-800"} `}
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
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div
              className={`${
                theme ? "-translate-y-20" : "translate-y-0"
              } w-full h-full flex items-center justify-center rounded-lg transition duration-400 bg-[#fbd28c] absolute`}
              onClick={() => {
                setTheme(!theme);
                setHamburger(false);
              }}
            >
              <BsFillSunFill className="text-[#1c212d]" />
            </div>
            <div
              className={`${
                theme ? "translate-y-0" : "-translate-y-20"
              } w-full h-full flex items-center justify-center rounded-lg transition duration-700 bg-indigo-400 absolute`}
              onClick={() => {
                setTheme(!theme);
                setHamburger(false);
              }}
            >
              <BsFillMoonFill className="text-white" />
            </div>
          </div>
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
                      theme
                        ? "hover:decoration-gray-900"
                        : "hover:decoration-white"
                    } flex items-center cursor-pointer hover:underline`}
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
