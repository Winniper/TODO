import React from 'react'
import CustomButton from '../../components/base/CustomButton'
import CheckBox from '../../components/base/Checkbox'

interface listViewProps {
  task : string;
}

const ListItemView = ({task}:listViewProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <CheckBox/>
        <span className='m-1'>{task}</span>
      </div>
      <CustomButton variant='delete'>Delete</CustomButton>
    </div>
  )
}

export default ListItemView