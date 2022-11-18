import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../../Context/Giphy/GiphyContext";
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
