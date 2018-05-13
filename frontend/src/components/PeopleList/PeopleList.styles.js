import styled from 'react-emotion';

export const List = styled('ul')`
  padding-left: 0;
  list-style: none;
`;
List.displayName = 'PeopleList';

export const Item = styled('li')`
  width: 300px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin: auto;
  line-height: 42px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;
Item.displayName = 'PeopleItem';
