import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/RouterContext/Provider";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaSpinner } from "react-icons/fa";
import Post from "./Post";

const Blog = () => {
  const { Loading, Data, theme, changeTheme } = useContext(Context);

  return (
    <>
      <div
        className={`${
          theme ? "bg-blue-900" : "bg-[#F5F5F5]"
        } pt-32 flex flex-col items-center justify-center`}
      >
        <button
          type="button"
          disabled
          className={`${
            Loading ? "flex" : "hidden"
          }  bg-indigo-500 p-2 rounded-lg`}
        >
          <FaSpinner class="h-5 w-5 mr-3 animate-spin" color="white" />
          <p className="font-semibold text-white"> Loading</p>
        </button>
        <div className="w-full pl-80 flex flex-col justify-self-start">
          <div className="text-[48px] font-mulish font-extrabold">
            Blog Post
          </div>
          <div className="pb-[70px] text-[#6D7D8B] text-[18px] font-semibold font-mulish">
            Our latest updates and blogs about managing your team
          </div>
        </div>
        <div
          className={`pb-10 grid-cols-1 gap-[105px] items-center lg:grid-cols-2 xl:grid-cols-3 ${
            Loading ? "hidden" : "grid"
          }`}
        >
          {Data?.map((data, index) => {
            return (
              <Post
                firstName={data.owner.firstName}
                lastName={data.owner.lastName}
                ownerPicture={data.owner.picture}
                date={data.publishDate}
                type={data.tags}
                text={data.text}
                likes={data.likes}
                petImage={data.image}
                id={data.id}
                key={index}
              />
            );
          })}
        </div>
        <div
          className={`${
            theme ? "bg-white " : "bg-[#dee2e7]"
          } mb-[140px] px-16 py-4 rounded-lg flex cursor-pointer active:bg-[#b3b8bd]`}
        >
          Next <ChevronRightIcon className="w-4" />
        </div>
      </div>
    </>
  );
};

export default Blog;
