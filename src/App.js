import React from "react";
import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import Register from "./components/account/Register.js";
import CreateEvent from "./components/events/CreateEvent";
import ViewEvents from "./components/events/ViewEvents";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/other/Settings";
import Recipes from "./components/other/Recipes";
import Notifications from "./components/other/Notifications";
import Messages from "./components/other/Messages";

function App() {
  return (
    <div className="app-container">
      <h1>Neighborhood Chef</h1>
      <Routes>
        x<Route path="/">{/* <Redirect to="/dashboard" /> */}</Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
