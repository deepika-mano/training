import React from "react";
class Formula extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10,
      b: 10,
      c: 10,
      d: 10,
    };
  }
  changeA = () => {
    this.setState((prevState) => ({
      a: 5,
    }));
  };
  changeB = () => {
    this.setState((prevState) => ({
      b: 6,
    }));
  };
  changeC = () => {
    this.setState((prevState) => ({
      c: 8,
    }));
  };
  changeD = () => {
    this.setState((prevState) => ({
      d: 3,
    }));
  };
  changeAll = () => {
    this.setState((prevState) => ({
      a: 4,
      b: 6,
      c: 2,
      d: 6,
    }));
  };
  render() {
    return (
      <div>
        <h1>
          {this.state.a * this.state.a +
            this.state.b * this.state.b +
            this.state.c * this.state.c +
            this.state.d * this.state.d +
            2 * this.state.a * this.state.b +
            2 * this.state.a * this.state.c +
            2 * this.state.a * this.state.d +
            2 * this.state.b * this.state.c +
            2 * this.state.b * this.state.d +
            2 * this.state.c * this.state.d}
        </h1>
        <button onClick={this.changeA}>Change A</button>
        <br></br>
        <button onClick={this.changeB}>Change B</button>
        <br></br>
        <button onClick={this.changeC}>Change C</button>
        <br></br>
        <button onClick={this.changeD}>Change D</button>
        <br></br>
        <button onClick={this.changeAll}>Change All</button>
      </div>
    );
  }
}
export default Formula;
