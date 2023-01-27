import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "../context/Context";
import Layout from "../components/Layout";
import LogIn from "./LogIn";
import Home from "./Home";
import Entered from "./Entered";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPassEmail";
import ChangePassword from "./ChangePassword";
import SwitchHref from "./SwitchHref";
import Verify from "./Verify";
import MobileHistory from "./MobileHistory";

const Index = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Entered />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpassword" element={<ForgetPass />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/:id" element={<SwitchHref />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/history" element={<MobileHistory />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default Index;
