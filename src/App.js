import React from "react";
import Provider from "./provider/provider";
import Component from "./components/component";
import "./styles.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Component />
      </div>
    </Provider>
  );
}

export default App;
