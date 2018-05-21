// @flow
import * as React from 'react';
import { StateMessage as Wrapper } from './StateMessage.styles';

type Props = {
  children: React.Node,
  state: string
};

const StateMessage = ({ children, state }: Props) => (
  <Wrapper state={state}>{children}</Wrapper>
);
export default StateMessage;
