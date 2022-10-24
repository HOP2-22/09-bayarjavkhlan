import React from "react";

const DetailInfo = ({ el }) => {
  console.log(el);
  return (
    <div className="pl-20 pt-10">
      <p className="text-center font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-400 to-red-700">{el.username}`s full address</p>
      <div className="flex  gap-10 h-40">
        <img src={el.avatar} width={160} alt="" />
        <div className="flex flex-col justify-evenly h-48">
          <div className="flex gap-10">
            <p className="elFont">First_name: {el.first_name}</p>
            <p className="elFont">Last_name: {el.last_name}</p>
          </div>
          <p className="elFont">Date of birth: {el.date_of_birth}</p>
          <p className="elFont">Gender: {el.gender}</p>
        </div>
        <div className=""></div>
      </div>
      <div className="flex flex-col">
        <p className="infoText">
          {el.username}`s <span className="text-gray-700"> Home address</span>
        </p>
        <div className="grid grid-cols-2 gap-6 ">
          <p className="elFont text-lg">Country: {el.address.country}</p>
          <p className="elFont text-lg">City: {el.address.city}</p>
          <p className="elFont text-lg">State: {el.address.state}</p>
          <p className="elFont text-lg">Street Name: {el.address.street_name}</p>
        </div>
        <p className="infoText">Employment</p>
        <div className="grid grid-cols-2 gap-6 ">
          <p className="elFont text-lg">Title: {el.employment.title}</p>
          <p className="elFont text-lg">Key skill: {el.employment.key_skill}</p>
        </div>
        <p className="infoText pt-10">Phone number: {el.phone_number}</p>
        <p className="infoText py-0">Email: {el.email}</p>
      </div>
    </div>
  );
};

export default DetailInfo;
