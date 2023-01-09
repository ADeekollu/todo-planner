
import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';

import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
      if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos)
    }

   function handleAddToDo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
   }

   function handleClearToDo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
   }

  return (
    <>
    <Header />
    <ToDoList todos={todos} toggleTodo={toggleTodo} />
    <input ref= {todoNameRef} type="text" />  
    <button onClick={handleAddToDo}> Add ToDo</button>
    <button onClick={handleClearToDo}> Clear ToDo</button>
    <div> {todos.filter(todo => !todo.complete).length} left to do</div>
    </>
   
  );
}

export default App;
