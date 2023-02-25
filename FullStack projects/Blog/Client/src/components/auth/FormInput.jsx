import React from "react";

const FormInput = ({
  type,
  placeholder,
  Style,
  stateChanger,
  FormRef,
  value,
  keyDown,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={Style}
      onChange={stateChanger}
      ref={FormRef}
      value={value}
      onKeyDown={keyDown}
    />
  );
};

export default FormInput;
