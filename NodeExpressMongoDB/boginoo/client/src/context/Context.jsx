import React from "react";
import axios from "axios";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSlash = () => {
    navigate("/");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToForgetPass = () => {
    navigate("/forgetpassword");
  };
  const navigateToVerifyCreate = () => {
    navigate("/verifyCreate");
  };
  const navigateToVerifyChange = () => {
    navigate("/verifyChange");
  };
  const navigateToChangePass = () => {
    navigate("/changePassword");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

  const [loading, setLoading] = useState(false);

  const [changePassVerifyValue, setChangePassVerifyValue] = useState("");
  const [verifyValue, setVerifyValue] = useState("");
  const [VerifyCode, setVerifyCode] = useState(null);

  const navigate = useNavigate();

  const [verifyUser, setVerifyUser] = useState(null);
  const [emailValue, setEmailValue] = useState("");

  const [passValue, setPassValue] = useState("");

  const [loginEmailValue, setLoginEmailValue] = useState("");
  const [loginPassValue, setLoginPassValue] = useState("");

  const [forgetEmailValue, setForgetEmailValue] = useState("");
  const [changePassValue, setChangePassValue] = useState("");
  const [forgetUser, setForgetUser] = useState(null);

  const [userHistory, setUserHistory] = useState([]);
  const [User, setUser] = useState();

  const [links, setLinks] = useState();
  const [show, setShow] = useState(false);
  const [enteredValue, SetEnteredValue] = useState("");

  axios.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    config.headers.set("token", token);
    return config;
  });

  const toVerify = async () => {
    setLoading(true);
    try {
      const verifyCode = await axios.post("http://localhost:9000/user/verify", {
        email: emailValue,
      });
      setVerifyCode(verifyCode);

      navigateToVerifyCreate();
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
  const checkVerifyLoginCode = async () => {
    setLoading(true);
    if (VerifyCode.data.verifyCode === verifyValue) {
      createUser();
      setVerifyValue("");
      setLoading(false);
    } else if (verifyValue === "") {
      setLoading(false);
      navigateToLogin();
      setTimeout(() => {
        alert("баталгаажуулах хугацаа дууслаа");
      }, [500]);
    } else {
      setLoading(false);
      setTimeout(() => {
        alert("алдаа гарлаа");
      }, [500]);
    }
  };
  const createUser = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:9000/user/createUser", {
        email: emailValue,
        password: passValue,
      });
      setEmailValue("");
      setPassValue("");
      navigateToLogin();
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const logIn = async () => {
    setLoading(true);
    try {
      const LogedUser = await axios.post("http://localhost:9000/user/login", {
        email: loginEmailValue,
        password: loginPassValue,
      });
      Cookies.set("token", LogedUser.data.token);
      setLoginEmailValue("");
      setLoading(false);
      getUserHistory(loginEmailValue);
      setTimeout(() => {
        navigateToHome();
      }, [300]);
      setTimeout(() => {
        alert(LogedUser.data.message);
      }, [500]);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  const checkEmail = async () => {
    setLoading(true);
    try {
      const user = await axios.get(
        `http://localhost:9000/user/checkEmail/${forgetEmailValue}`
      );
      setForgetUser(user);

      const verifyCode = await axios.post("http://localhost:9000/user/verify", {
        email: forgetEmailValue,
      });

      setVerifyCode(verifyCode);

      navigateToVerifyChange();
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
  const checkVerifyCode = async () => {
    setLoading(true);
    if (VerifyCode.data.verifyCode === verifyValue) {
      navigateToChangePass();
      setVerifyValue("");
      setLoading(false);
    } else if (verifyValue === "") {
      setLoading(false);
      navigateToForgetPass();
      setTimeout(() => {
        alert("баталгаажуулах хугацаа дуусcан байна");
      }, [500]);
    } else {
      setLoading(false);
      setTimeout(() => {
        alert("алдаа гарлаа");
      }, [500]);
    }
  };
  const changePass = async () => {
    setLoading(true);
    try {
      const changedPass = await axios.put(
        `http://localhost:9000/user/changePass`,
        {
          email: forgetEmailValue,
          password: changePassValue,
        }
      );
      navigateToLogin();
      setLoading(false);
      setForgetUser(null);
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

  const getUserHistory = async (email) => {
    try {
      const user = await axios.get(
        `http://localhost:9000/user/checkEmail/${email}`
      );
      const shortsByUser = await axios.get(
        `http://localhost:9000/home/${user?.data?.data?._id}`
      );

      setUser(user.data.data);
      setUserHistory(shortsByUser.data.data);
    } catch (error) {
      setTimeout(() => {
        alert(error.response.data.error.message);
      }, [500]);
    }
  };

  const createShort = async (id) => {
    setLoading(true);
    setShow(false);
    try {
      const response = await axios.post("http://localhost:9000", {
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
      await axios.delete(`http://localhost:9000/home/${_id}`);
      setLoading(false);
      getUserHistory(User?.email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get(`http://localhost:9000/user/getUser`);
        console.log(user.data.data.user);
        if (user.data.data.exp * 1000 < Date.now()) {
          logout();
        }
        getUserHistory(user.data.data.user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    navigateToSlash();
  };

  return (
    <Context.Provider
      value={{
        //SYSTEM
        loading,
        setLoading,
        navigateToLogin,
        navigateToSlash,
        navigateToSignup,
        navigateToForgetPass,
        navigateToHome,

        //AUTHENTICATOR
        logIn,
        checkEmail,
        changePass,
        toVerify,
        checkVerifyLoginCode,
        checkVerifyCode,

        emailValue,
        setEmailValue,
        passValue,
        setPassValue,

        loginEmailValue,
        setLoginEmailValue,
        loginPassValue,
        setLoginPassValue,

        forgetEmailValue,
        setForgetEmailValue,
        forgetUser,

        verifyValue,
        setVerifyValue,
        verifyUser,
        setVerifyUser,
        VerifyCode,

        changePassValue,
        setChangePassValue,
        setChangePassVerifyValue,
        changePassVerifyValue,

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
        getUserHistory,
        deleteShortLink,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
