import React, { Component } from "react";
import Board from "./board";

class Checker extends Component {
  state = {
    columns: 0,
    color: "",
    shape: "",
  };
  test = 0;
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      columns: (this.test = this.columnInput.value),
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      color: event.target.value,
    });
  };

  selectShape = (event) => {
    event.preventDefault();
    this.setState({
      shape: event.target.value,
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
          <div className="radio">
            <label>
              <input type="radio" value="red" onChange={this.handleChange} />
              Red
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="black" onChange={this.handleChange} />
              Black
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="square" onChange={this.selectShape} />
              Square
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="circle" onChange={this.selectShape} />
              Circle
            </label>
          </div>
        </form>
        <div>
          <Board
            columns={this.test}
            handleChange={this.state.color}
            selectShape={this.state.shape}
          />
        </div>
      </div>
    );
  }
}

export default Checker;
