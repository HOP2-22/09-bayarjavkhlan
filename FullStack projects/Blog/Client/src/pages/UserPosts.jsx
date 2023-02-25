import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../provider/Context";
import Cards from "../components/blog/Cards";
import User from "../components/blog/User";

const UserPosts = () => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register/login");
      alert("First login to see blogs");
    }
  }, []);

  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const allPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/post/${id}/user?limit=${
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
        setUserInfo(response.data.data[0].user);
      } catch (error) {
        console.log(error);
      }
    };
    allPosts();
  }, [page]);

  return (
    <div className="w-full h-full grow flex justify-center items-center bg-[#F8F9FA]">
      <div className="pt-[60px] w-full lg:w-[900] xl:w-[1100px] 2xl:w-[1330px] h-full">
        <User user={userInfo} />
        <Cards posts={posts} setPage={setPage} pagination={pagination} />
      </div>
    </div>
  );
};

export default UserPosts;
