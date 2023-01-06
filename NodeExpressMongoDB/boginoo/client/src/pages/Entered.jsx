import React, { useState, useContext } from "react";
import axios from "axios";
import BigLogo from "../img/boginoo3.png";
import { Context } from "../context/Context";

const Entered = () => {
  const [shortUrl, setShortUrl] = useState();
  const [link, setLink] = useState("");
  const [enteredValue, SetEnteredValue] = useState("");

  const createShort = async () => {
    try {
      const response = await axios.post("http://localhost:8000", {
        orignalLink: enteredValue,
      });
      setShortUrl("as");
    } catch (error) {
      console.log(error);
    }
  };

  const cleanInput = () => {
    enteredValue("");
  };
  return (
    <div>
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
            className="bg-main text-white rounded-full py-1 px-6 cursor-pointer"
            onClick={() => {
              if (enteredValue.includes(".com")) {
                createShort();
                setLink(SetEnteredValue);
              }
            }}
          >
            Богиносгох
          </div>
        </div>
      </div>
      <div className="block">
        <div className="">
          <div className="py-2 px-4 opacity-50">Өгөгдсөн холбоос:</div>
          <p className="pl-6 h-6">{link}</p>
        </div>
        <div className="">
          <div className="py-2 px-4 opacity-50">Богино холбоос:</div>
          <p className="pl-6 h-6">{`www.boginoo.com/${shortUrl}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Entered;
