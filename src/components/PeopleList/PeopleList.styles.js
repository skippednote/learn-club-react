import styled from 'react-emotion';

export const List = styled('ul')`
  padding-left: 0;
  list-style: none;
`;
List.displayName = 'PeopleList';

export const Item = styled('li')`
  display: flex;
  justify-content: space-between;
  line-height: 42px;
  border-bottom: 1px solid #ddd;
`;
Item.displayName = 'PeopleItem';
