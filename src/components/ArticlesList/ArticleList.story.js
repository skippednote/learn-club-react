import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import ArticleList from './index';
import fixture from '../../pages/Articles/Articles.fixture';

storiesOf('ArticleList', module).add('Default', () => (
  <MemoryRouter>
    <ArticleList articles={fixture} loading={false} error={null} />
  </MemoryRouter>
));
