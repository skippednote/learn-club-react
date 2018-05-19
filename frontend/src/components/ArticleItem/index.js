// @flow
import React, { Component } from 'react';
import type { Article } from '../../pages/Article/Article.types';
import { Title, Body } from './ArticleItem.styles';

type Props = {
  article: Article
};

class ArticleItem extends Component<Props> {
  render() {
    const { article } = this.props;

    return (
      <div className="articleItem">
        <Title className="title">{article.attributes.title}</Title>
        <Body
          className="body"
          dangerouslySetInnerHTML={{
            __html: article.attributes.body.processed
          }}
        />
      </div>
    );
  }
}

export default ArticleItem;
