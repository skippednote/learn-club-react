// @flow
import React, { Component } from 'react';
import type { Article } from '../../pages/Article/Article.types';
import { Title, Body, Tags, TagItem } from './ArticleItem.styles';

type Props = {
  article: Article
};

class ArticleItem extends Component<Props> {
  render() {
    const {
      article: { nodeArticle, taxonomyTermTags }
    } = this.props;
    const id = Object.keys(nodeArticle)[0];
    const {
      attributes: { title, body }
    } = nodeArticle[id];
    const tids = taxonomyTermTags && Object.keys(taxonomyTermTags);

    return (
      <div className="articleItem">
        <Title className="title">{title}</Title>
        <Body
          className="body"
          dangerouslySetInnerHTML={{
            __html: body.processed
          }}
        />
        <Tags>
          {Array.isArray(tids)
            ? tids.map(tid => (
                <TagItem key={tid}>
                  {/* $FlowIssue */}
                  {taxonomyTermTags[tid].attributes.name}
                </TagItem>
              ))
            : null}
        </Tags>
      </div>
    );
  }
}

export default ArticleItem;
