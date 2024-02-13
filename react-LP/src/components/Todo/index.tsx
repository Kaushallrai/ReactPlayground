import React from "react";
import "./style.css";
import TodoItem from "./TodoItem";

interface ITodoItems {
  id: number;
  title: string;
}

interface TodoProps {
  items: ITodoItems[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map((item) => (
          <TodoItem title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
