import React from "react";
import { Link } from "react-router-dom";

const MobileNavbarItem = ({ link, index, title, setHamburger }) => {
  return (
    <Link
      className="w-full flex justify-center py-3 cursor-pointer hover:bg-zinc-100 transition-colors duration-300"
      to={link}
      onClick={() => {
        setHamburger(false);
      }}
    >
      <p
        className={`transition-color duration-300 text-secondary-text hover:text-gray-800"} `}
      >
        {title}
      </p>
    </Link>
  );
};

export default MobileNavbarItem;
