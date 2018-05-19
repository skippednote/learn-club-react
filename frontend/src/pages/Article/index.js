// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Article as ArticleType } from './Article.types';
import { getArticleRequest } from './Article.actions';
import ArticleItem from '../../components/ArticleItem';

export class Article extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getArticleRequest(this.props.match.params.id));
  }

  render() {
    const { article, error, loading }: Props = this.props;
    if (error) {
      return (
        <div className="error">
          There was an error loading list of Articles.
        </div>
      );
    }
    if (loading) {
      return <div className="loading">Loading the list of Articles...</div>;
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
