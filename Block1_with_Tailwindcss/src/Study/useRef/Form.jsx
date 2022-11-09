import React, { useState, useRef } from "react";

const Form = () => {
  const [list, setList] = useState({
    name: "",
    email: "",
    age: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const SubmitEvent = () => {
    if (list.name.length === 0) {
      nameRef.current.focus();
    } else if (list.email.length === "") {
      emailRef.current.focus();
    } else if (list.age.length === "") {
      ageRef.current.focus();
    } else {
      console.log(list);
    }
  };
  return (
    <div
      className="flex flex-col pt-32 items-center gap-10"
      onKeyDown={(el) => {
        if (el.key === "Enter") SubmitEvent();
      }}
    >
      <div className="flex w-104 gap-5 items-center">
        <p className="text-lg font-md divide-y-2">Sign Up</p>
        <div className="h-0.5 flex-1 bg-gray-200"></div>
      </div>
      <div className="w-104 flex flex-col gap-4">
        <p className="text-gray-700 text-lg">Name</p>
        <input
          ref={nameRef}
          placeholder="Write your name"
          type={"text"}
          className="formInputText"
          onChange={(el) => {
            setList({ ...list, name: el.target.value });
          }}
        />
      </div>
      <div className="w-104 flex flex-col gap-4">
        <p className="text-gray-700 text-lg">Email</p>
        <input
          ref={emailRef}
          placeholder="Write your email"
          type={"email"}
          className="formInputText"
          onChange={(e) => {
            setList({ ...list, email: e.target.value });
          }}
        />
      </div>
      <div className="w-104 flex flex-col gap-4">
        <p className="text-gray-700 text-lg">Age</p>
        <input
          ref={ageRef}
          placeholder="Write your name"
          type={"number"}
          className="formInputText"
          onChange={(e) => {
            setList({ ...list, age: e.target.value });
          }}
        />
      </div>
      <button
        className="button text-white"
        onClick={() => {
          SubmitEvent();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;