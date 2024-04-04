import React from "react";
class About extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = { name: "pranay", counter: 0 };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount data fetching", this.state);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate return true/false to if render needed");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount cleanup task done here");
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("render");
    return (
      <>
        <div>
          <h3>About Page</h3>
          <div>Name : {this.state.name}</div>
          <div>Color Props : {this.props.color}</div>
        </div>
        <br />
        <div>Counter:{this.state.counter}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <br />
        {React.createElement("b", {}, "PS")}
      </>
    );
  }
}
export default About;
