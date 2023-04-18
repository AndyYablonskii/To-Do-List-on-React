import { useState } from "react";
import "./App.css";
import Inputs from "./Components/Inputs/Inputs";
import ToDoList from "./Components/To Does/To Do List/ToDoList";

function App() {
  const [toDoName, setToDoName] = useState("");
  const [toDoDescription, setToDoDescription] = useState("");

  const [toDoesArray, setToDoesArray] = useState([
    {
      toDoName: "Groceries",
      toDoDescription: "Go to the market and buy milk",
      // status: false,
      id: Math.random(),
    },
  ]);

  const newTask = [
    {
      toDoName,
      toDoDescription,
      id: Math.random(), 
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Inputs
          toDoName={toDoName}
          descriptionTask={toDoDescription}
          toDoesArray={toDoesArray}
          setToDoName={setToDoName}
          setDescriptionTask={setToDoDescription}
          setToDoesArray={setToDoesArray}
          newTask={newTask}
        />
        <ToDoList toDoesArray={toDoesArray} />
      </header>
    </div>
  );
}

export default App;
