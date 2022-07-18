import React from "react";
import '../App.css';
const { ethers } = require("ethers");
const apiKey = process.env['API_KEY'];
const provider = new ethers.providers.JsonRpcProvider(apiKey);

const EthButton = () => {
  return(
    <div>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John"></input>
      </form>
    </div>
  );
};

export {EthButton};

