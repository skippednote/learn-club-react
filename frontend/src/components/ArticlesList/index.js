// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../pages/Articles/Articles.types';
import { List, Item, More } from './ArticleList.styles';

type Props = {
  articles: Article
};

class ArticleList extends Component<Props> {
  render() {
    const {
      articles: { data }
    } = this.props;
    return (
      <List className="articlelist">
        {data.map(({ id, attributes: { title, body } }) => (
          <Item key={id}>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: body.summary }} />
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
