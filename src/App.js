import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//import example for redux hook usage
import ReduxHooksExample from "./components/ReduxHooksExample";
import Register from "./components/account/Register.js";

function App() {
  return (
    <div className="App">
      <header> Neighborhood Chef</header>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* redux hook example component below */}
      <ReduxHooksExample />
    </div>
  );
}

export default App;
