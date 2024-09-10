import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTask = (todo) => {
    if (todo !== "") {
      setTodos([...todos, { task: todo, id: uuidv4(), isDone: false }]);
      setNewTodo("");
    }
  };

  const updateTask = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTask = (id) => {
    setTodos(prevTodo => todos.filter(prevTodo => prevTodo.id !== id)
    );
  };

  const markAllDone = () => {
    setTodos(prevTodos => prevTodos.map(todo => ({ ...todo, isDone:true })));
  };

  const resetDone = () => {
    setTodos(prevTodos => prevTodos.map(todo => ({ ...todo, isDone:false })));
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true
          };
        } else {
          return todo;
        }
      })
    )
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={updateTask}
        value={newTodo}
      />
      <button onClick={() => addTask(newTodo)}>Add Task</button>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => { deleteTask(todo.id) }}>Delete</button>
            <button onClick={() => { markAsDone(todo.id) }}>Mark as done</button>
          </li>
        ))}
      </ul>

      <button onClick={() => { markAllDone() }}>Mark all as done</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => { resetDone() }}>Reset Done</button>
    </>
  );
}
