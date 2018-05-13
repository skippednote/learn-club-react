// @flow
import React from 'react';
import axios from 'axios';
import Counter from '../../components/Counter';
import PeopleList from '../../components/PeopleList';
import Logo from '../../components/Logo';

type Person = {
  id: number,
  name: string,
  role: string
};

type State = {
  people: Array<Person>,
  error: string | null,
  loading: boolean
};

class Home extends React.Component<{}, State> {
  state: State = {
    people: [],
    error: null,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const { data: people }: { data: Array<Person> } = await axios.get(
        '/people.json'
      );
      this.setState({ people, loading: false });
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  }
  render() {
    const { people, error, loading } = this.state;

    return (
      <div>
        <Logo>⚛</Logo>
        <h1>Learn Club - React</h1>
        <Counter />
        <PeopleList people={people} error={error} loading={loading} />
      </div>
    );
  }
}
export default Home;
