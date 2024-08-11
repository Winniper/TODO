import { cva } from "class-variance-authority";
import React from "react";

interface customButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  variant : 'add' | 'delete'
}

const buttonVariants = cva("font-semibold",{
  variants : {
    variant:{
      add : 'bg-[#C10206]',
      delete:'',
    }, 
  }
})

const CustomButton = ({variant, ...props} : customButtonProps) => {
  return (
    <button {...props} className={buttonVariants({variant})}></button>
  )
}

export default CustomButton