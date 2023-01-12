import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

import { BackspaceIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";

const MobileHistory = () => {
  const { user, userHistory, loading, deleteShortLink, navigateToSlash } =
    useContext(Context);

  useEffect(() => {
    console.log(user);
    if (user === undefined) {
      navigateToSlash();
    }
  }, []);

  return (
    <>
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
      >
        <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div
        className={`${
          loading ? "hidden" : "flex"
        } relative top-0 flex flex-col justify-start`}
      >
        {userHistory.map((el, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col gap-2 pb-4 border-b border-black/50">
                <div className="flex flex-col">
                  <div className="flex gap-3 w-80">
                    <div className="opacity-80">Өгөгдсөн холбоос:</div>
                    <div className="text-base text-light-blue-600">
                      {el?.orignalLink.length > 23 ? (
                        <div className="flex flex-col justify-start">
                          <p>{el?.orignalLink.substring(0, 23)}</p>
                          <p>{el?.orignalLink.substring(24, 47)}</p>
                          <p>{el?.orignalLink.substring(48, 69) + "..."} </p>
                        </div>
                      ) : (
                        el?.orignalLink
                      )}
                    </div>
                  </div>
                  <div className="text-[15px] opacity-80">
                    Богино холбоос:
                    <span className="pl-2 text-[16px] text-yellow-700">{`http://localhost:3000/${el?.shortLink}`}</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="px-5 flex justify-between">
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
                        className="w-4 h-4 fill-main cursor-pointer hover:fill-red-500 transition-colors duration-150 ease-in"
                        onClick={() => {
                          deleteShortLink(el?._id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobileHistory;
