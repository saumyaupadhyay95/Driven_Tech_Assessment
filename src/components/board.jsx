import React, { Component } from "react";
import Even from "./even";
import Odd from "./odd";

class Board extends Component {
  board = [];

  render() {
    const num = parseInt(this.props.columns, 10);
    const color = this.props.handleChange;
    const shape = this.props.selectShape;

    this.board = new Array(num).fill().map((val, idx) => {
      return idx % 2 === 0 ? (
        <Even
          columns={this.props.columns}
          color={this.props.color}
          shape={this.props.shape}
          key={idx}
        />
      ) : (
        <Odd
          columns={this.props.columns}
          color={this.props.color}
          shape={this.props.shape}
          key={idx}
        />
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
