import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./HomeHeader.jsx";
import Layout from "./Layout";
import Services from "./Services";
import Contact from "./Contact";
import LogIn from "./LogIn";
import Blog from "./Blog";
import ThemeContext from "../../Context/RouterContext/ThemeContext";
import PostId from "./PostId";

const Index = () => {
  console.log(Route);
  return (
    <ThemeContext>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:Id" element={<PostId />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeContext>
  );
};

export default Index;
