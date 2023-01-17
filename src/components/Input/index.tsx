// create function component with Input name and props

import React from "react";

interface InputProps {
  label: string;
  htmlFor: string;
  type: string;
  step: string;
  id: string;
  name: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  htmlFor,
  type,
  step,
  id,
  name,
}) => {
  return (
    <div className={"py-1"}>
      <label className={"pr-3 w-36 inline-block"} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={"border-gray-300 border-2 rounded-md px-2 py-1"}
        type={type}
        id={id}
        name={name}
        step={step}
      />
    </div>
  );
};

export default Input;
