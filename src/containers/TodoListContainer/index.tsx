import React, { useEffect, useState } from 'react'
import TodoView from '../../views/TodoView'


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
      <TodoView inputValue={inputValue} handleChange={handleChange} handleClick={handleClick} todoList={todoList} deleteFunction={deleteFunction} />
  )
}

export default TodoListContainer