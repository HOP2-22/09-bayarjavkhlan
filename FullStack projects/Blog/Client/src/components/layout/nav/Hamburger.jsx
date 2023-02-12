import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hamburger = ({ hamburger, setHamburger, offset }) => {
  const location = useLocation();

  const [path, setPath] = useState();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div
      className={`${
        hamburger ? "border-gray-700" : "border-gray-300"
      } flex flex-col border rounded gap-1 items-center justify-center w-8 h-8 md:hidden`}
      onClick={() => {
        setHamburger(!hamburger);
      }}
    >
      <div
        className={`${
          !hamburger
            ? path !== "/" || offset >= 100
              ? "bg-gray-900"
              : "bg-white"
            : "rotate-45 translate-y-[3px] bg-gray-900"
        } h-[1.5px] rounded w-[60%] transition duration-200`}
      ></div>
      <div
        className={`${
          !hamburger
            ? path !== "/" || offset >= 100
              ? "bg-gray-900"
              : "bg-white"
            : "hidden"
        } h-[1.5px] rounded w-[60%] transition duration-200`}
      ></div>
      <div
        className={`${
          !hamburger
            ? path !== "/" || offset >= 100
              ? "bg-gray-900"
              : "bg-white"
            : "-rotate-45 -translate-y-[3px] bg-gray-900"
        } h-[1.5px] rounded w-[60%] transition duration-200`}
      ></div>
    </div>
  );
};

export default Hamburger;
