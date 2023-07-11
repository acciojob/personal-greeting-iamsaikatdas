
import React from "react";
import './../styles/App.css';
import {useState} from 'react';

const App = () => {
  const [inputTxt, setInputTxt]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <input onChange={(e)=> setInputTxt("Hello "+e.target.value)} />
    </div>
  )
}

export default App
