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

  const flipBackFalse = (first, second) => {
    setImage(
      image.map((el) => {
        el.pick = false;
        return el;
      })
    );
  };
  const flipBackTrue = (index, firstIndex) => {
    setTimeout(() => {
      let newArr = image;
      newArr[index].same = !newArr[index].same;
      newArr[firstIndex].same = !newArr[firstIndex].same;
      setImage(newArr);
    }, 1000);
  };
  const checkId = (id, index) => {
    if (first == null) {
      setFirst(id);
      setFirstIndex(index);
      return;
    }
    if (firstIndex !== index) {
      if (first === id) {
        console.log(firstIndex, first);
        flipBackTrue(index, firstIndex);
        setFirst(null);
        setFirstIndex(null);
      } else {
        setTimeout(() => {
          flipBackFalse();
        }, 500);
        setFirst(null);
        setFirstIndex(null);
      }
    } else if (firstIndex !== null) {
      console.log(firstIndex, first);
      setFirst(null);
      setFirstIndex(null);
      return;
    }
    console.log(id, index);
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/alien-planet-landscape-cosmic-background-deserted-coastline-with-mountains-view-glowing-cleft-stars-shining-spheres-space-extraterrestrial-pc-game-backdrop-cartoon-vector-illustration_107791-8012.jpg?w=2000)",
      }}
    >
      <div className="grid grid-cols-4 gap-6 items-center justify-center p-10 bg-transparent">
        {image.map((el, index) => {
          return (
            <div
              className={`${
                el.same === true ? "opacity-0" : "opacity-100"
              } flip-card rounded-xl overflow-hidden`}
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
                <div className="flip-card-back bg-purple-accent-400">
                  {el.id}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryCardGame;
