import { useState } from "react";

export function Counter() {
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
