// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { Articles } from '../../pages/Articles/Articles.types';
import { List, Item, More } from './ArticleList.styles';

type Props = {
  articles: Articles
};

class ArticleList extends Component<Props> {
  render() {
    const {
      articles: { nodeArticle }
    } = this.props;
    const articleIDs = Object.keys(nodeArticle);

    return (
      <List className="articlelist">
        {articleIDs.map(articleID => (
          <Item key={articleID}>
            <h2>{nodeArticle[articleID].attributes.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: nodeArticle[articleID].attributes.body.summary
              }}
            />
            <More>
              <Link to={`/articles/${articleID}`}>Read more</Link>
            </More>
          </Item>
        ))}
      </List>
    );
  }
}

export default ArticleList;
