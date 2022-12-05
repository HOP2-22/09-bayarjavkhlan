import React, { useState } from "react";
import Image from "./image";
import "./Memory.css";
const MemoryCardGame = () => {
  const [first, setFirst] = useState(null);
  const [firstIndex, setFirstIndex] = useState(null);

  const [image, setImage] = useState(
    Image.sort(() => {
      return Math.random() - 0.5;
    })
  );

  const flip = (index) => {
    const newArr = image;
    newArr[index].pick = !newArr[index].pick;
    setImage([...newArr]);
  };

  // const flipBackTrue = (first, second) => {};
  const flipBackFalse = () => {
    setImage(
      image.map((el) => {
        el.pick = false;
        return el;
      })
    );
  };
  const checkId = (id, index) => {
    if (first == null) {
      setFirst(id);
      setFirstIndex(index);
      return;
    }
    if (firstIndex !== index) {
      if (first === id) {
        console.log("same");
        console.log(firstIndex, first);
      } else {
        console.log(firstIndex, first);
        console.log("notSame");
        setTimeout(() => {
          flipBackFalse(id);
          flipBackFalse(first);
        }, 500);
      }
    } else if (firstIndex !== null) {
      console.log(firstIndex, first);
      setFirst(null);
      setFirstIndex(null);
      return;
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 gap-6 items-center justify-center p-10 bg-purple-700">
        {image.map((el, index) => {
          return (
            <div
              className="flip-card rounded-xl overflow-hidden"
              key={index}
              onClick={() => {
                flip(index);
                checkId(el.id, index);
              }}
            >
              <div
                className="flip-card-inner"
                style={{
                  transform: `rotateY(${!el.pick ? "180deg" : "0deg"})`,
                }}
              >
                <div className="flip-card-front">
                  <img
                    src={el.src}
                    alt="Avatar"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back bg-light-blue-400"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryCardGame;
