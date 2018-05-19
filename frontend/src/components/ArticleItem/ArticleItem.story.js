import React from 'react';
import { storiesOf } from '@storybook/react';
import ArticleItem from './index';
import fixture from '../../pages/Articles/Articles.fixture';

storiesOf('ArticleItem', module).add('Default', () => (
  <ArticleItem article={fixture[0]} />
));
