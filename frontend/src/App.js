// @flow
import React, { Component } from 'react';
import Routes from './routes';
import { Wrapper } from './App.styles';

class App extends Component<{}> {
  render() {
    return (
      <Wrapper>
        <Routes />
      </Wrapper>
    );
  }
}

export default App;
