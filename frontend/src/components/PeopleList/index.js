// @flow
import React, { Component } from 'react';
import { List, Item } from './PeopleList.styles';
import type { Person } from '../../pages/People/People.types';

type Props = {
  people: Array<Person>
};

class PeopleList extends Component<Props> {
  render() {
    const { people } = this.props;
    return (
      <List className="peoplelist">
        {people.map(({ id, name, role }) => (
          <Item key={id}>
            <span>{name}</span>
            <span>{role}</span>
          </Item>
        ))}
      </List>
    );
  }
}

export default PeopleList;
