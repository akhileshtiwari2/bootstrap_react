import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  
  return (
    <>
      <Navbar aboutText="About us" mode={mode}/>
      <div className="container">
      <TextForm heading="Enter the text below" />
        
      </div>
    </>
  );
}

export default App;
