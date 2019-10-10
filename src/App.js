import React from "react";
import Header from "./components/Header";

import routes from "./routes";
import Room from './components/Room'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      
      {routes}
    </div>
  );
}

export default App;
