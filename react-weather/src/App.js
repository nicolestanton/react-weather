import React, { useEffect } from "react";
import logo from "./logo.svg";
import Test from "./Components/Test";
import "./App.css";

const weatherUrl =
  "http://api.weatherapi.com/v1/current.json?key=ce12d95b27ae402395370111202907&q=London";

function App() {
  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  }, []);
  console.log(weatherUrl);
  return (
    <div className="App">
      <Test />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
