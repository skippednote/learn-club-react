// @flow
import * as React from 'react';
import { Logo as Wrapper } from './Logo.styles';

type Props = {
  children: React.Node
};

const Logo = ({ children }: Props) => <Wrapper>⚛</Wrapper>;
export default Logo;
