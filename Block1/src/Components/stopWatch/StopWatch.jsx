import React from "react";
// import { useState } from "react";

const StopWatch = () => {
    // const [paused, setPaused] = useState();
    // const [started, setStarted] = useState(00);
    // const [stoped, setStoped] = useState(00);
  return (
    <div className="">
      <div className="flex">
        <div className="">00</div>
        <div className="">:</div>
        <div className="">00</div>
        <div className="">:</div>
        <div className="">00</div>
        <div className="">:</div>
        <div className="">00</div>
      </div>
      <div className="flex">
        <div className="">START</div>
        <div className="">STOP</div>
        <div className="">RESET</div>
      </div>
    </div>
  );
};

export default StopWatch;
