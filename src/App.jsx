import React from "react";
import ToDoList from "./components/ToDoesList";

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1>To Do List Name Header</h1>
        <div className="inputsConteiner">
          <input type="text" name="Name" placeholder="Name" />
          <button>Submit</button>
        </div>{/* inputsConteiner */}
        
      </header>
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
