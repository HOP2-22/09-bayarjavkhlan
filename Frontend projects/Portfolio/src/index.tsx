import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Portfolio from "./Portfolio";
import Posts from "./Posts";
import Works from "./Works";
import Uses from "./Uses";
import Source from "./Source";
import Context from "./provider/DataContext";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Layout>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="works" element={<Works />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="/sources" element={<Source />} />
          </Routes>
        </Layout>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
