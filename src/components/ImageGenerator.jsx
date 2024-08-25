import React, { useState } from "react";
import "../App.css";

function ImageGernerator() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = () => {
    console.log(inputValue);
  };
  return (
    <div className="image-container">
      <h2 className="heading">Image Generator</h2>
      <div className="button-container">
        <input
          type="text"
          id="text-input"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button id="generate-button" onClick={handleInputChange}>
          Generate
        </button>
      </div>
      <div className="image-grip">
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
      </div>
    </div>
  );
}

export default ImageGernerator;
