import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="text_shadows title">Bonjour</h2>
      <div className="window">
        <div className="top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="content">
          <h3>Salut</h3>
          <p>Salut salut salut</p>
        </div>
      </div>
    </div>
  );
}

export default App;
