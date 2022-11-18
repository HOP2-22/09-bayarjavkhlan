import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Giphy/GiphyContext";

const Giphy = () => {
  const { data, setValue } = useContext(Context);
  const [value, setInput] = useState("");
  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="py-3 px-8 bg-red-accent-400 rounded-xl"
          onClick={() => setValue(value)}
        >
          Search
        </button>
        {data.map((el) => {
          console.log(el);
          return (
            <img
              src={el?.embed_url}
              alt=""
              style={{ width: 100, height: 100 }}
            />
          );
        })}
      </div>
      <a href={data?.embed_url}>jsadhajskdhakdskjdaj</a>
    </div>
  );
};

export default Giphy;
