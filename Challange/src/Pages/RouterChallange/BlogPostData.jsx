import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { FaSpinner } from "react-icons/fa";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e136b8af6961b47361447" },
});
const BlogPostData = () => {
  const [Data, SetData] = useState([]);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      SetLoading(true);
      try {
        const res = await instance.get("/");
        SetData(res.data.data);
      } catch (error) {
      }
      SetLoading(false);
    };
    getData();
  }, []);
  return (
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
      <div
        className={`pb-10 grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
          Loading ? "hidden" : "grid"
        }`}
      >
        {Data.map((data, index) => {
          return (
            <div>
              <BlogPost data={data} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPostData;
