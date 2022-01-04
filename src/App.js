import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

function App() {
  return (
    <>
      <Myuser />
    </>
  );
}

export default App;

function Myuser() {
  let [valid, setValid] = useState(false);

  let [input, setInput] = useState("");
  let [list, setList] = useState([]);

  let [input1, setInput1] = useState("");
  let [list1, setList1] = useState([]);

  let [user1, setUser1] = useState([]);

  let username = (e) => {
    let newInput = e.target.value;
    setInput(newInput);
  };

  let addUsername = () => {
    let newList = [input, ...list];
    setList(newList);
  };

  let password = (e) => {
    let newpassword = e.target.value;
    setInput1(newpassword);
  };

  let addPassword = () => {
    let newList1 = [input1, ...list1];
    setList1(newList1);
  };

  let register = () => {
    if (input == "" || input1 == "") {
      setValid(true);
      return;
    }

    let user = {
      username: input,
      password: input1,
    };

    let uselist = [user, ...user1];
    setUser1(uselist);

    setInput("");
    setInput1("");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-4 text-center bg-primary text-light">
          <h1>Log in</h1>
        </div>
      </div>

      <div className="row justify-content-center height">
        <div className="col-4 text-center bg-primary text-light p-3">
          <input
            className={`w-75 height rounded-3 ${
              input == "" && valid ? "border border-danger" : ""
            }`}
            type="text"
            placeholder="Username"
            value={input}
            onChange={username}
          />
        </div>
      </div>

      <div className="row justify-content-center height mt-4">
        <div className="col-4 text-center bg-primary text-light p-3">
          <input
            className={`w-75 height rounded-3 ${
              input == "" && valid ? "border border-danger" : ""
            }`}
            type="text"
            placeholder="Password"
            value={input1}
            id=""
            onChange={password}
          />
        </div>
      </div>

      <div className="row justify-content-center height mt-4">
        <div className="col-4 text-center bg-primary text-light p-3 ">
          <button
            className="rounded-3 btn btn-secondary"
            type="Log in"
            onClick={register}
          >
            Log In
          </button>
        </div>
      </div>

      <div id="parent">
        {user1.map((item, index) => (
          <div key={index}>
            {item.username}, {item.password}
          </div>
        ))}
      </div>
    </div>
  );
}
