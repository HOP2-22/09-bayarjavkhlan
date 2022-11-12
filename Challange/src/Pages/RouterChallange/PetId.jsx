import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PetInfo from "./PetInfo";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e136b8af6961b47361447" },
});

const UserId = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/");
        SetData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const { PetId } = useParams();
  return (
    <div className="">
      {Data.map((el, index) => {
        return el.owner.firstName.toLowerCase() === PetId ? (
          <PetInfo el={el} key={index} />
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default UserId;
