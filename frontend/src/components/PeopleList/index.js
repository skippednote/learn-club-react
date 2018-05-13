// @flow
import React, { Component } from 'react';
import { PeopleItem } from './PeopleList.styles';

type Person = {
  id: number,
  name: string,
  role: string
};

type Props = {
  people: Array<Person>,
  error: string | null,
  loading: boolean
};

class PeopleList extends Component<Props> {
  render() {
    const { people, error, loading } = this.props;
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
