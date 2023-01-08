import React from "react";
import axios from "axios";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const createUser = async () => {
    try {
      await axios.post("http://localhost:8000/user/createUser", {
        email: emailValue,
        password: passValue,
      });
      handleClickLogIn();
    } catch (error) {
      alert(error.message);
    }
  };

  function handleClickHome() {
    navigate("/home");
  }
  const [loginEmailValue, setLoginEmailValue] = useState("");
  const [loginPassValue, setLoginPassValue] = useState("");
  const logIn = async () => {
    setLoading(true);
    try {
      const LogedUser = await axios.post("http://localhost:8000/user/login", {
        email: loginEmailValue,
        password: loginPassValue,
      });
      setLoginEmailValue("");
      setLoading(false);
      handleClickHome();
      getUserHistory(loginEmailValue);
      setTimeout(() => {
        alert(LogedUser.data.message);
      }, [500]);
    } catch (error) {
      alert(error.response.data.error.message);
      setLoading(false);
    }
  };

  function handleClickChangePass() {
    navigate("/changePassword");
  }
  const [forgetEmailValue, setForgetEmailValue] = useState("");
  const [changePassValue, setChangePassValue] = useState("");
  const [changePassVerifyValue, setChangePassVerifyValue] = useState("");
  const checkEmail = async () => {
    setLoading(true);
    try {
      await axios.get(
        `http://localhost:8000/user/checkEmail/${forgetEmailValue}`
      );

      handleClickChangePass();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };
  function handleClickLogIn() {
    navigate("/login");
  }
  const changePass = async () => {
    setLoading(true);
    try {
      const changedPass = await axios.put(
        `http://localhost:8000/user/changePass`,
        {
          email: forgetEmailValue,
          password: changePassValue,
        }
      );
      handleClickLogIn();
      setLoading(false);
      setTimeout(() => {
        alert(changedPass.data.message);
      }, [500]);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  const [userHistory, setUserHistory] = useState([]);
  const [User, setUser] = useState();
  const getUserHistory = async (email) => {
    try {
      const user = await axios.get(
        `http://localhost:8000/user/checkEmail/${email}`
      );

      const shortsByUser = await axios.get(
        `http://localhost:8000/home/${user?.data?.data?._id}`
      );

      setUser(user.data.data);
      setUserHistory(shortsByUser.data.data);
    } catch (error) {
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  const [links, setLinks] = useState();
  const [show, setShow] = useState(false);
  const [enteredValue, SetEnteredValue] = useState("");
  const createShort = async (id) => {
    setShow(false);
    try {
      const response = await axios.post("http://localhost:8000", {
        orignalLink: enteredValue,
        ownerId: id || "",
      });
      setLinks(response.data.data);
      SetEnteredValue("");
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        //LOADING
        loading: loading,
        setLoading: setLoading,

        //AUTHENTICATOR
        createUser: createUser,
        logIn: logIn,
        checkEmail: checkEmail,
        changePass: changePass,

        emailValue: emailValue,
        setEmailValue: setEmailValue,
        passValue: passValue,
        setPassValue: setPassValue,

        loginEmailValue: loginEmailValue,
        setLoginEmailValue: setLoginEmailValue,
        loginPassValue: loginPassValue,
        setLoginPassValue: setLoginPassValue,

        forgetEmailValue: forgetEmailValue,
        setForgetEmailValue: setForgetEmailValue,

        changePassValue: changePassValue,
        setChangePassValue: setChangePassValue,
        setChangePassVerifyValue: setChangePassVerifyValue,
        changePassVerifyValue: changePassVerifyValue,

        //LINK
        createShort: createShort,
        SetEnteredValue: SetEnteredValue,
        enteredValue: enteredValue,
        links: links,
        show: show,

        //LINK WITH USER
        user: User,
        setUser: setUser,
        userHistory: userHistory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
