import React from "react";

function DeleteAll({ setList }) {
  return (
    <div className="w-120">
      <header
        className="bg-red-accent-400 w-52 py-2 text-red-50 text-2xl font-semibold text-center mt-5 rounded cursor-pointer"
        onClick={() => {
          setList([]);
        }}
      >
        Delete all
      </header>
    </div>
  );
}

export default DeleteAll;
