import React, { useContext } from "react";
import { Provider } from "../provider/DataContext";

const Like = () => {
  const { theme } = useContext<any | null>(Provider);

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[570px] flex flex-col pt-4 pb-6 gap-4">
      <div
        className={`${
          theme
            ? "text-[#EDEDED] decoration-[#535353] "
            : "text-black decoration-[#525252]"
        } flex items-center text-[20px] font-medium decoration-[3px] underline underline-offset-4`}
      >
        I ❤
      </div>
      <div className="indent-2 text-[16px]">
        Anime,Music,
        <span
          className={`${
            theme
              ? "text-[#E159AC] border-[#E159AC]"
              : "text-blue-700 border-blue-700"
          } hover:border-b pb-[2px] cursor-pointer ml-1`}
        >
          Online Game
        </span>
        ,Playing Basketball,
        <span
          className={`${
            theme
              ? "text-[#E159AC] border-[#E159AC]"
              : "text-blue-700 border-blue-700"
          } hover:border-b pb-[2px] cursor-pointer ml-1`}
        >
          Photography
        </span>
        ,Leica,Machine Learning
      </div>
    </div>
  );
};

export default Like;
