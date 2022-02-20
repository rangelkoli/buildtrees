import React from 'react'
import { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Temp(){


  return(
    <div>
      <h1>
        Hello World 
      </h1>
    </div>
  )
  
  ReactDOM.render(<Temp />, document.getElementById('root'));
}
export default Temp;