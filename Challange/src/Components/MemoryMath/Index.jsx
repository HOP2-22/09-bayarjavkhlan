import React, { useState, useEffect } from "react";

const Index = () => {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [num, setNum] = useState([]);
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const start = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  const generate = () => {
    setItem((prev) => prev.sort(() => 0.5 - Math.random()));
  };

  useEffect(() => {
    generate();
  }, []);

  const check = (index) => {
    setNum((prev) => prev.concat(index));
    console.log(num);
    if (num.length === 9) {
      for (let i = 0; i < num; i++) {
        if (num[i] !== i + 1) {
          i = 10;
          setResult("Taarsangui");
        } else {
          setResult("Taarlaa");
        }
      }
      console.log(result);
      result !== "Taarsangui" && setShowResult(true);
    }
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
                  check(el);
                }}
              >
                {visible && el}
                {el}
              </div>
            );
          })}
        </div>
        <button
          className="px-14 py-6 rounded-3xl bg-deep-orange-accent-400"
          onClick={() => {
            start();
          }}
        >
          Start
        </button>
      </div>
      <div
        className={`${
          showResult ? "flex" : "hidden"
        } absolute z-30 w-full h-screen bg-black/40 top-0 justify-center items-center`}
      >
        <div className="w-[300px] h-[400px] bg-white p-10 flex flex-col justify-between items-center"></div>
      </div>
    </>
  );
};

export default Index;
