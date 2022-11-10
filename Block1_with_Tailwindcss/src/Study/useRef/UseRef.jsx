import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="flex flex-col w-full items-center pt-[200px] gap-5">
      <input ref={inputRef} className="border rounded-lg pl-3" />
      <button onClick={focus} className="bg-rose-400 py-3 px-7 rounded-lg">
        Focus
      </button>
    </div>
  );
};

export default UseRef;
