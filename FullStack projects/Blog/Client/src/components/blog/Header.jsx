import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Search";

import { BsPlus } from "react-icons/bs";

const Header = ({ visible, setVisible, setCreate }) => {
  const [total, setTotal] = useState(0);

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const allPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/post?limit=1000"
        );
        setTotal(response.data.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    allPosts();
  }, []);

  useEffect(() => {
    const allPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/user?sort=createdAt"
        );

        const filteredUsers = response.data.data.filter(
          (user) =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase())
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    };
    allPosts();
  }, [search]);

  return (
    <div className="px-7 lg:px-14 flex flex-col-reverse ls:flex-row pt-7 justify-between items-center">
      <div className="w-[280px] ls:w-[300px] flex flex-col gap-4">
        <div className="text-[24px] font-semibold">Total post {total}</div>
        <Search
          search={search}
          setSearch={setSearch}
          users={users}
          visible={visible}
          setVisible={setVisible}
        />
      </div>
      <div className="w-full ls:w-auto flex justify-end">
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-green-400 to-sky-400 cursor-pointer"
          onClick={() => {
            setCreate(true);
          }}
        >
          <BsPlus className="text-[35px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
