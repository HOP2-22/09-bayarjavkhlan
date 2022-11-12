import React, { useContext } from "react";
import { ColorModeContext } from "./ThemeContext";

const Home = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <div className={`${theme ? "bg-green-100" : "bg-sky-200"} w-full h-screen`}>
      <p> home theme:{theme ? "dark" : "white"}</p>
      <button onClick={changeTheme}>Change</button>
    </div>
  );
};

export default Home;
