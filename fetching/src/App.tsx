import { useState, useEffect } from "react";
import axios from "axios";

interface TodoItems {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItems[]>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div className="App">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
