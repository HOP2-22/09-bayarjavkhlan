import { useContext } from "react";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";
import { Context } from "../../provider/Context";

const Layout = ({ children }) => {
  const { path } = useContext(Context);

  return (
    <>
      <div
        className={`flex flex-col justify-between min-h-screen ${
          path === "/services"
            ? "bg-gradient-to-br from-white via-[#bcf1f5] to-white"
            : ""
        }`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
