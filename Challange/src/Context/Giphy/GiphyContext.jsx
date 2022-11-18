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
  const [inputvalue, setValue] = useState("");
  const instance = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${inputvalue}&limit=25&offset=0&rating=g&lang=en`,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/");
        console.log(res, "test");
        SetData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [inputvalue]);
  return (
    <Context.Provider value={{ data, setValue }}>{children}</Context.Provider>
  );
}
