import { cva } from "class-variance-authority";
import React, { ReactNode } from "react";
import clsx from 'clsx'

interface customButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  variant : 'add' | 'delete';
  children : ReactNode;
  className? : string;
  
}

const buttonVariants = cva("rounded-full p-2 px-5 hover:opacity-85",{
  variants : {
    variant:{
      add : 'bg-[#E31C25]',
      delete:'bg-[#BB000E]',
    }, 
  }
})

const CustomButton = ({children, variant, className, ...props} : customButtonProps) => {
  return (
    <button {...props} className={clsx(buttonVariants({variant}), className)}>{children}</button>
  )
}

export default CustomButton