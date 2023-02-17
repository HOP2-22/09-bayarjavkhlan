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
<<<<<<< HEAD
import ForgetPassword from "./pages/auth/ForgetPassword";
=======
import ForgetPassword from "./pages/auth/Forgetpassword";
import ChangePassword from "./pages/auth/ChangePassword";
>>>>>>> 3b846f953743c0d98c5fd2eaed6306e08c61532d

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
<<<<<<< HEAD
            <Route path="/register/login" element={<Login />} />
            <Route path="/register/signup" element={<Signup />} />
            <Route
              path="/register/forgetpassword"
              element={<ForgetPassword />}
            />
=======
            <Route path="register">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route
                path="/changepassword/:resetToken"
                element={<ChangePassword />}
              />
            </Route>
            <Route path="products">
              {/* <Route path="" element={<Products />} /> */}
              {/* <Route path=":id" element={<UserPosts />} /> */}
              {/* <Route path="post" element={<Post />} /> */}
            </Route>
            <Route path="admin">
              {/* <Route path="" element={<AdminHome />} /> */}
              {/* <Route path="users" element={<AdminUsers />} /> */}
              {/* <Route path="contacts" element={<AdminContacts />} /> */}
            </Route>
>>>>>>> 3b846f953743c0d98c5fd2eaed6306e08c61532d
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
