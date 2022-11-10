import React from "react";
import { useState } from "react";

export const SearchTodo = () => {
  const [inputValue, setValue] = useState([]);
  return (
    <div className="search">
      <div className="">Search</div>
      <input type={"text"} value={inputValue} />
    </div>
  );
};

export default SearchTodo;
