import { useState } from "react";
import Todo from "./Todo";

export default function ContAndTodo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Fazer café", "Estudar"]);

  const increment = () => {
    setCount((c) => c + 1);
    // qnd chega no numero 10 ele add uma nova tarefa a lista todo
    count === 10 && setTodos([...todos, 'teste'])
  };

  return (
    <>
        <Todo todos={todos}/>
        <hr />
        <div style={{backgroundColor: "blueviolet"}}>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
    </>
  )
}
