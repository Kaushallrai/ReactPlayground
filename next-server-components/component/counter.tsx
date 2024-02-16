"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter {0}</h3>
      <button className="bg-slate-600 text-white p-2 rounded-lg">
        Increment
      </button>
    </div>
  );
};

export default Counter;
