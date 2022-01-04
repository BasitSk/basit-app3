import { useState } from "react";
import { Counter } from "./Counter";

export function Tweet() {
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
