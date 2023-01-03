import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "../context/Context";
import Layout from "../components/Layout";
import LogIn from "./LogIn";
import Loged from "./Loged";
import Home from "./Home";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";

const Index = () => {
  return (
    <BrowserRouter>
      <Context>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Loged" element={<Loged />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetPassword" element={<ForgetPass />} />
          </Routes>
        </Layout>
      </Context>
    </BrowserRouter>
  );
};

export default Index;
