import React, { useEffect, useState } from 'react'
import TodoView, { Todo } from '../../views/TodoView'
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
      checked: false,
    }

    setTodoList((prev : Todo[]) => [...prev, newTodo])

    setInputValue("")
  }

  const deleteFunction = (id:number) => {
    setTodoList((prevTodos : Todo[]) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  const handleTick = (id : number) => {
    setTodoList((prevTodos : Todo[]) => {
      return prevTodos.map((todo) => {
        if (todo.id === id){
          return {...todo, checked: !todo.checked }
        }
        return todo
      })
    })
  }

  const handleNavigate = () => {
    navigate('/signup')
  }

  useEffect (() => {
    localStorage.setItem("todos",JSON.stringify(todoList))
  }, [todoList])


  return (
      <TodoView 
      inputValue={inputValue} 
      handleChange={handleChange} 
      handleClick={handleClick} 
      todoList={todoList} 
      deleteFunction={deleteFunction} 
      handleTick={handleTick} 
      handleNavigate={handleNavigate}/>
  )
}

export default TodoListContainer