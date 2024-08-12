import React from 'react'
import AddItemView from '../../views/AddItemView'
import ListItemView from '../../views/ListItemView'

const TodoListContainer = () => {
  return (
    <div className='bg-[#DFE2DB] w-2/5 p-4 rounded-md min-h-fit'>
      <span className='font-bold text-5xl '><span className='text-[#E31C25]'>TO</span>DO</span>
      <AddItemView />
      <hr className='m-2 bg-[#161616] h-0.5' />
      <ListItemView task='Task 1'/>
    </div>
  )
}

export default TodoListContainer