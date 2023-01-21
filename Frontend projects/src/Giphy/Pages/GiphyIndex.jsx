import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../Context/Context";
import Giphy from "./Giphy.jsx";

const Index = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Giphy />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Index;
