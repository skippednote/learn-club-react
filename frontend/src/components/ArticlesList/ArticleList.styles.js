import styled from 'react-emotion';

export const List = styled('ul')`
  padding-left: 0;
  list-style: none;
`;
List.displayName = 'ArticleList';

export const Item = styled('li')`
  text-align: left;
  border-bottom: 1px solid #ddd;
  margin-bottom: 25px;
  padding-bottom: 25px;
`;
Item.displayName = 'ArticleItem';

export const More = styled('div')`
  margin-top: 10px;
`;
More.displayName = 'ArticleMore';
