import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("PapayaWhip");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-1 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="w-20 outline-none bg-red-600 py-1 px-3 rounded-full shadow-md text-white"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="w-20 outline-none bg-green-800 rounded-full px-3 py-1 shadow-md text-white"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="w-20 bg-yellow-500 rounded-full py-1 px-3 text-white shadow-md "
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="w-20 bg-blue-500 rounded-full py-1 px-3 text-white shadow-md "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="w-20 bg-orange-500 rounded-full py-1 px-3 text-white shadow-md "
          >
            Orange
          </button>
          <button
            onClick={() => setColor("purple")}
            className="w-20 bg-purple-500 rounded-full py-1 px-3 text-white shadow-md "
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="w-20 bg-black rounded-full py-1 px-3 text-white shadow-md "
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
