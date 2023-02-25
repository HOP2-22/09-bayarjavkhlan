import React from "react";
import { Link } from "react-router-dom";

const InputUser = ({ item }) => {
  return (
    <Link
      className="w-full px-3 py-1 bg-gray-200 rounded-[10px] flex justify-between items-center"
      to={`/blog/post/${item?._id}/user`}
    >
      <div className="flex items-center gap-3">
        <img
          src={item.profileImage}
          className="rounded-full w-10 h-10 object-cover"
          alt=""
        />
        <p>
          {item.firstName} {item.lastName}
        </p>
      </div>
      <div className="">{item.userPost.length} posts</div>
    </Link>
  );
};

export default InputUser;
