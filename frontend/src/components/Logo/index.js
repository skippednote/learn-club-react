// @flow
import * as React from 'react';
import { LogoDiv } from './Logo.styles';

type Props = {
  children: React.Node
};

const Logo = ({ children }: Props) => <LogoDiv>⚛</LogoDiv>;
export default Logo;
