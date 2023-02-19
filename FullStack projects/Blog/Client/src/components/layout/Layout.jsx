import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className={`flex flex-col justify-between min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
