import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const addIntrested = async () => {
    try {
      await axios.post("http://localhost:8000/post/addIntrested", {
        id: data?._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center shadow-sm">
      <div className="w-[270px] ls:w-[250px] md:w-[230px] lg:w-[250px] rounded-[10px] bg-white overflow-hidden">
        <div className="w-full h-[150px]">
          <img
            src={data?.image}
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>
        <div className="p-[10px] flex flex-col gap-[5px]">
          <p className="text-[12px] text-[#A0A0A0] font-medium leading-[14px]">
            {data?.publishDate.slice(0, 10)}
          </p>
          <div className="flex flex-col gap-[10px]">
            <p className="font-medium text-[14px] text-[#585858] leading-[18px]">
              {data?.title}
            </p>
            <div className="flex gap-2 text-[12px] font-medium text-[#A0A0A0] leading-[14px]">
              <p>
                {data?.intrested} {data?.intrested < 2 ? "person" : "people"}{" "}
                intrested
              </p>
              <div className="w-[2px] h-[2px] rounded-full bg-[#A0A0A0] "></div>
              <p>{data?.likes} like</p>
            </div>
            <Link to={`/blog/post/${data?._id}`} onClick={addIntrested}>
              <div className="transition duration-300 group w-full py-[10px] flex justify-center bg-[#F3F4F6] hover:bg-[#FFAE00]/10 active:bg-[#FFAE00] rounded-[12px] cursor-pointer">
                <p className="transition duration-300 text-[14px] font-medium text-[#585858] group-hover:text-[#FFAE00] group-active:text-white ">
                  Intrested
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
