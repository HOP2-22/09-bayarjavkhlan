import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
