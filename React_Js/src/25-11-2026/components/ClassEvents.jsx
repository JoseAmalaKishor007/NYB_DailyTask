
import React, { Component } from "react";

class ClassEvents extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    // Event Binding
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {

    return (
      <div>

        <h2>Class Component Events</h2>

        <h3>Count: {this.state.count}</h3>

        <button onClick={this.increaseCount}>
          Increase
        </button>

        <button onClick={this.decreaseCount}>
          Decrease
        </button>

      </div>
    );
  }
}

export default ClassEvents;
