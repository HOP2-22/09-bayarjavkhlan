import React from "react";
import InputUser from "./InputUser";

const Search = ({ search, setSearch, users, visible, setVisible }) => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        className="bg-white shadow-lg w-full rounded-[8px] focus:outline-none py-[10px] pl-4 placeholder:text-secondary-text text-[16px]"
        placeholder="search user"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setVisible(true);
        }}
      />
      <div
        className={`${
          visible ? "flex" : "hidden"
        } absolute pt-4 w-full flex-col gap-1 bg-gray-50`}
      >
        {users.slice(0, 5).map((item, index) => {
          return <InputUser key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Search;
