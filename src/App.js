import React, { Component } from "react";
import Checker from "./components/checkerboard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Checker />
      </div>
    );
  }
}

export default App;
