import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

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

function Tweet() {
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState([]);

  let tweethere = () => {
    let newMsg = [msg, ...message];
    setMessage(newMsg);
    setMsg("");
  };
  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setMsg(newMessage);
  };
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 m-2">
          <input
            className="w-100 rounded"
            value={msg}
            type="text"
            name=""
            id=""
            onChange={changeMessage}
          />
        </div>
        <div className="col-2 m-2">
          <button
            className="rounded bg-primary text-light w-75"
            type="submit"
            onClick={tweethere}
          >
            tweet
          </button>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5-5 bg-info p-4 border border-dark">
          <h4>
            {message.map((item) => (
              <div className="mb-3 border-bottom">
                {item}
                <Counter />
              </div>
            ))}
          </h4>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}

function Counter() {
  let [count, setCounter] = useState(0);

  let increment = () => {
    count = count + 1;
    setCounter(count);
  };

  return (
    <div>
      <h4>
        <span className="cursor" onClick={increment}>
          &#128077;
        </span>
        {count}
      </h4>
    </div>
  );
}
