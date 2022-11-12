import React from "react";
import { useContext, useState } from "react";
import { ColorModeContext } from "./ThemeContext";
import Body from "./BlogPostBody";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const BlogPost = ({ data, index }) => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  const [Data, setData] = useState({});

  setData((el) => {
    console.log(data);
  });

  console.log(Data);
  return (
    <div
      className="bg-[#F5F5F5] h-[100%] justify-center w-[100%] pt-32"
      key={index}
    >
      <div className="flex flex-col pl-80">
        <div className="text-[48px] font-mulish font-extrabold">Blog Post</div>
        <div className="pb-[70px] text-[#6D7D8B] text-[18px] font-semibold font-mulish">
          Our latest updates and blogs about managing your team
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="pb-10 grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Data.map((dt, index) => {
            return (
              <div>
                <Body
                  firstName={dt.owner.firstName}
                  lastName={dt.owner.lastName}
                  ownerPicture={dt.owner.picture}
                  date={dt.publishDate}
                  type={dt.tags}
                  text={dt.text}
                  likes={dt.likes}
                  petImage={dt.image}
                  ind={index}
                />
              </div>
            );
          })}
        </div>
        <div className="bg-[#dee2e7] mb-[140px] px-16 py-4 rounded-lg text-[#8895a1] flex cursor-pointer active:bg-[#b3b8bd]">
          Next <ChevronRightIcon className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
