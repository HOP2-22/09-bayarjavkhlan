import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import Image from "./image";

const MemoryCardGame = () => {
  const [click, setClick] = useState(false);
  const [image, setImage] = useState(
    Image.sort(() => {
      return Math.random() - 0.5;
    })
  );

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 gap-6 items-center justify-center p-10 bg-purple-700">
        {image.map((el, id) => {
          return (
            <div
              className="relative w-[200px] h-[200px] rounded-2xl overflow-hidden transform transition-transform duration-500"
              style={{
                transform: `rotateY(${el.pick ? 180 : 0}deg)`,
              }}
              key={id}
            >
              <img
                src={el.src}
                alt=""
                className="absolute z-10 w-[200px] h-[200px]"
                onClick={() => {
                  const newArr = image;
                  newArr[id].pick = !newArr[id].pick;
                  setImage([...newArr]);
                  console.log(image);
                }}
              />
              <div className="absolute w-full h-full bg-blue-gray-50"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryCardGame;
