import styled from 'react-emotion';

export const PeopleItem = styled('li')`
  width: 300px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin: auto;
  line-height: 42px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;
PeopleItem.displayName = 'PeopleItem';
