import { injectGlobal } from 'react-emotion';

export const styles = `
body {
  margin: 0 auto;
  padding: 0;
  font-family: 'Lora', serif;
  font-size: 18px;
  line-height: 1.5;
  max-width: 600px;
}

a {
  text-decoration: none;
  color: #39f;
}`;

injectGlobal`${styles}`;
