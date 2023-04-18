import Inputs from "./Components/Inputs/Inputs";
import ToDoList from "./Components/To Does/To Do List/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Inputs />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
