import React, { useState } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addOne = (todo) => {
    setTodos([todo, ...todos]);
  };
  const deleteOne = (id) => {
    const newTodos = todos.filter((todo, idx) => idx !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <Form addOne={addOne} />
      <TodoList todos={todos} deleteOne={deleteOne} />
    </div>
  );
};

export default App;
