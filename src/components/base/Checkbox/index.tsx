import React from 'react'

interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement>{
  isChecked : boolean;
  onClick: () => void;
}

const CheckBox = ({isChecked , onClick} : CheckBoxProps) => {
  return (
    <input type="checkbox" checked={isChecked} onClick={onClick} className="w-4 h-4 accent-[#E31C25] m-2"/>
  )
}

export default CheckBox