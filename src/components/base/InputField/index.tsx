import React from "react";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement>{
  placeholder : string;
  inputValue:string;
  type: string;
  onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({placeholder, inputValue, onChange, type} : InputFieldProps) => {
  return (
    <input type={type} placeholder={placeholder} value={inputValue} onChange={onChange} className="rounded-full px-2 outline outline-2"/>
  )
}

export default InputField