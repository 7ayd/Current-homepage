import React from 'react';
import './App.css';
import "./Header.jsx";
import { Header } from './Header.jsx';
import { Button } from './Components/Button.jsx'
import {EthButton} from './Components/EthButton.jsx'

function App() {
  return (
    <div>

      <Header className = "header" />
     
      <div>
        
        <Button className="button" />
        
        <footer className = "footer">
          &copy; Email: <a href="7ayd@protonmail.com ">7ayd@protonmail.com </a>
        </footer>
      </div>
    </div>
  );
};

export default App;