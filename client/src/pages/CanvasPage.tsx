import React, { useEffect, useRef, useState } from "react";
import { connect } from "socket.io-client";

const socket = connect("http://localhost:3001");

const CanvasPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [receivedUsername, setReceivedUsername] = useState("");

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

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedUsername(data.username);
    });
  }, [socket]);

  return (
    <div>
      <h1>{receivedUsername}</h1>
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default CanvasPage;
