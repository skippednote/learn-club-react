// @flow
import React, { Component } from 'react'

type State = {
  count: number
}

class Counter extends Component<{}, State> {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }))
  }

  render() {
    const { count } = this.state

    return (
      <div className="counter">
        <button className="increment" onClick={this.increment}>
          +
        </button>

        <span className="count">{count}</span>

        <button className="decrement" onClick={this.decrement}>
          -
        </button>
      </div>
    )
  }
}

export default Counter
