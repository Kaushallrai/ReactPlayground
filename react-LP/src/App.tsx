import React from "react";
import Todo from "./components/Todo";

const myTodoItems = [
  {
    id: 1,
    title: "Learn React",
  },
  { id: 2, title: "Learn TypeScript" },
  {
    id: 3,
    title: "Learn JavaScript",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Todo items={myTodoItems} />
    </div>
  );
};

export default App;
