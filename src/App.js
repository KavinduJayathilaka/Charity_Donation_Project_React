import React from "react";

import "./App.scss";
import Navbar from "./components/Navbar";
import Body from "./container/Body/Body";
import Header from "./container/Header/Header";

const App = () => (
  <div className="app">
    <Navbar></Navbar>
    <Header></Header>
    <Body></Body>
  </div>
);
export default App;
