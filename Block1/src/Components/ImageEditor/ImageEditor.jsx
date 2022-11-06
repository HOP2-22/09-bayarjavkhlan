import React from "react";
import { useState } from "react";
import {AiFillAppstore} from "react-icons/ai"

const ImageEditor = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-sky-200">
      <div className="shadow-xl shadow-blue-700 w-[55%] h-2/3 bg-white px-14 py-8">
        <div className="w-full h-full flex flex-col gap-16">
          <div className="font-semibold text-3xl">Easy Image Editor</div>
          <div className="flex gap-16">
            <div className="w-1/3 p-10"></div>
            <div className="w-2/3"></div>
          </div>
          <div>
            <div className="">Reset Filters</div>
            <div className="">
              <div className="">Save Images</div>
              <div className="">Choose Images</div>
              <AiFillAppstore size={40}/>ç
              <Box>
                
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
