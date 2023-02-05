import React from "react";
import { useState } from "react";
import users from "../../JS/users.json";
import UserCard from "../Components/UserCard";

function GetInfo() {
  const [output, setOutput] = useState(users);
  const Search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <input
          type={"text"}
          className="bg-rose-500 w-72 h-12 pl-7 my-10 rounded-lg text-rose-100 text-lg"
          onChange={(el) => {
            Search(el.target.value);
          }}
        />
      </div>
      {output.length === 0 && <div>No User Found</div>}
      {output.map((userData, index) => {
        return (
          <>
            <UserCard userData={userData} />
          </>
        );
      })}
    </div>
  );
}

export default GetInfo;
