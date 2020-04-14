import React, { Component } from "react";
import Board from "./board";

class Checker extends Component {
  state = {
    columns: 0,
  };
  test = 0;
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      columns: (this.test = this.columnInput.value),
    });
  };
  render() {
    return (
      <div className="Checker">
        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => (this.columnInput = input)}
            type="text"
            required
          />
          <button type="submit"> Create NxN checkerboard (Enter 'N')</button>
        </form>
        <div>
          <Board columns={this.test} />
        </div>
      </div>
    );
  }
}

export default Checker;
