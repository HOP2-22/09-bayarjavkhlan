import React from "react";
import { useParams } from "react-router";
import users from "../../JS/users.json";
import DetailInfo from "./DetailInfo";

const UserId = () => {
  const { UserId } = useParams();
  return (
    <div className="">
      {users.map((el) => {
        return el.username.toLowerCase() === UserId ? (
          <DetailInfo el={el} />
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default UserId;
