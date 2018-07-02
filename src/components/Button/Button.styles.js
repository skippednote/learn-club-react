import styled, { css } from 'react-emotion';

const styles = {
  base: css({
    display: 'inline-block',
    'text-align': 'center',
    'min-width': '100px',
    border: 'none',
    'line-height': '42px',
    'border-radius': '3px'
  }),
  primary: css({
    background: '#15baf3',
    color: 'white'
  }),
  destructive: css({
    background: '#e40002',
    color: 'white'
  })
};

export const Button = styled('button')`
  ${styles.base};
  ${({ apperence }) => styles[apperence]};
`;
Button.displayName = 'Button';
