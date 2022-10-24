import React from "react";
import Navbar from "./NavBar"
// import BgImg from "../../IMG/infoWeb.jpg";

const Header = () => {
  return (
    <div className="bg-zinc-200 w-full h-screen">
      <Navbar/>
      <div className="w-2/5 pl-40 relative top-20">

        <div className="text-3xl text-white font-bold">Instant collaborations for remote teams</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
