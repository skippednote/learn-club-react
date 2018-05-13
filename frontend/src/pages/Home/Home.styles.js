import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}`;

export const Logo = styled('div')`
  font-size: 60px;
  color: #39f;
  animation: ${spin} infinite 20s linear;
`;
Logo.displayName = 'Logo';
