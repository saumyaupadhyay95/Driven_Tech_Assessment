import React, { Component } from "react";
import Even from "./even";
import Odd from "./odd";

class Board extends Component {
  board = [];
  render() {
    const num = parseInt(this.props.columns, 10);
    this.board = new Array(num).fill().map((val, idx) => {
      return idx % 2 === 0 ? (
        <Even columns={this.props.columns} key={idx} />
      ) : (
        <Odd columns={this.props.columns} key={idx} />
      );
    });

    return (
      <div id="parent">
        <div>{this.board}</div>
      </div>
    );
  }
}

export default Board;
