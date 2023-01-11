import React, { useContext } from "react";
import { Context } from "../context/Context";
import Search from "../components/Search";

import { FaSpinner } from "react-icons/fa";

const Entered = () => {
  const { links, show, loading } = useContext(Context);

  return (
    <div className="flex flex-col">
      <Search />
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        }  bg-green-600 mx-4 py-2 my-10 rounded-lg`}
      >
        <FaSpinner className="pl-4 h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div className={`${show && !loading ? "block" : "hidden"}`}>
        <div className="">
          <div className="py-2 px-4 opacity-50">Өгөгдсөн холбоос:</div>
          <p className="pl-6 h-6">
            {links?.orignalLink.length > 40
              ? links?.orignalLink.slice(0, 40) + "..."
              : links?.orignalLink}
          </p>
        </div>
        <div className="px-3 sm:px-4 flex justify-between items-end">
          <div className="">
            <div className="py-2 opacity-50">Богино холбоос:</div>
            <p className=" pl-2 h-6 text-sm sm:text:base">{`http://localhost:3000/${links?.shortLink}`}</p>
          </div>
          <p
            className="text-main hover:text-green-accent-700 transition-colors duration-200 ease-in pb-[2px] sm:pb-0 sm:text-lg font-sans font-medium cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                `http://localhost:3000/${links?.shortLink}`
              );
            }}
          >
            хуулж авах
          </p>
        </div>
      </div>
    </div>
  );
};

export default Entered;
