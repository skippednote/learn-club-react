import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Header from './index';

storiesOf('Header', module).add('default', () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
));
