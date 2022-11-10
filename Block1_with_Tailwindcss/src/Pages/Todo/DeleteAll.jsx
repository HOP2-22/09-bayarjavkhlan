import React from "react";

function DeleteAll({ setList }) {
  return (
    <header
      className="bg-rose-600 w-40 py-1 text-red-100 text-2xl font-semibold text-center mt-5 rounded cursor-pointer"
      onClick={() => {
        setList([]);
      }}
    >
      Delete all
    </header>
  );
}

export default DeleteAll;
