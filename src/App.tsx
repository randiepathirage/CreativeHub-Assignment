import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.username);
  const [inputUsername, setInputUsername] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUsername(event.target.value);
  };

  const handleButtonClicked = () => {
    dispatch({ type: "SET_USERNAME", payload: inputUsername });
    setInputUsername("");
  };

  const handleCanvasRender = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "30px Arial";
        context.fillStyle = "black";
        context.fillText(username, 50, 50);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="title">White Page</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputUsername}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <button onClick={handleButtonClicked}>Save</button>
      </div>
      <canvas ref={canvasRef} className="canvas" onLoad={handleCanvasRender} />
    </div>
  );
};

export default App;
