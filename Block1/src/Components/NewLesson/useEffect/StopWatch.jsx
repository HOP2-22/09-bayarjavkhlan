import React from "react";
import { useState, useEffect } from "react";

const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [milli, setMilli] = useState(0);
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setMilli((prev) => prev + 1);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [start]);

  const Reset = () => {
    setMilli(0);
    setStart(false);
  };
  console.log(milli);

  return (
    <div className="bg-gray-900 flex flex-col items-center h-screen justify-center gap-10">
      <div className="flex gap-3">
        <div className="text-6xl text-white">
          {Math.floor(milli / 100 / 60)}
        </div>
        <div className="text-6xl text-white">:</div>
        <div className="text-6xl text-white">
          {Math.floor(milli / 100) % 60}
        </div>
        <div className="text-6xl text-white">:</div>
        <div className="text-6xl text-white">{milli % 100}</div>
      </div>
      <div className="flex">
        <div
          className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold"
          onClick={() => setStart(true)}
        >
          Start
        </div>
        <div
          className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold"
          onClick={() => setStart(false)}
        >
          Pause
        </div>
        <div
          className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold"
          onClick={() => Reset()}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
