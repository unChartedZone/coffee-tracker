import React from "react";
import Btn from "./components/Btn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee Tracker</h1>
        <Btn text={"Find Me Coffee"}>Find Me Coffee</Btn>
        {/* <input className="textfield" placeholder="Find Me Coffee" type="text" /> */}
      </header>
    </div>
  );
}

export default App;
