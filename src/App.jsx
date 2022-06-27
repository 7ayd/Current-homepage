import React from 'react';
import './App.css';
import "./Header.jsx";
import { Header } from './Header.jsx';
function App() {
  return (
  <div>

    <Header />
    <p>
      This is where i put all the things about me. 
    </p>
    <div>
      I am currently working at Snap. Looking to become a software engineer. 
    </div>
    <button onclick="hireme()">
      pushit
    </button>
    
    <footer>
      &copy; Email: <a href="7ayd@protonmail.com ">7ayd@protonmail.com </a>  
      </footer>

  </div>
  );
};

export default App;