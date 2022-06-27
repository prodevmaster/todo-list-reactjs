import React from "react";
import "./Todo.css";
const Todo = (props) => {
  const deleteOne = () => {
    props.deleteOne(props.id);
  };

  return (
    <div className="Todo">
      <span>{props.id}</span>
      <p>{props.desc}</p>
      <button onClick={deleteOne}>DELETE</button>
    </div>
  );
};

export default Todo;
