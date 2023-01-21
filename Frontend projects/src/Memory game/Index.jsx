import React, { useState, useEffect } from "react";

const Index = () => {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [num, setNum] = useState([]);
  const [numVisible, setNumVisible] = useState(false);
  const [visibleFinish, setVisibleFinish] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [comment, setComment] = useState(false);
  const start = () => {
    setNumVisible(true);
    setTimeout(() => {
      setNumVisible(false);
      setVisibleFinish(true);
    }, 3000);
  };
  const generate = () => {
    setItem((prev) => prev.sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    generate();
  }, []);

  const putNum = (index) => {
    setNum((prev) => [...prev, index]);
  };

  const check = () => {
    console.log(num);
    num === [1, 2, 3, 4, 5, 6, 7, 8, 9] ? setComment(false) : setComment(true);
    setShowResult(true);
    console.log(comment);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col gap-20 justify-center items-center">
        <div className="grid grid-cols-3 gap-10 justify-center items-center">
          {item.map((el, index) => {
            return (
              <div
                className="bg-lime-500 border-teal-500 w-40 h-40 flex items-center justify-center text-white text-2xl"
                key={index}
                onClick={() => {
                  putNum(el);
                }}
              >
                {numVisible && el}
                {el}
              </div>
            );
          })}
        </div>
        <div className="flex gap-12">
          <button
            className="px-12 py-5 rounded-3xl bg-deep-orange-accent-400 text-white text-lg"
            onClick={() => {
              start();
            }}
          >
            Start
          </button>
          <button
            className={`${
              visibleFinish ? "block" : "hidden"
            } px-12 py-5 rounded-3xl bg-green-600 text-white text-lg`}
            onClick={() => {
              check();
              console.log(num);
            }}
          >
            Check Result
          </button>
        </div>
      </div>
      <div
        className={`${
          showResult ? "flex" : "hidden"
        } absolute z-30 w-full h-screen bg-black/40 top-0 justify-center items-center`}
      >
        <div className="w-[300px] h-[400px] bg-white p-10 flex flex-col justify-between items-center">
          <p>
            {comment ? "Congratulation" : "unlucky eventhough next success"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
