// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Article } from './Articles.types';
import { getArticlesRequest } from './Articles.actions';
import ArticlesList from '../../components/ArticlesList';

export class Articles extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getArticlesRequest());
  }

  render() {
    const { articles, error, loading }: Props = this.props;
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
    return (
      articles && <ArticlesList className="articlelist" articles={articles} />
    );
  }
}

const mapStateToProps = ({
  articles
}: {
  articles: Array<Article>
}): Array<Article> => articles;

// $FlowIssue
export default connect(mapStateToProps)(Articles);
