// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../pages/Articles/Articles.types';
import { List, Item, More } from './ArticleList.styles';

type Props = {
  articles: Array<Article>
};

class ArticleList extends Component<Props> {
  render() {
    const { articles } = this.props;
    return (
      <List className="articlelist">
        {articles.map(({ id, attributes }) => (
          <Item key={id}>
            <h2>{attributes.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: attributes.body.summary }}
            />
            <More>
              <Link to={`/articles/${id}`}>Read more</Link>
            </More>
          </Item>
        ))}
      </List>
    );
  }
}

export default ArticleList;
