import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

import { FaSpinner } from "react-icons/fa";
import { BackspaceIcon } from "@heroicons/react/24/solid";

const History = () => {
  const { links, show, userHistory, loading, deleteShortLink } =
    useContext(Context);

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col">
        <p
          className={`${
            userHistory.length < 1 ? "sm:hidden" : "sm:block"
          } hidden pt-12 pb-6 text-main text-3xl font-extrabold`}
        >
          Түүх
        </p>
        <button
          disabled
          className={`${
            loading ? "flex" : "hidden"
          } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
        >
          <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
          <p className="font-semibold pt-2 text-white"> Loading</p>
        </button>
      </div>
      <div className="flex flex-col-reverse">
        {userHistory.map((el, index) => {
          return (
            <div key={index}>
              <div className="hidden sm:flex items-end pb-4 border-b-2 decoration-black">
                <div className="flex">
                  <div className="flex flex-col gap-3 w-80">
                    <div className="opacity-50">Өгөгдсөн холбоос:</div>
                    <div className="text-sm">
                      {el?.orignalLink.length > 50
                        ? el?.orignalLink.substring(0, 50) + "..."
                        : el?.orignalLink}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-56">
                    <div className="opacity-50">Богино холбоос:</div>
                    <div className="">{`http://localhost:3000/${el?.shortLink}`}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="text-md text-main underline decoration-main cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `http://localhost:3000/${el?.shortLink}`
                      );
                    }}
                  >
                    Хуулж авах
                  </div>
                  <div className="flex flex-col gap-1 pt-[3px]">
                    <BackspaceIcon
                      className="w-4 h-4 fill-blue-600 cursor-pointer hover:fill-red-500 transition-colors duration-150 ease-in"
                      onClick={() => {
                        deleteShortLink(el?._id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col sm:hidden">
          {links && (
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
                  <p className=" pl-2 h-6 text-sm sm:text:base">
                    {`http://localhost:3000/${links?.shortLink}`}
                  </p>
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
          )}
          <p className="w-full flex justify-end pt-4 text-blue-accent-400 decoration-blue-accent-400 underline underline-offset-4">
            <div
              onClick={() => {
                navigate("/history");
              }}
            >
              Түүх харах
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default History;
