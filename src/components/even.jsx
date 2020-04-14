import React, { Component } from "react";
// import Board from "./board";
// import Odd from "./odd";

class Even extends Component {
  render() {
    const num = parseInt(this.props.columns, 10);
    const even = new Array(num).fill().map((val, idx) => {
      return idx % 2 === 0 ? (
        <div className="cell even" key={idx}></div>
      ) : (
        <div className="cell odd" key={idx}></div>
      );
    });
    return <div className="container">{even}</div>;
  }
}

export default Even;
