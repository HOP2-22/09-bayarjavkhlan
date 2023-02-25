import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/blog/Header";
import Cards from "../components/blog/Cards";
import CreatePost from "../components/blog/CreatePost";
import { Context } from "../provider/Context";

const Blog = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register/login");
      alert("First login to see blogs");
    }
  }, []);

  const [visible, setVisible] = useState(false);
  const [create, setCreate] = useState(false);

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    const allPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/post?limit=${
            window.innerWidth < 530
              ? 8
              : window.innerWidth < 768
              ? 10
              : window.innerWidth < 1280
              ? 9
              : window.innerWidth > 1279 && 12
          }&page=${page}`
        );
        setPagination(response.data.pagination);
        setPosts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    allPosts();
  }, [page]);

  return (
    <div
      className={`${
        create ? "" : ""
      } w-full h-full grow bg-[#F8F9FA] flex justify-center items-center`}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="w-full lg:w-[900] xl:w-[1100px] 2xl:w-[1330px] pt-[60px] h-full">
        <Header
          visible={visible}
          setVisible={setVisible}
          setCreate={setCreate}
        />
        <Cards pagination={pagination} setPage={setPage} posts={posts} />
      </div>
      <div
        className={`${
          create ? "flex" : "hidden"
        } absolute w-full h-full bg-black/10 justify-center items-center`}
      >
        <CreatePost setCreate={setCreate} />
        <div
          className="absolute z-10 w-full h-full"
          onClick={() => {
            setCreate(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
