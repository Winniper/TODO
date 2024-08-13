import React from 'react'
import CustomButton from '../../components/base/CustomButton'
import CheckBox from '../../components/base/Checkbox'



interface listViewProps {
  id: number;
  task : string;
  checked : boolean;
  onClick : () => void;
}

const ListItemView = ({id,task, checked, onClick}:listViewProps) => {
  return (
    <div className='flex items-center justify-between m-2'>
      <div className='flex items-center'>
        <CheckBox/>
        <span className='m-1'>{task}</span>
      </div>
      <CustomButton variant='delete' onClick={() => {onClick(id)}}>Delete</CustomButton>
    </div>
  )
}

export default ListItemView