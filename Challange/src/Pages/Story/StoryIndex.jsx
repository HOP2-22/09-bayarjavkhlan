import { BrowserRouter, Routes, Route } from "react-router-dom";
import Giphy from "./Giphy.jsx";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Giphy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
