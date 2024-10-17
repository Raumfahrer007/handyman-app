import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/customers")
      .then((res) => res.json())
      .then((data) => setMessage(data[0].name));
  }, []);

  console.log("TES")
  console.log(message)

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>HELLO</h2>
    </div>
  );
}

export default App
