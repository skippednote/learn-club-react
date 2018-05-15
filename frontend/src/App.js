// @flow
import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './routes';
import { Wrapper } from './App.styles';

class App extends Component<{}> {
  render() {
    return (
      <Wrapper>
        <Header />
        <Routes />
      </Wrapper>
    );
  }
}

export default App;
