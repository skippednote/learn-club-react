// @flow
import React, { Component } from 'react';
import { Index as Button } from '../Button';
import { Count } from './Counter.styles';

type State = {
  count: number
};

class Counter extends Component<{}, State> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <Button
          apperence="primary"
          className="increment"
          onClick={this.increment}
        >
          +
        </Button>

        <Count className="count">{count}</Count>

        <Button
          apperence="destructive"
          className="decrement"
          onClick={this.decrement}
        >
          -
        </Button>
      </div>
    );
  }
}

export default Counter;
