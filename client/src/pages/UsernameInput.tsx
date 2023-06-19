import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { connect } from "socket.io-client";

const socket = connect("http://localhost:3001");

const UsernameInputPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const goToCanvas = () => {
    navigate("/canvas");
    socket.emit("send_message", { username });
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <button onClick={goToCanvas}>Next</button>
      </div>
    </div>
  );
};

export default UsernameInputPage;
