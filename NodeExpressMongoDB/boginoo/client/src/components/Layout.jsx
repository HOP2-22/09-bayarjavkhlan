import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center h-screen text-ubuntu">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
