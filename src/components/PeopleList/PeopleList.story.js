import React from 'react';
import { storiesOf } from '@storybook/react';
import PeopleList from './index';
import fixture from '../../pages/People/People.fixture';

storiesOf('PeopleList', module).add('Default', () => (
  <PeopleList people={fixture} />
));
