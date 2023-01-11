import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const options = ["нэрээ өөрчиллөх", "гарах"];

const Option = () => {
  const { user, setUser, getUserHistory, setShow, navigateToSlash } =
    useContext(Context);

  const [dropShow, setDropShow] = useState(true);
  const [showName, setShowName] = useState(false);
  const [nameValue, setNameValue] = useState("");

  const logout = () => {
    navigateToSlash();
    setUser({});
  };

  const changeName = async () => {
    try {
      await axios.put(`http://localhost:8000/user/${user?._id}`, {
        name: nameValue,
      });
      getUserHistory(user?.email);
    } catch (error) {
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  return (
    <div>
      <div className="pr-[40px] font-semibold text-gray-900 text-[20px]">
        <div className="w-[250px]">
          <div className="flex justify-between text-xl border-b px-1 py-1">
            {user?.name === "user" ? user?.email : user?.name}
            <ChevronDownIcon
              className={`${
                dropShow ? "block" : "hidden"
              } w-6 pt-1 cursor-pointer`}
              onClick={() => setDropShow(!dropShow)}
            />
            <ChevronUpIcon
              className={`${
                dropShow ? "hidden" : "block"
              } w-6 pt-1 cursor-pointer`}
              onClick={() => setDropShow(!dropShow)}
            />
          </div>
          {dropShow ? (
            <></>
          ) : (
            options.map((el, index) => {
              return (
                <p
                  key={index}
                  className="text-gray-600 pt-4 border border-t-0 px-2 cursor-pointer"
                  onClick={() => {
                    if (index === 1) {
                      setShow(false);
                      logout();
                    } else {
                      setShowName(true);
                    }
                  }}
                >
                  {el}
                </p>
              );
            })
          )}
        </div>
      </div>
      <div
        className={`${
          showName ? "block" : "hidden"
        } bg-black/40 fixed z-50 top-0 left-0 flex justify-center items-center w-full h-screen`}
      >
        <div className="fixed w-full z-10">
          <div className="max-w-[500px] h-[220px] mx-auto bg-white text-white">
            <div className="relative max-w-[320px] mx-auto py-16">
              <h1 className="text-main text-3xl font-bold pb-6">Нэрээ солих</h1>
              <div className="flex gap-8">
                <input
                  className="w-[250px] h-10 mt-2 pb-3 border-b border-main rounded text-2xl text-gray-700 focus:outline-none"
                  placeholder="Write your new Name"
                  type={"text"}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
                <button
                  className="bg-main hover:bg-green-accent-700 py-3 px-6 rounded font-bold"
                  onClick={() => {
                    changeName();
                    setShowName(false);
                    setNameValue("");
                  }}
                >
                  Солих
                </button>
              </div>
              <div
                className="w-8 h-8 absolute flex items-center justify-center rounded-full z-20 top-5 -right-16 text-main border-2 border-main cursor-pointer hover:text-white hover:bg-main transition-colors duration-200 ease-in"
                onClick={() => {
                  setShowName(false);
                }}
              >
                <div className="">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
