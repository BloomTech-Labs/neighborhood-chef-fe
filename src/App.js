import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/account/Register.js";

function App() {
  return (
    <div className="App">
      <header> Neighborhood Chef</header>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
