import React from "react";
import axios from "axios";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const Provider = ({ children }) => {
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
  const navigateToChangePass = () => {
    navigate("/changePassword");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

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

  const toVerify = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/user/", {
        email: emailValue,
      });

      navigate("/verifyCreate");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        alert(error);
      }, [500]);
    }
  };

  const checkVerifySignupCode = async () => {
    setLoading(true);
    if (verifyCode.data.verifyCode === verifyValue) {
      register();
      setVerifyValue("");
      setLoading(false);
    } else if (verifyValue === "") {
      setLoading(false);
      navigate("/login");
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

  const register = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/user/register", {
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

  const checkEmail = async () => {
    setLoading(true);
    try {
      const user = await axios.get(
        `http://localhost:8000/user/checkEmail/${forgetEmailValue}`
      );

      setVerifyCode(user);

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
  const checkVerifyCode = async () => {
    setLoading(true);
    if (verifyCode.data.verifyCode === verifyValue) {
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
      getUserHistory(User?.email);
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
        navigateToLogin,
        navigateToSlash,
        navigateToSignup,
        navigateToForgetPass,
        navigateToHome,

        //AUTHENTICATOR
        checkEmail,
        toVerify,
        checkVerifySignupCode,
        checkVerifyCode,

        emailValue,
        setEmailValue,
        passValue,
        setPassValue,

        forgetEmailValue,
        setForgetEmailValue,

        verifyValue,
        setVerifyValue,
        verifyCode,

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

export default Provider;
