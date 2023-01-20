import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/Context";
import Layout from "./components/Layout";
import Body from "./page/Body";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-[14px] h-[14px] rounded-full bg-main absolute top-14 left-8"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-main absolute top-[113px] left-[407px]"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-main absolute top-[113px] left-[407px]"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-[#0047FF] absolute top-[22px] left-[556px]"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-[#0047FF] absolute top-[116px] left-[126px]"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-[#0047FF] absolute top-[116px] left-[126px]"></div>
      <div className="w-[6px] h-[6px] rounded-full bg-[#FF0000] absolute top-[46px] left-[120px]"></div>
      <div className="w-[6px] h-[6px] rounded-full bg-[#0047FF] absolute top-[6px] left-[332px]"></div>
      <div className="w-[6px] h-[6px] rounded-full bg-[#0047FF] absolute top-[206px] left-[475px]"></div>
      <div className="w-[6px] h-[6px] rounded-full bg-[#24FF00] absolute top-[176px] left-[335px]"></div>
      <div className="w-[8px] h-[8px] rounded-full bg-[#4D4D4D] absolute top-[49px] left-[446px]"></div>
      <ThemeContext>
        <Layout>
          <Routes>
            <Route path="home" element={<Body />} />
          </Routes>
        </Layout>
      </ThemeContext>
    </BrowserRouter>
  );
};
export default App;
