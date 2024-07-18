import React from "react";

import "./App.css";

import Home from "./Home";

import About from "./About";


import UseState from "./UseState";
import UseEffect from "./UseEffect";

const App = () => {
  return (
    <>
      <div className="container">
        <Home />
        <About />
       <UseEffect/>
       <UseState/>
      </div>
      <div>Hello World!</div>
      <h1>The Heading</h1>
      <div className="box"></div>
    </>
  );
};

export default App;