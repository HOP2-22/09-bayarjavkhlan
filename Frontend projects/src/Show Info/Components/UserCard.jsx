import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ userData }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-96 my-5 py-4 border rounded-lg flex items-center">
        <img src={userData.avatar} width={100} alt="avatar" />
        <div className="">
          <Link to={userData.username}>Name: {userData.username}</Link>
          <p>Data: {userData.date_of_birth}</p>
          <p>Email: {userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
