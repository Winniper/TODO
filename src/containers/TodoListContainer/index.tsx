import React, { useEffect, useState } from 'react'
import AddItemView from '../../views/AddItemView'
import ListItemView from '../../views/ListItemView'
import { TodoListContext } from '../../context/TodolistContext.ts/index.ts'

const TodoListContainer = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList , setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

  const handleChange = (event : any) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    if (inputValue === "") {return null}

    const newTodo = {
      id : Date.now(),
      task: inputValue,
      isCompeleted: false,
    }

    setTodoList((prev) => [...prev, newTodo])

    setInputValue("")
  }

  const deleteFunction = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  useEffect (() => {
    localStorage.setItem("todos",JSON.stringify(todoList))
  }, [todoList])


  return (
    <TodoListContext.Provider value={todoList}>
      <div className='bg-[#DFE2DB] w-2/5 p-4 rounded-md min-h-fit'>
        <span className='font-bold text-5xl '><span className='text-[#E31C25]'>TO</span>DO</span>
        <AddItemView inputValue={inputValue} onChange={handleChange} onClick={handleClick} />
        <hr className='m-2 bg-[#161616] h-0.5' />
        {todoList.map((item) => {
          return <ListItemView task={item.task} onClick={deleteFunction} id={item.id}/>
        })}
      </div>
    </TodoListContext.Provider>
  )
}

export default TodoListContainer