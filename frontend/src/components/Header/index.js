// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Menu, MenuItem } from './Header.styles';

const Header = () => (
  <header>
    <Link to="/">
      <Logo>⚛</Logo>
    </Link>
    <h1>Learn Club - React</h1>
    <Menu>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/people">People</Link>
      </MenuItem>
    </Menu>
  </header>
);

export default Header;
