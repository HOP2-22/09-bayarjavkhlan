import React from "react";

const ContactButton = ({ handleSubmit }) => {
  return (
    <div className="px-8 md:px-0 w-full flex justify-center">
      <button
        className="w-full md:w-auto md:px-8 lg:px-14 py-[10px] mb-24 flex justify-center rounded-[5px] bg-[#5FC3CA] hover:bg-[#3cadb5] transition text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactButton;
