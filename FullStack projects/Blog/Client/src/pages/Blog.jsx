import React, { useContext, useEffect } from "react";
import { Context } from "../provider/Context";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register/login");
      alert("First login to see blogs");
    } else {
      console.log(user);
    }
  }, []);

  return <div className="pt-[60px] w-full h-full grow"></div>;
};

export default Blog;
