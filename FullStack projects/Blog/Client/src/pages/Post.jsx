import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../provider/Context";
import axios from "axios";

const Post = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/register/login");
      alert("First login to see blogs");
    }
  }, []);

  const { id } = useParams();

  const [post, setPost] = useState();

  useEffect(() => {
    const post = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/post/${id}`);
        setPost(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    post();
  }, []);

  return <div className="pt-[100px] w-full h-full grow">{post?.title}</div>;
};

export default Post;
