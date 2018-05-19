// @flow
import React, { Component } from 'react';
import type { Article } from '../../pages/Article/Article.types';
import { Title, Body } from './ArticleItem.styles';

type Props = {
  article: Article
};

class ArticleItem extends Component<Props> {
  render() {
    const {
      article: {
        data: {
          attributes: { title, body }
        }
      }
    } = this.props;
    return (
      <div className="articleItem">
        <Title className="title">{title}</Title>
        <Body
          className="body"
          dangerouslySetInnerHTML={{
            __html: body.processed
          }}
        />
      </div>
    );
  }
}

export default ArticleItem;
