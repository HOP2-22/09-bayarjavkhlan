import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import Header from "./Header";
import DeleteAll from "./DeleteAll";

const Main = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const deleteItem = (index) => {
    let newList = list.filter((item, filterIndex) => {
      return index !== filterIndex;
    });
    setList(newList);
  };
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await axios.get("http://localhost:8000/post");
        console.log(posts.data);
        setData(posts.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header />

      <div className="w-120 flex">
        <p>Title:</p>
        <input
          type={"text"}
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && titleValue !== "") {
              let a = list.find((listItem) => listItem === titleValue);
              if (a === undefined) {
                setList([titleValue, ...list]);
              } else {
                setList([
                  titleValue,
                  ...list.filter((listItem) => listItem !== titleValue),
                ]);
              }
            }
          }}
          className="bg-gradient-to-r from-teal-300 to-teal-500 w-80 h-14 mr-8 pl-8 rounded text-xl text-yellow-500 focus:outline-0"
        />
        <button
          className="button"
          onClick={() => {
            if (titleValue !== "") {
              //   createPost();
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
