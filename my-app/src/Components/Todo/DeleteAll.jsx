import React from "react";

function DeleteAll({ setList }) {
  return (
    <header
      className="text-red-100 text-2xl font-semibold mt-5 bg-rose-600 rounded w-40 text-center py-1 cursor-pointer"
      onClick={() => {
        setList([]);
      }}
    >
      Delete all
    </header>
  );
}

export default DeleteAll;
