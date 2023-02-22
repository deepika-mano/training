import React from "react";
class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 5,
      num2: 6,
    };
  }
  forceUpdate() {
    console.log("ForceUpdate");
    this.setState({ num1: "10", num2: "20" });
  }
  componentDidMount() {
    console.log("LifeCycle:start  :");
    console.log("Num1:" + this.state.num1);
    console.log("Num2:" + this.state.num2);
    console.log(this.props.a);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Derived State:" + props.a);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("PrevState1" + prevState.num1);
    console.log("PrevStat2" + prevState.num2);
    console.log("PrevProps" + prevProps.a);
  }
  componentDidUpdate() {
    console.log(this.state.num1);
    console.log(this.state.num2);
  }
  change = () => {
    this.setState({ num1: 15, num2: 12 });
  };
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.num1}+{this.state.num2}
        </h2>
        =<h1>{this.state.num1 + this.state.num2}</h1>
        <button onClick={this.change}>Click Me</button>
      </div>
    );
  }
}
export default Lifecycle;
