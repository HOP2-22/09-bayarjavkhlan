import React from "react";

const DetailInfo = ({ el }) => {
  console.log(el);
  return (
    <div className="pl-20 pt-10">
      <p className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-400 to-red-700">
        {el.username}`s full address
      </p>
      <div className="h-40 flex gap-10">
        <img src={el.avatar} width={160} alt="" />
        <div className="h-48 flex flex-col justify-evenly">
          <div className="flex gap-10">
            <p className="detailInfoFont">First_name: {el.first_name}</p>
            <p className="detailInfoFont">Last_name: {el.last_name}</p>
          </div>
          <p className="detailInfoFont">Date of birth: {el.date_of_birth}</p>
          <p className="detailInfoFont">Gender: {el.gender}</p>
        </div>
        <div className=""></div>
      </div>
      <div className="flex flex-col">
        <p className="detailInfoText">
          {el.username}`s <span className="text-gray-700"> Home address</span>
        </p>
        <div className="grid grid-cols-2 gap-6 ">
          <p className="detailInfoFont text-lg">
            Country: {el.address.country}
          </p>
          <p className="detailInfoFont text-lg">City: {el.address.city}</p>
          <p className="detailInfoFont text-lg">State: {el.address.state}</p>
          <p className="detailInfoFont text-lg">
            Street Name: {el.address.street_name}
          </p>
        </div>
        <p className="detailInfoText">Employment</p>
        <div className="grid grid-cols-2 gap-6 ">
          <p className="detailInfoFont text-lg">Title: {el.employment.title}</p>
          <p className="detailInfoFont text-lg">
            Key skill: {el.employment.key_skill}
          </p>
        </div>
        <p className="detailInfoText pt-10">Phone number: {el.phone_number}</p>
        <p className="detailInfoText py-0">Email: {el.email}</p>
      </div>
    </div>
  );
};

export default DetailInfo;
