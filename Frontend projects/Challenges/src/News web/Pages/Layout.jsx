import NavBar from "../../Components/Router/NavBar";
import Footer from "../../Components/Router/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
