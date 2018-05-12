// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { PeopleItem } from './PeopleList.styles';

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

class PeopleList extends Component<{}, State> {
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
      console.log(error);
      this.setState({ error: error, loading: false });
    }
  }

  render() {
    const { people, error, loading } = this.state;
    if (error) {
      return (
        <div className="error">There was an error loading list of People.</div>
      );
    }
    if (loading) {
      return <div className="loading">Loading the list of People...</div>;
    }
    return (
      <ul className="peoplelist">
        {people.map(({ id, name, role }) => (
          <PeopleItem key={id}>
            <span>{name}</span>
            <span>{role}</span>
          </PeopleItem>
        ))}
      </ul>
    );
  }
}

export default PeopleList;
