import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HeaderTitles = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/Products",
    },
    {
      name: "Services",
      link: "/Services",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
    {
      name: "Log in",
      link: "/LogIn",
    },
  ];
  console.log(offset);
  return (
    <div
      className={`w-screen h-20 z-10 fixed drop-shadow-lg ${
        offset <= window.innerHeight ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-between w-full lg:px-28 md:px-14 px-10">
          <h1
            className={`text-3xl font-bold mr-4 sm:text:text-4xl flex items-center ${
              offset <= window.innerHeight ? "text-white" : "text-gray-800"
            }`}
          >
            Team<div className=" w-3 h-3 bg-cyan-400 mt-2.5"></div>
          </h1>
          <ul className="hidden md:flex gap-8 items-center">
            {HeaderTitles.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`text-white cursor-pointer hover:text-gray-300 ${
                    offset >= window.innerHeight
                      ? "text-gray-400 hover:text-gray-600"
                      : "text-white"
                  }`}
                >
                  <Link to={el.link}>{el.name}</Link>
                </li>
              );
            })}
            <li
              className={`py-3 px-7 rounded-lg border-white bg-white text-gray-700 hover:text-gray-200 hover:border-gray- hover:bg-gray-700 cursor-pointer    
              `}
              style={{
                backgroundColor: offset >= window.innerHeight ? "#1e293b" : "",
                color: offset >= window.innerHeight ? "#fff" : "",
              }}
            >
              Get access
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
