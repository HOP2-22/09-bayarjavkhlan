import React, { useContext } from "react";
import { Context } from "../context/Context";

import BigLogo from "../img/boginoo3.png";

const Search = () => {
  const { SetEnteredValue, enteredValue, createShort, user, getUserHistory } =
    useContext(Context);

  return (
    <div className="flex flex-col items-center">
      <img src={BigLogo} className="w-[184px]" alt="" />
      <div className="flex gap-2 mt-16">
        <input
          type="text"
          value={enteredValue}
          onChange={(e) => {
            SetEnteredValue(e.target.value);
          }}
          placeholder="https://www.web-huudas.mn"
          className="sm:w-[430px] md:w-[480px] lg:w-[530px] h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0"
        />
        <div
          className="bg-main hover:bg-green-accent-700 transition-colors duration-200 ease-in text-white rounded-full py-1 px-6 cursor-pointer"
          onClick={() => {
            if (user) {
              createShort(user?._id);
              getUserHistory(user?.email);
            } else {
              createShort();
            }
          }}
        >
          Богиносгох
        </div>
      </div>
    </div>
  );
};

export default Search;
