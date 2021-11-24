// import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import Axios from "axios"
import Menu from "./Menu";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function App() {

  return (
    
    <div className="app">
      <h1>Search Events</h1>
      <Menu/>
    </div>
  );
}

export default App;
