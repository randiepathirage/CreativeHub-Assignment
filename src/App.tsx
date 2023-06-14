import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.username);

  const handleButtonClicked = () => {
    dispatch({ type: "SAVE_USERNAME", payload: username });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USERNAME", payload: event.target.value });
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <button onClick={handleButtonClicked}>Print Username</button>
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default App;
