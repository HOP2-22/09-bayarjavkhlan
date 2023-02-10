import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex flex-col">
          <NavBar />
          <main>{children}</main>
        </div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
