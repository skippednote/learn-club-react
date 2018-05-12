// @flow
import React from 'react';
import Counter from '../../components/Counter';
import PeopleList from '../../components/PeopleList';

class Home extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1>Learn Club - React</h1>
        <Counter />
        <PeopleList />
      </div>
    );
  }
}
export default Home;
