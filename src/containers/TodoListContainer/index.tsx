import React, { useEffect, useState } from 'react'
import TodoView from '../../views/TodoView'
import { useNavigate } from 'react-router-dom'


const TodoListContainer = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [todoList , setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

  const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
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

  const handleNavigate = () => {
    navigate('/signup')
  }

  useEffect (() => {
    localStorage.setItem("todos",JSON.stringify(todoList))
  }, [todoList])


  return (
      <TodoView inputValue={inputValue} handleChange={handleChange} handleClick={handleClick} todoList={todoList} deleteFunction={deleteFunction}  handleNavigate={handleNavigate}/>
  )
}

export default TodoListContainer