import React from "react";
import Data from "../../JS/BlogPost";
import Body from "./BlogPostBody";
import { ColorModeContext } from "./ThemeContext";
import { useContext } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const BlogPost = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div className="bg-[#F5F5F5] pt-32 px-[120px] flex flex-col items-center">
      <div className="flex flex-col self-start">
        <div className="text-[48px] font-mulish font-extrabold">Blog Post</div>
        <div className="pb-[70px] text-[#6D7D8B] text-[18px] font-semibold font-mulish">
          Our latest updates and blogs about managing your team
        </div>
      </div>
      <div className="w-full pb-10 grid grid-cols-1 justify-between gap-16 md:grid-cols-2 lg:grid-cols-3">
        {Data.map((data, ind) => {
          return (
            <div>
              <Body
                title={data.title}
                comment={data.comment}
                avatar={data.avatar}
                name={data.name}
                image={data.image}
                date={data.date}
                key={ind}
              />
            </div>
          );
        })}
      </div>
      <div className="bg-[#dee2e7] mb-[140px] px-16 py-4 rounded-lg text-[#8895a1] flex cursor-pointer active:bg-[#b3b8bd]">
        Next <ChevronRightIcon className="w-4" />
      </div>
    </div>
  );
};

export default BlogPost;
