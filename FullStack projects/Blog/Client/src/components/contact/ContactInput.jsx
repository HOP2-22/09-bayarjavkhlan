import React from "react";

const ContactInput = ({
  value,
  placeholder,
  onChange,
  handleOnKeyDown,
  refValue,
}) => {
  return (
    <input
      type="text"
      value={value}
      ref={refValue}
      placeholder={placeholder}
      className="w-full text-[#5FC3CA] placeholder:text-[#C0C0C0] pl-[15px] py-3 rounded-[5px] bg-zinc-200 border-b-2 border-gray-500 focus:outline-none focus:border-[#5FC3CA]"
      onChange={onChange}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default ContactInput;
