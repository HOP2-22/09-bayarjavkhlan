import React, { useState } from "react";
import List from "./List";
import DeleteAll from "./DeleteAll";

const Main = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const deleteItem = (index) => {
    let newList = list.filter((item, filterIndex) => {
      return index !== filterIndex;
    });
    setList(newList);
  };
  const deleteAll = () => {
    return setList([]);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          type={"text"}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== "") {
              let a = list.find((listItem) => listItem === inputValue);
              if (a === undefined) {
                setList([inputValue, ...list]);
              } else {
                setList([
                  inputValue,
                  ...list.filter((listItem) => listItem !== inputValue),
                ]);
              }
            }
          }}
          className="bg-gradient-to-r from-teal-300 to-teal-500 w-80 h-14 mr-8 pl-8 rounded text-xl text-yellow-500 focus:outline-0"
        />
        <button
          className="button"
          onClick={() => {
            if (inputValue !== "") {
              let a = list.find((listItem) => listItem === inputValue);
              if (a === undefined) {
                setList([inputValue, ...list]);
              } else {
                setList([
                  inputValue,
                  ...list.filter((listItem) => listItem !== inputValue),
                ]);
              }
            }
          }}
        >
          Add
        </button>
      </div>
      <div>
        {list.map((todo, index) => {
          return (
            <List
              index={index}
              deleteAll={deleteAll}
              deleteItem={() => deleteItem(index)}
              todo={todo}
            />
          );
        })}
      </div>
      {list.length > 0 && <DeleteAll setList={setList} />}
    </div>
  );
};

export default Main;
