import React, { useEffect, useState } from "react";

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((e) => e.json())
      .then((e) => setTodos(e as TodoItem[]));
  });
  return (
    <div className="App">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
