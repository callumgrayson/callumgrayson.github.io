import React from "react";
import "./App.css";
import AppHeader from "../Headings/AppHeader";
import AppHeading from "../Headings/AppHeading";

function App() {
  return (
    <main className="App">
      <AppHeader />
      <AppHeading>
        Callum Grayson portfolio page <b>Updated</b>
      </AppHeading>
      <div>List of all the bits</div>
    </main>
  );
}

export default App;
