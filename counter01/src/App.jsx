import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// in this we are gonna to learn about hooks.

function App() {
  // let counter = 1443       .. conventional method

  let [counter, setCounter] = useState(0); // hook

  // below arrow funtion is use to adding value in the button and counter funtion
  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  // now this arrow function is gonna to reduce the value from the point where the current value is:
  const removeValue = () => {
    console.log("clicked", counter);
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>chaii aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
