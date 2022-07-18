import React from "react";
import {hireme} from "../hireme"
import '../App.css';

const Button = () => {
  return(
    <div>
      <button onClick={hireme}>
        click me
      </button>
    </div>
  );
};

export {Button};


