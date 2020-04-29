import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Register from "./components/account/Register.js";
import CreateEvent from "./components/events/CreateEvent";
import ViewEvents from "./components/events/ViewEvents";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
