import React from "react";
import axios from "axios";
import { ColorModeContext } from "../../Context/RouterContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

const PostId = () => {
  const { Data } = useContext(ColorModeContext);
  const { Id } = useParams();

  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${Id}`,
    headers: { "app-id": "636e136b8af6961b47361447" },
  });

  const [data, setData] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await instance.get("/");
        setData(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPost();
  }, [Id]);

  return (
    <div className="pt-20 lg:px-[180px] xl:px-[270px]">
      <div className="">
        <div className=""></div>
        <div className="">
          <div className=""></div>
          <div className="">
            <div className="">asda</div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostId;
