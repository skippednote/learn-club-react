// @flow
import React, { Component } from 'react';
import Home from './pages/Home';
import { Wrapper } from './App.styles';

class App extends Component<{}> {
  render() {
    return (
      <Wrapper>
        <Home />
      </Wrapper>
    );
  }
}

export default App;
