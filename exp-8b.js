import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter Example</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment} style={{ marginRight: "10px" }}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
