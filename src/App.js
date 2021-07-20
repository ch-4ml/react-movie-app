import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("Hello");
  }

  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
    // this.state.count += 1;     // Do not mutate state directly. Use setState()
    // setState function call render function
    // this.setState({ count: this.state.count + 1 });  // Not a good method...
    this.setState(current => ({ count: current.count + 1}));
  }

  sub = () => {
    console.log("sub");
    this.setState(current => ({ count: current.count - 1 }));
  }

  componentDidMount() {
    console.log("I just rendered first!");
  }

  componentDidUpdate() {
    console.log("I just updated!");
  }

  render() {
    console.log("I'm rendering!");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.sub}>Sub</button>
    </div>
    );
  }
}


export default App;
