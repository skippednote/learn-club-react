// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Article } from './Articles.types';
import { getArticlesRequest } from './Articles.actions';
import ArticlesList from '../../components/ArticlesList';
import StateMessage from '../../components/StateMessage';

export class Articles extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getArticlesRequest());
  }

  render() {
    const { articles, error, loading }: Props = this.props;
    if (error) {
      return (
        <StateMessage className="error" state="error">
          There was an error loading the list of Articles.
        </StateMessage>
      );
    }
    if (loading) {
      return (
        <StateMessage className="loading" state="loading">
          Loading the list of Articles...
        </StateMessage>
      );
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
