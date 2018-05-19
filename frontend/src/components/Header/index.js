// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Menu, MenuItem, Header as Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
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
      <MenuItem>
        <Link to="/articles">Articles</Link>
      </MenuItem>
    </Menu>
  </Wrapper>
);

export default Header;
