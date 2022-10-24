import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-20 z-10 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center justify-between w-full lg:px-28 md:px-14 px-10">
          <h1 className="text-3xl font-bold mr-4 sm:text:text-4xl text-white">
            Team
          </h1>
          <ul className="hidden md:flex gap-8 items-center">
            <li className="text-white">Products</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
            <li className="text-white">Log in</li>
            <li className="py-3 px-7 rounded-lg border-2 border-gray-300 text-white">
              Get access
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {nav ? <XMarkIcon className="w-5" /> : <Bars3Icon className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <div>
          <li className="routerNavPhone">Products</li>
          <li className="routerNavPhone">Services</li>
          <li className="routerNavPhone">Contact</li>
          <li className="routerNavPhone">Log in</li>
          <li className="routerNavPhone border-0">Get access</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
