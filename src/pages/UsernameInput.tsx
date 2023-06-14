import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const UsernameInputPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleNext = () => {
    navigate("/canvas");
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
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default UsernameInputPage;
