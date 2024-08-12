import React from "react";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement>{
  inputValue:string;
  onChange : () => void;
}

const InputField = ({inputValue, onChange} : InputFieldProps) => {
  return (
    <input type="text" placeholder="Add Task" value={inputValue} onChange={onChange} className="rounded-full px-2 outline outline-2"/>
  )
}

export default InputField