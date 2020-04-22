import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//import example for redux hook usage
import ReduxHooksExample from "./components/ReduxHooksExample";

import CreateEvent from "./components/events/CreateEvent";
import ViewEvents from "./components/events/ViewEvents";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <header> Neighborhood Chef</header>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/view-events" element={<ViewEvents />} />
      </Routes>

      {/* redux hook example component below */}
      {/* <ReduxHooksExample /> */}
    </div>
  );
}

export default App;
