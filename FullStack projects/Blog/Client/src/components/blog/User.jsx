import React from "react";

const User = ({ user }) => {
  return (
    <div className="py-8 flex flex-col ls:flex-row gap-5 ls:items-center pl-14 xs:pl-28 ls:pl-20 lg:pl-28">
      <img
        src={user?.profileImage}
        className="w-[90px] h-[90px] ls:w-[120px] ls:h-[120px] rounded-full object-cover"
        alt=""
      />
      <p className="text-[22px] ls:text-[24px] font-semibold text-[#585858]">
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

export default User;
