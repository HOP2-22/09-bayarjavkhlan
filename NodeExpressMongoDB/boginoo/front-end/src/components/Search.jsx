import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BigLogo from "../img/boginoo3.png";

const Search = ({ setLink }) => {
  const [UnLoged, setUnLoged] = useState(false);
  const [orignal, setOrignal] = useState("");
  const [searchValue, setSearchValue] = useState("");

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
          className="w-[530px] h-7 py-4 px-6 border border-[#F0F0F0] rounded-full text-[#02B589] focus:outline-0"
        />
        <div
          className="bg-[#02B589] text-white rounded-full py-1 px-6 cursor-pointer"
          onClick={() => {
            setOrignal(searchValue);
            setLink(searchValue);
          }}
        >
          Богиносгох
        </div>
      </div>
    </div>
  );
};

export default Search;
