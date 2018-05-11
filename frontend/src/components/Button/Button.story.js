import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Index as Button } from './index';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button
      apperence="primary"
      className="increment"
      onClick={action('increment')}
    >
      Button
    </Button>
  ))
  .add('Destructive', () => (
    <Button
      apperence="destructive"
      className="decrement"
      onClick={action('decrement')}
    >
      Button
    </Button>
  ));
