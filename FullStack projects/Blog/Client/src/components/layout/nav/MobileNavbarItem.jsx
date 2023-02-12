import React from "react";
import { Link } from "react-router-dom";

const MobileNavbarItem = ({ link, index, title, setHamburger }) => {
  return (
    <div className="w-full flex justify-center py-3 hover:bg-zinc-100 transition-colors duration-300">
      <Link
        to={link}
        onClick={() => {
          setHamburger(false);
        }}
        className={`transition-color duration-300 cursor-pointer text-secondary-text hover:text-gray-800"} `}
      >
        {title}
      </Link>
    </div>
  );
};

export default MobileNavbarItem;
