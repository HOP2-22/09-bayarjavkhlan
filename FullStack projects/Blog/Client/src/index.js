import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./provider/Context";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="register">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
            </Route>
            <Route
              path="/register/changePassword/:resetToken"
              element={<ChangePassword />}
            />
            <Route path="blog">
              <Route path="" element={<Blog />} />
              {/* <Route path=":id" element={<UserPosts />} /> */}
              {/* <Route path="post" element={<Post />} /> */}
            </Route>
            <Route path="admin">
              {/* <Route path="" element={<AdminHome />} /> */}
              {/* <Route path="users" element={<AdminUsers />} /> */}
              {/* <Route path="contacts" element={<AdminContacts />} /> */}
            </Route>
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
