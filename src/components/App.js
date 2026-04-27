
import React, {useState}from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Project", completed: false },
    { id: 3, text: "Practice Coding", completed: false }
  ])
  function handleComplete(id){
   const updatedTodos = todos.map(todo => {
      if(todo.id === id){
         return {...todo, completed: true}
      }
      return todo
   })

   setTodos(updatedTodos)
}

   
  return (
    <div>
        <h1>Parent Component</h1>

        <TodoList
        todos={todos}
        handleComplete={handleComplete}
        />
    </div>
  )
}

export default App
