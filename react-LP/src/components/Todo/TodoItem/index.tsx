import React from "react";
import "./style.css";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <div>
      <li>{props.title}</li>
    </div>
  );
};

export default TodoItem;
