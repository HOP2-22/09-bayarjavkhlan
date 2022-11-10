import React from "react";
import Data from "../../JS/BlogPost";
import Body from "./BlogPostBody";
import { ColorModeContext } from "./ThemeContext";
import { useContext } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const BlogPost = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div className="flex flex-col items-center pt-32 px-[120px]  bg-[#F5F5F5]">
      <div className="flex flex-col self-start">
        <div className="text-[48px] ont-mulish font-extrabold">Blog Post</div>
        <div className="text-[18px] font-semibold text-[#6D7D8B] font-mulish pb-[70px]">
          Our latest updates and blogs about managing your team
        </div>
      </div>
      <div className="w-full gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between pb-10">
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
      <div className="mb-[140px] px-16 py-4 bg-[#dee2e7] text-[#8895a1] rounded-lg cursor-pointer active:bg-[#b3b8bd] flex">
        Next <ChevronRightIcon className="w-4" />
      </div>
    </div>
  );
};

export default BlogPost;
