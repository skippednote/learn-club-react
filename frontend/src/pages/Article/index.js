// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Article as ArticleType } from './Article.types';
import { getArticleRequest } from './Article.actions';
import ArticleItem from '../../components/ArticleItem';
import StateMessage from '../../components/StateMessage';

export class Article extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getArticleRequest(this.props.match.params.id));
  }

  render() {
    const { article, error, loading }: Props = this.props;
    if (error) {
      return (
        <StateMessage className="error" state="error">
          There was an error loading the Article.
        </StateMessage>
      );
    }
    if (loading) {
      return (
        <StateMessage className="loading" state="loading">
          Loading the Article...
        </StateMessage>
      );
    }
    return article && <ArticleItem article={article} />;
  }
}

const mapStateToProps = ({
  article
}: {
  article: Array<ArticleType>
}): Array<ArticleType> => article;

// $FlowIssue
export default connect(mapStateToProps)(Article);
