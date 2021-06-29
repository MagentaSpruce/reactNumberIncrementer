import React, { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  function increaseCounter() {
    // count++;
    setCounter(count + 1);
  }
  function decreaseCounter() {
    setCounter(count - 1);
  }

  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
      </div>
    </div>
  );
}

export default App;
