import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Giphy/GiphyContext";

const Giphy = () => {
  const { data, setValue } = useContext(Context);
  const [value, setInputValue] = useState("");
  let timeout;

  useEffect(() => {
    if (value !== "") {
      timeout = setTimeout(() => setValue(value), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-br from-blue-700 via-blue-400 via-blue-accent-200 to-indigo-accent-400">
      <div className="flex gap-5 py-10">
        <input
          className="w-[250px] pr-2 pl-4 border-2 border-pink-500 text-indigo-600 rounded-xl focus:outline-none"
          type="text"
          value={value}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-5">
        {data.map((el) => {
          console.log();
          return (
            <img
              src={el?.images.fixed_height.url}
              alt=""
              style={{ width: 250, height: 180, cursor: "pointer" }}
              onClick={() => openNewTab(el?.url)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Giphy;
