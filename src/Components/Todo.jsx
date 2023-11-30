import { memo } from "react";

function Todo({ todos }) {
  console.log("child render");

  return (
    <>
      <h2 style={{color: "red"}}>My Todos</h2>
      {Array.isArray(todos) ? (
        todos.map((todo, index) => <p key={index}>{todo}</p>)
      ) : (
        <p>Oops! something went wrong with the todos list.</p>
      )}
    </>
  );
}

export default memo(Todo);
