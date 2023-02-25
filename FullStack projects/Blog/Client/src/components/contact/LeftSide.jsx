import axios from "axios";
import React, { useRef, useState } from "react";
import ContactButton from "./ContactButton";
import ContactInput from "./ContactInput";
import ContactHeader from "./ContactHeader";

const LeftSide = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    text: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const handleName = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleText = (event) => {
    setValues({ ...values, text: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/contact", {
        name: values.name,
        email: values.email,
        text: values.text,
      });

      setValues({
        name: "",
        email: "",
        text: "",
      });

      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleRegister = () => {
    values.name.length === 0
      ? nameRef.current.focus()
      : values.email.length === 0
      ? emailRef.current.focus()
      : values.text.length === 0
      ? textRef.current.focus()
      : handleSubmit();
  };

  return (
    <div className="pl-5 md:pl-8 lg:pl-20 xl:pl-32 4xl:pl-48 5xl:pl-72 7xl:pl-88 pt-[60px] md:col-span-3 w-full">
      <div className="h-full-eniig yanzlan px-8 py-10 flex flex-col items-center justify-center w-full md:w-11/12 lg:w-4/5 xl:w-3/4 2xl:w-2/3 4xl:w-3/5 6xl:w-[55%]">
        <ContactHeader />
        <div className="w-full flex flex-col pb-14 lg:pb-16">
          <p className="text-[#5FC3CA] pb-2">Name</p>
          <div className="flex flex-col gap-8 lg:gap-10">
            <ContactInput
              value={values.name}
              refValue={nameRef}
              placeholder={"Write your Name"}
              onChange={handleName}
              handleOnKeyDown={handleOnKeyDown}
            />
            <ContactInput
              value={values.email}
              refValue={emailRef}
              placeholder={"Email Address"}
              onChange={handleEmail}
              handleOnKeyDown={handleOnKeyDown}
            />
            <textarea
              cols="30"
              rows="5"
              value={values.text}
              ref={textRef}
              placeholder="Type your message here"
              className="w-full text-[#5FC3CA] placeholder:text-[#C0C0C0] px-[15px] py-3 rounded-[5px] bg-zinc-200 border-b-2 border-gray-500 focus:outline-none focus:border-[#5FC3CA]"
              onChange={handleText}
              onKeyDown={handleOnKeyDown}
            ></textarea>
          </div>
        </div>
      </div>
      <ContactButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default LeftSide;
