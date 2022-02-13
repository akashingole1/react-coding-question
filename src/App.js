import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState([
    { id: 0, name: "A", message: "" },
    { id: 1, name: "B", message: "" },
    { id: 2, name: "C", message: "" },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIdx) => {
    setActiveTab(tabIdx);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const d = [...state];
    d[activeTab].message = value;
    setState(d);
  };

  return (
    <div className="App">
      <div
        style={{
          width: 500,
          display: "flex",
          justifyContent: "space-between",
          margin: "2% auto",
        }}
      >
        <button
          onClick={() => handleClick(0)}
          style={{ background: "lightblue", width: 100, padding: 16 }}
        >
          A
        </button>
        <button
          onClick={() => handleClick(1)}
          style={{ background: "lightgreen", width: 100, padding: 16 }}
        >
          B
        </button>
        <button
          onClick={() => handleClick(2)}
          style={{ background: "orange", width: 100, padding: 16 }}
        >
          C
        </button>
      </div>
      <div
        style={{
          margin: "5% auto",
          background: "lightyellow",
          width: 500,
          padding: 16,
        }}
      >
        <h4>{`You have clicked ${state[activeTab].name}`}</h4>
      </div>
      <div
        style={{
          margin: "5% auto",
        }}
      >
        <input
          style={{
            width: 500,
            padding: 16,
            background: "lightcoral",
            border: "none",
            color: "white",
            fontSize: 16,
            fontWeight: "bolder",
          }}
          type={"text"}
          name="t1"
          value={state[activeTab].message}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
