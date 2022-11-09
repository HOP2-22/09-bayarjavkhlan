import React, { useState } from "react";

function List(props) {
  const { index, todo, deleteItem } = props;
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div
      className="text-xl flex w-104 h-12 justify-between items-center my-5 bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-violet-500 rounded-lg mx-2 overflow-scroll "
      key={index}
    >
      <div
        className="text-blue-800 flex"
        style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        <input
          className="mx-6 cursor-pointer"
          type={"checkbox"}
          value={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        {todo}
      </div>
      <div className="flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 stroke-sky-700 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <div
          className="mr-5 w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex place-content-center cursor-pointer"
          key={index}
          onClick={() => {
            deleteItem()
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default List;