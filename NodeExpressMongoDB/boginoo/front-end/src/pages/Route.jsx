import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "../context/Context";
import Layout from "../components/Layout";
import LogIn from "./LogIn";
import Home from "./Home";
import Entered from "./Entered";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";

const Index = () => {
  return (
    <BrowserRouter>
      <Context>
        <Layout>
          <Routes>
            <Route path="/" element={<Entered />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpassword" element={<ForgetPass />} />
          </Routes>
        </Layout>
      </Context>
    </BrowserRouter>
  );
};

export default Index;
