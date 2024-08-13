import React from 'react'

interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement>{
  checked : boolean;
  onClick: () => void;
}

const CheckBox = ({checked , onClick} : CheckBoxProps) => {
  return (
    <input type="checkbox" checked={checked} onClick={onClick} className="w-4 h-4 accent-[#E31C25] m-2"/>
  )
}

export default CheckBox