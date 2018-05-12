// @flow
import * as React from 'react';
import { Button } from './Button.styles';

type Props = {
  children: React.Node,
  apperence: string,
  className?: string,
  onClick?: () => void
};

export const Index = ({ children, apperence, className, onClick }: Props) => (
  <Button apperence={apperence} className={className} onClick={onClick}>
    {children}
  </Button>
);

Index.displayName = 'Button';
