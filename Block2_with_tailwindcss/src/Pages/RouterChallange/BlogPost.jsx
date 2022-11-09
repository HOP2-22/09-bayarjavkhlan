import React from "react";
import NavBar from "./NavBar";
import Data from "./Data";
import { useContext } from "react";
import { ColorModeContext } from "./ThemeContext";

const BlogPost = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);

  return (
    <div className={`${theme ? "bg-gray-200" : "bg-slate-800"}`}>
      <NavBar />
      <Data />
    </div>
  );
};

export default BlogPost;
