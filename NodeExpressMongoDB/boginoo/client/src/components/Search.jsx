import React, { useState, useContext } from "react";
import BigLogo from "../img/boginoo3.png";
import { Context } from "../context/Context";

const Search = ({ setLink, createShort }) => {
  const { makeId, setCut } = useContext(Context);

  const [searchValue, setSearchValue] = useState("");

  const cleanInput = () => {
    setSearchValue("");
  };

  return (
    <div className="flex flex-col items-center">
      <img src={BigLogo} className="w-[184px]" alt="" />
      <div className="flex gap-2 mt-16">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="https://www.web-huudas.mn"
          className="sm:w-[430px] md:w-[480px] lg:w-[530px] h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-main focus:outline-0"
        />
        <div
          className="bg-main text-white rounded-full py-1 px-6 cursor-pointer"
          onClick={() => {
            if (searchValue.includes(".com")) {
              setLink(searchValue);
              makeId();
              setCut(true);
              cleanInput();
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
