import React, { Component } from "react";
// import Board from "./board";
// import Even from "./even";

class Odd extends Component {
  render() {
    const num = parseInt(this.props.columns, 10);
    const odd = new Array(num).fill().map((val, idx) => {
      return idx % 2 === 0 ? (
        <div className="cell odd" key={idx}></div>
      ) : (
        <div className="cell even" key={idx}></div>
      );
    });
    return <div className="container">{odd}</div>;
  }
}

export default Odd;
