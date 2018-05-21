import styled from 'react-emotion';

export const Header = styled('header')`
  text-align: center;
`;
Header.displayName = 'Header';

export const Menu = styled('ul')`
  width: 300px;
  margin: 0 auto 2rem;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
`;
Menu.displayName = 'Menu';

export const MenuItem = styled('li')``;
MenuItem.displayName = 'MenuItem';
