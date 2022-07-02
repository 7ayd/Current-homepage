import React from 'react';
import './App.css';
import "./Header.jsx";
import {hireme} from "./hireme.jsx";
import { Header } from './Header.jsx';
function App() {
  return (
  <div>

    <Header />
    <p>
      This is where i put all the things about me. 
    </p>
    <div>
      I am currently working at Snap. Building to become a software engineer. This is where you can find all the tinkering and fun items I am currently working on. 
    </div>
    <button onClick={hireme}>
      pushit
    </button>
    
    <footer>
      &copy; Email: <a href="7ayd@protonmail.com ">7ayd@protonmail.com </a>  
      </footer>

  </div>
  );
};

export default App;