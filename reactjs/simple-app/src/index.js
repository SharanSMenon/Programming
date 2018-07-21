import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button/Button";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React App 1</h1>
        <h2>Created by VS Code</h2>
        <Button text="Click this button" />
        <p>Clicks:</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
