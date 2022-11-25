import React, { useState, useEffect } from "react";
import top from "../../IMG/UpperBack.png";
import bottom from "../../IMG/LowerBack.png";
import target from "../../IMG/Rectangle.png";
import hammer from "../../IMG/hammer.png";

const GameIndex = () => {
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0);
  const [mouseClick, setMouseClick] = useState(false);
  const [time, setTime] = useState(30);
  const [y, setY] = useState();
  const [x, setX] = useState();
  const [move, setMove] = useState(new Array(15).fill(false));
  const translate = () => {
    let number = Math.floor(Math.random() * 15);
    let newMove = new Array(15).fill(false);
    newMove[number] = true;
    setMove(newMove);
  };

  useEffect(() => {
    const move = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    const click = (e) => {
      setMouseClick(e.isTrusted);
      setTimeout(() => {
        setMouseClick(false);
      }, [200]);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", click);
    };
  }, []);
  useEffect(() => {
    if (time === 0) {
      setClick(false);
    }
    let interval = null;
    if (click) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
        translate();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, click]);
  return (
    <>
      <div className="relative w-full h-screen bg-[#b40001] flex flex-col gap-14 items-center justify-center">
        <div className="pt-28 flex gap-40 text-white text-2xl">
          <div className="flex">
            <p>Time:</p>
            <div className="pl-2">{time}</div>
          </div>
          <div className="">Score:{score}</div>
        </div>
        <div className="grid grid-cols-5">
          {move.map((boolen, index) => (
            <div
              className="relative flex flex-col items-center justify-center pt-10"
              key={index}
            >
              <img src={top} alt="" className="w-0.4" />
              <img
                src={target}
                alt=""
                className={`${
                  boolen
                    ? "delay-200 -translate-y-5"
                    : "delay-200 translate-y-5"
                } absolute w-0.2 transition-transform duration-150 ease-in`}
                onClick={() => {
                  setScore((prev) => prev + 1);
                }}
              />
              <img src={bottom} alt="" className="w-0.4 -translate-y-3" />
            </div>
          ))}
        </div>
        <div className="py-40">
          <button
            className="bg-teal-accent-400 px-24 py-7 rounded-full text-white cursor-pointer active:bg-teal-accent-700"
            onClick={() => {
              setClick(!click);
              console.log(mouseClick);
            }}
          >
            START
          </button>
        </div>
      </div>
      <div style={{ position: "absolute", top: y - 60, left: x + 30 }}>
        <img
          src={hammer}
          className={`${
            mouseClick && "-rotate-90 -translate-x-1.5 -translate-y-14"
          } w-20 trasition-transform origin-bottom duration-50 ease-in`}
          alt=""
        />
      </div>
      <div
        className={`${
          time === 0 ? "flex" : "hidden"
        } absolute z-30 w-full h-screen bg-black/40 top-0 justify-center items-center`}
      >
        <div className="w-[300px] h-[400px] bg-white p-10 flex flex-col justify-between items-center">
          <div className="font-semibold text-3xl">
            {score > 20 ? "Victory" : "Defeat"}
          </div>
          <div className="pb-20">
            <p className="font-medium text-xl">Your score is {score}</p>
            <p
              className={`${
                score > 20 ? "text-yellow-accent-400" : "text-red-accent-400"
              } pt-5`}
            >
              {score < 20 ? "Daraagiin udaagiinhdan amjilts" : "Congratulation"}
            </p>
          </div>
          <button
            onClick={() => {
              setTime(30);
              setScore(0);
              setMove(new Array(15).fill(false));
            }}
            className="py-3 px-7 bg-green-600 rounded-3xl"
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
};

export default GameIndex;
