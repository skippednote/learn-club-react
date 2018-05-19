import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}`;

export const Logo = styled('span')`
  font-size: 60px;
  color: #39f;
  animation: ${spin} infinite 20s linear;
  display: inline-block;
  text-align: center;
`;
Logo.displayName = 'Logo';
