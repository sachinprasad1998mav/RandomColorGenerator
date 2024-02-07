import React, { useState } from "react";

function RandomColorGenerator() {
  const [hex, setHex] = useState("#ffffff");

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
    document.body.style.backgroundColor = randomColor; // Change body background color
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    alert("Copied to clipboard!");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="card border-primary"
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div className="card-body">
          <h1>{hex}</h1>
          <button
            className="btn btn-primary mr-2"
            onClick={generateRandomColor}
          >
            Randomize
          </button>
          <button className="btn btn-secondary" onClick={copyToClipboard}>
            Copy to clipboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
