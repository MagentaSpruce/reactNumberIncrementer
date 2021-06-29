# reactNumberIncrementer
Created with React

This is a reusable incrementor component which can be utilized in a number of different situations. 

Building this app helped me to better learn and practice the following:
1) Working with React hooks
2) useState()

A brief overview of the pertinent React code is given below:

useState is imported from the React module. Next useState, which is an array containing two items, is deconstructed for making use of each. Using the useState function call(setCounter) the up and down incrementation is implemented. The count is set to begin at 0. Upon a button click, onClick is triggered which calls the relevant function. That function will call setCounter which updates the count variable, rerendering the useState accordingly.
```React
import React, { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  function increaseCounter() {
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
```

Render.
```React
ReactDOM.render(<App />, document.getElementById("root"));
```

***End Walkthrough
