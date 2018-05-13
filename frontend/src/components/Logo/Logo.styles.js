import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}`;

export const LogoDiv = styled('span')`
  font-size: 60px;
  color: #39f;
  animation: ${spin} infinite 20s linear;
  display: inline-block;
`;
LogoDiv.displayName = 'Logo';
