import { configure } from '@storybook/react';
import { injectGlobal } from 'react-emotion';

injectGlobal`
body {
  font-family: 'Lora', serif;
  font-size: 18px;
  line-height: 1.5;
  max-width: 600px;
}

a {
  text-decoration: none;
  color: #39f;
}`;

const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
