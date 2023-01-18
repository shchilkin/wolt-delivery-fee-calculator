// create function component with Input name and props

import React from "react";

interface InputProps {
  label: string;
  htmlFor: string;
  type: string;
  step: string;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  supportingText?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  htmlFor,
  type,
  step,
  id,
  name,
  onChange,
  value,
  supportingText,
}) => {
  return (
    <div className={"py-1"}>
      <label className={"pr-3 w-36 inline-block text-right"} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={
          "border-gray-300 border-2 w-64 rounded-md px-2 py-1 inline-block"
        }
        type={type}
        id={id}
        name={name}
        step={step}
        onChange={onChange}
        value={value}
      />
      {supportingText && (
        <h6 className={"inline-block ml-3"}>{supportingText}</h6>
      )}
    </div>
  );
};

export default Input;
