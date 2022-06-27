import React, { useRef } from "react";
import "./Form.css";

const Form = (props) => {
  const todoRef = useRef();

  const addOne = (e) => {
    e.preventDefault();
    const todo = todoRef.current.value;
    todoRef.current.value = "";
    props.addOne(todo);
  };

  return (
    <form onSubmit={addOne} className="Form">
      <h2>Create Todo</h2>
      <input type="text" required placeholder="todoDesc" ref={todoRef} />
      <button>Add</button>
    </form>
  );
};

export default Form;
