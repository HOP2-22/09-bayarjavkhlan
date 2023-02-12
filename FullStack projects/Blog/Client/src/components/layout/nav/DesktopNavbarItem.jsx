import React from "react";
import { Link } from "react-router-dom";

const DesktopNavbarItem = ({ link, index, title, offset }) => {
  return (
    <Link
      to={link}
      className={`transition-color duration-300 cursor-pointer underline underline-offset-2 decoration-1 decoration-gray-500 hover:no-underline ${
        window.location.pathname !== "/"
          ? " text-secondary-text decoration-secondary-text hover:text-gray-800"
          : offset >= 100
          ? " text-secondary-text decoration-secondary-text hover:text-gray-800"
          : "text-white"
      } `}
    >
      {title}
    </Link>
  );
};

export default DesktopNavbarItem;
