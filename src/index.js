import React from "react";
import ReactDOM from "react-dom/client";
import Garage from "./Components/Garage";
import Football from "./Components/Football";
import Garage2 from "./Components/Garage2";
import MyForm from "./Components/MyForm";
import App from "./Components/App";
import ContAndTodo
 from "./Components/ContAndTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Garage />
    <Football isGoal={false}/>
    <Garage2/>
    <MyForm/>
    <App/>
    <ContAndTodo/>
  </>
);
