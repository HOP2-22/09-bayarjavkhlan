import React, { useContext } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Provider } from "../provider/DataContext";

const Layout = ({ children }: any) => {
  const { setTheme, theme } = useContext<any>(Provider);

  return (
    <div
      className={`${
        theme ? "bg-main text-[#efefef]" : "bg-[#f1e7db] text-[#1a202c] "
      } flex flex-col items-center w-full bg-main pb-10 transition`}
    >
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
