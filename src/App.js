import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Tweet } from "./Components/Tweet.js";
import { Counter } from "./Components/Counter";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-light bg-primary">
          <h1>twitter</h1>
        </div>

        <Tweet />
      </div>
    </div>
  );
}

export default App;
