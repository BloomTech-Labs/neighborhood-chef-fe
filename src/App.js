import React from "react";
import "./App.css";

//import example for redux hook usage
import ReduxHooksExample from "./components/ReduxHooksExample";

function App() {
  return (
    <div className="App">
      <header> Neighborhood Chef</header>

      {/* redux hook example component below */}
      <ReduxHooksExample />
    </div>
  );
}

export default App;
