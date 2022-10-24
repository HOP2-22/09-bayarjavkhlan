import React from "react";
import { Link } from "react-router-dom";


const UserCard = ({userData}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center border w-96 rounded-lg my-5 py-4">
        <img src={userData.avatar} width={100} />
        <div className="">
          <Link to={"/getinfo/" + userData.username} >Name: {userData.username}</Link>
          <p>Data: {userData.date_of_birth}</p>
          <p>Email: {userData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;