import React from "react";
import Todo from "./Todo/Todo";
import "./TodoList.css";
const TodoList = (props) => {
  const deleteOne = (id) => {
    props.deleteOne(id);
  };
  return (
    <div className="TodoList">
      {props.todos.map((item, idx) => (
        <Todo deleteOne={deleteOne} id={idx} key={idx} desc={item} />
      ))}
    </div>
  );
};

export default TodoList;
