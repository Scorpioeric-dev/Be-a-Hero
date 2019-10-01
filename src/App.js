import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";

import routes from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App">
     <Header/>
      <Nav />

      {routes}
    </div>
  );
}

export default App;
