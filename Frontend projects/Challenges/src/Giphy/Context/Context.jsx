import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

const api = "Aoskv8a0fz4OfuG5I6cGOeFFlQJiGRuf";

export const Context = createContext({
  isDonationModalOpen: false,
  setIsDonationModalOpen: () => void 0,
});

export function Provider({ children }) {
  const [data, SetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputvalue, setValue] = useState("");
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${inputvalue}&limit=25&offset=0&rating=g&lang=en`
      );
      console.log(res);
      SetData(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const resInterceptor = (res) => {
      setErrorMessage("");
      setLoading(false);
      console.log(res);
      return res.data.data;
    };
    const errInterceptor = (err) => {
      console.log(err.message);
      setErrorMessage(err.message);
      return Promise.reject(err);
    };
    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );
    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <Context.Provider value={{ data, setValue, inputvalue, getData, loading }}>
      {children}
    </Context.Provider>
  );
}
