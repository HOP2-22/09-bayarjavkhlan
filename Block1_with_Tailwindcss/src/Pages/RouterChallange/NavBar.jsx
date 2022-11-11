import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ColorModeContext } from "./ThemeContext";

const NavBar = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

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

  console.log(window.location.pathname);

  return (
    <div
      className={`fixed z-10 w-screen h-20 drop-shadow-lg ${
        window.location.pathname !== "/"
          ? "bg-white"
          : offset <= window.innerHeight
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="w-full h-full px-2 flex justify-between items-center">
        <div className="w-full px-10 flex items-center justify-between md:px-14 lg:px-40">
          <h1
            className={`mr-4 text-3xl font-bold flex items-center sm:text-4xl ${
              window.location.pathname !== "/"
                ? "text-gray-800"
                : offset <= window.innerHeight
                ? "text-white"
                : "text-gray-800"
            }`}
          >
            Team<div className="bg-cyan-400 w-3 h-3 mt-2.5"></div>
          </h1>
          <ul className="hidden items-center gap-8 md:flex">
            {HeaderTitles.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`transition-color duration-400 cursor-pointer underline decoration-1 underline-offset-2 decoration-gray-500 hover:text-gray-300 hover:no-underline ${
                    window.location.pathname !== "/"
                      ? "text-gray-600 decoration-[#6D7D8B] hover:text-[#5a636a]"
                      : offset >= window.innerHeight
                      ? "text-gray-600 decoration-[#6D7D8B] hover:text-[#5a636a]"
                      : "text-white"
                  }`}
                >
                  <Link to={el.link}>{el.name}</Link>
                </li>
              );
            })}
            <li
              className={`py-3 px-7  border-2  rounded-lg cursor-pointer transition-color duration-400 ${
                window.location.pathname !== "/"
                  ? " navOffset"
                  : offset >= window.innerHeight
                  ? "navOffset"
                  : "bg-transparent text-[#9d9994] border-[#89857e] hover:text-gray-200 hover:border-gray-300"
              }  
              `}
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
