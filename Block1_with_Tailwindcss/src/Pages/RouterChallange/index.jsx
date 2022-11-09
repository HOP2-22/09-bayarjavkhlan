import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Layout from "./Layout.jsx";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import LogIn from "./LogIn";

const Index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Index;
