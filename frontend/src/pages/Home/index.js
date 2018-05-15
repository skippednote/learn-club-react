// @flow
import React from 'react';
import Counter from '../../components/Counter';
import Logo from '../../components/Logo';

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <Logo>⚛</Logo>
        <h1>Learn Club - React</h1>
        <Counter />
      </div>
    );
  }
}
export default Home;
