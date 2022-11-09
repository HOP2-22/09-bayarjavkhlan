import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./BlogPost";
import ThemeContext from "./ThemeContext";

const Index = () => {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
};

export default Index;
