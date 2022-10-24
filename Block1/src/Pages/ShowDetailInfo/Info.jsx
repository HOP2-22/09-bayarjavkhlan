import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetInfo from "./GetInfo";
import UserId from "./UserId";

function Info() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/getinfo">
          <Route index element={<GetInfo/>} />
          <Route path=":UserId" element={<UserId />} />
        </Route>
        <Route path="/" element={<GetInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Info;
