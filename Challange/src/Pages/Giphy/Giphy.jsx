import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Giphy/GiphyContext";

const Giphy = () => {
  const { data, setValue, getData } = useContext(Context);
  const [value, setInputValue] = useState("");
  let timeout;

  useEffect(() => {
    if (value !== "") {
      timeout = setTimeout(() => setValue(value), 2000);
    }
    console.log(data);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center bg-gradient-to-br from-[#FDE7EA] to-[#FDEFDA]">
      <div className={`flex gap-5 py-10 w-[1250px]`}>
        <input
          className="bg-gradient from-[#9DFFB3] w-[250px] py-3 pr-2 pl-4 border-2 text-xl text-indigo-600 rounded-xl focus:outline-none"
          type="text"
          value={value}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={() => getData()}>Search</button>
      </div>
      <div className="grid grid-cols-5">
        {data.map((el, index) => {
          return (
            <img
              key={index}
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
