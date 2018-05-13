import React from 'react';
import { storiesOf } from '@storybook/react';
import PeopleList from './index';

const people = [
  {
    id: 0,
    name: 'Ankur',
    role: 'CEO'
  },
  {
    id: 1,
    name: 'Aliya',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Bassam',
    role: 'Developer'
  }
];

storiesOf('PeopleList', module)
  .add('List', () => (
    <PeopleList people={people} loading={false} error={null} />
  ))
  .add('Loading', () => <PeopleList people={[]} loading={true} error={null} />)
  .add('Error', () => <PeopleList people={[]} loading={false} error={true} />);
