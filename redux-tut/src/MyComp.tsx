import React from "react";
import { useAppSelector } from "./redux/hooks";

const MyComp: React.FC = () => {
  const count = useAppSelector((s) => s.counter);
  return <h1>My Component {count}</h1>;
};

export default MyComp;
