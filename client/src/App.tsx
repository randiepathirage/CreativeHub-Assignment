import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsernameInputPage from "./pages/UsernameInput";
import CanvasPage from "./pages/CanvasPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameInputPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </Router>
  );
};

export default App;
