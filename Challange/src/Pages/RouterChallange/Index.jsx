import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./HomeHeader.jsx";
import Layout from "./Layout.jsx";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import LogIn from "./LogIn";
import BlogPostData from "./BlogPostData";
import ThemeContext from "./ThemeContext";
import PetId from "./PetId";

const Index = () => {
  console.log(Route);
  return (
    <ThemeContext>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/BlogPost" element={<BlogPostData />} />
            <Route path=":PetId" element={<PetId />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeContext>
  );
};

export default Index;
