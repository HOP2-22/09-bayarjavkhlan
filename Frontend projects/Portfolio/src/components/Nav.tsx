import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FaPaw } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { Provider } from "../provider/DataContext";
import Hamburger from "./Hamburger";

const Nav = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useContext<any>(Provider);

  const header = [
    { title: "Works", link: "works" },
    { title: "Posts", link: "posts" },
    { title: "Uses", link: "uses" },
    { title: "Sources", link: "sources" },
  ];

  const [button, setButton] = useState<boolean[]>(new Array(4).fill(false));
  const [buttonIndex, setButtonIndex] = useState<number>(10);

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
          <div
            className="flex gap-2 items-center group cursor-pointer"
            onClick={() => {
              navigate("/");
              setButton(new Array(4).fill(false));
            }}
          >
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
              Batgerel Bayrjavkhlan
            </div>
          </div>
          <div className="md:flex hidden">
            {header.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`${
                    button[index] ? "bg-[#88CCCA] rounded text-gray-800" : ""
                  } flex items-center cursor-pointer py-[5px] px-[10px] font-light`}
                  onClick={() => {
                    setButtonIndex(index);
                    navigate(item?.link);
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
                      button[index]
                        ? "text-gray-800 hover:underline"
                        : theme
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
          <Hamburger
            hamburger={hamburger}
            setHamburger={setHamburger}
            header={header}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
