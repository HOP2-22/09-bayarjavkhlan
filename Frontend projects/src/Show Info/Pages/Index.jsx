import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetInfo from "./GetInfo";
import UserId from "./UserId";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetInfo />} />
        <Route path="/:UserId" element={<UserId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
