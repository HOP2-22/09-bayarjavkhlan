import React from "react";
import Body from "./BlogPostBody";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ColorModeContext } from "./ThemeContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e136b8af6961b47361447" },
});

const BlogPost = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  const [Data, SetData] = useState([]);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      SetLoading(true);
      try {
        const res = await instance.get("/");
        SetData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
      SetLoading(false);
    };
    getData();
  }, []);
  console.log(Data);
  return (
    <div className="bg-[#F5F5F5] h-[100%] justify-center w-[100%] pt-32">
      <div className="flex flex-col pl-80">
        <div className="text-[48px] font-mulish font-extrabold">Blog Post</div>
        <div className="pb-[70px] text-[#6D7D8B] text-[18px] font-semibold font-mulish">
          Our latest updates and blogs about managing your team
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          disabled
          className={`${
            Loading ? "flex" : "hidden"
          }  bg-indigo-500 p-2 rounded-lg`}
        >
          <FaSpinner class="animate-spin h-5 w-5 mr-3" color="white" />
          <p className="font-semibold text-white"> Loading</p>
        </button>
        <div className="pb-10 grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Data.map((dt, ind) => {
            return (
              <div>
                <Body
                  firstName={dt.owner.firstName}
                  lastName={dt.owner.lastName}
                  ownerPicture={dt.owner.picture}
                  date={dt.owner.publishDate}
                  type={dt.tags}
                  text={dt.text}
                  likes={dt.likes}
                  petImage={dt.image}
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
    </div>
  );
};

export default BlogPost;
