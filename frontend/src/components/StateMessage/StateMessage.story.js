import React from 'react';
import { storiesOf } from '@storybook/react';
import StateMessage from './index';

storiesOf('StateMessage', module)
  .add('Loading', () => (
    <StateMessage state={'loading'}>
      We are loading the content for you...
    </StateMessage>
  ))
  .add('Error', () => (
    <StateMessage state={'error'}>Oh no!! Failed the request.</StateMessage>
  ));
