import React from "react";
import axios from "axios";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [verifyValue, setVerifyValue] = useState("");

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const [forgetEmailValue, setForgetEmailValue] = useState("");

  const [userHistory, setUserHistory] = useState([]);
  const [User, setUser] = useState();

  const [links, setLinks] = useState();
  const [show, setShow] = useState(false);
  const [enteredValue, SetEnteredValue] = useState("");

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (!token) {
        return config;
      }
      console.log(token);
      config.headers.set("token", token);
      setUser()
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const register = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/user/register", {
        email: emailValue,
        password: passValue,
      });
      setEmailValue("");
      setPassValue("");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const checkEmail = async () => {
    setLoading(true);
    try {
      const user = await axios.get(
        `http://localhost:8000/user/checkEmail/${forgetEmailValue}`
      );

      navigate("/verifyChange");
      setLoading(false);
      setTimeout(() => {
        setVerifyValue("");
      }, [6000]);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };
  // const checkVerifyCode = async () => {
  //   setLoading(true);
  //   if (verifyCode.data.verifyCode === verifyValue) {
  //     navigate("/changePssword");
  //     setVerifyValue("");
  //     setLoading(false);
  //   } else if (verifyValue === "") {
  //     setLoading(false);
  //     navigate("/forgetPassword");
  //     alert("баталгаажуулах хугацаа дуусcан байна");
  //   } else {
  //     setLoading(false);
  //     alert("алдаа гарлаа");
  //   }
  // };

  const createShort = async (id) => {
    setLoading(true);
    setShow(false);
    try {
      const response = await axios.post("http://localhost:8000", {
        orignalLink: enteredValue,
        ownerId: id || "",
      });
      setLinks(response.data.data);
      SetEnteredValue("");
      setShow(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteShortLink = async (_id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8000/home/${_id}`);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        //SYSTEM
        loading,
        setLoading,

        //AUTHENTICATOR
        checkEmail,
        // checkVerifyCode,

        emailValue,
        setEmailValue,
        passValue,
        setPassValue,

        forgetEmailValue,
        setForgetEmailValue,

        verifyValue,
        setVerifyValue,

        register,
        //LINK
        createShort,
        SetEnteredValue,
        enteredValue,
        links,
        setLinks,
        show,
        setShow,

        //LINK WITH USER
        user: User,
        setUser,
        userHistory,
        deleteShortLink,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
