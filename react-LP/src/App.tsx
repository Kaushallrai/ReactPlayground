import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Todo/Counter";

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
  const [state, setState] = useState<boolean>(true);

  return (
    <div>
      <Todo items={myTodoItems} />
      <button onClick={() => setState(!state)}>Toggle Counter</button>
      {state ? <Counter /> : ""}
    </div>
  );
};

export default App;
