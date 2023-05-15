import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#808080';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text below" mode={mode} />
      </div>
    </>
  );
}

export default App;
