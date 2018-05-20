import styled from 'react-emotion';

export const Title = styled('h1')`
  padding-left: 0;
  list-style: none;
`;
Title.displayName = 'ArticleTitle';

export const Body = styled('div')`
  padding-left: 0;
  list-style: none;
  text-align: left;
`;
Body.displayName = 'ArticleBody';

export const Tags = styled('ul')`
  padding-left: 0;
  list-style: none;
  display: flex;
`;
Tags.displayName = 'ArticleTags';

export const TagItem = styled('li')`
  background: #39f;
  color: white;
  padding: 5px;
  margin-right: 20px;
  font-size: 14px;
`;
TagItem.displayName = 'ArticleTagItem';
