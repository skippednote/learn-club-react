import styled, { css } from 'react-emotion';

const styles = {
  base: css({
    padding: '20px',
    color: 'white',
    'text-align': 'center',
    'margin-top': '10px',
    'margin-bottom': '10px'
  }),
  error: css({
    background: '#e3342f'
  }),
  loading: css({
    background: '#3490dc'
  })
};

export const StateMessage = styled('div')`
  ${styles.base};
  ${({ state }) => styles[state]};
`;
StateMessage.displayName = 'StateMessage';
