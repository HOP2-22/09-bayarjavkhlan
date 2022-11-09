import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./BlogPost";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
