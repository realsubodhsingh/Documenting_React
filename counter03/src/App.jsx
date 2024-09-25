import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  const [count, setCount] = useState(0);

  // we are gonna to pass the values using variables
  let myObj = {
    username: "subodh singh",
    age: 20,
  }; // no longer use in this code

  // remember everytime you are gonna to pass the values in the props you have to firstly declare it like this.
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-red-200 text-black">Tailwind Testing</h1>
      <Card username="subodh singh" btnText="click me" />
      <Card username="Gungun" btnText="visit me" />
    </>
  );
}

export default App;
