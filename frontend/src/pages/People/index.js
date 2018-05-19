// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Person } from './People.types';
import { getPeopleRequest } from './People.actions';
import PeopleList from '../../components/PeopleList';
import StateMessage from '../../components/StateMessage';

export class People extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getPeopleRequest());
  }

  render() {
    const { people, error, loading }: Props = this.props;

    if (error) {
      return (
        <StateMessage className="error" state="error">
          There was an error loading list of People.
        </StateMessage>
      );
    }
    if (loading) {
      return (
        <StateMessage className="loading" state="loading">
          Loading the list of People...
        </StateMessage>
      );
    }
    return (
      people && <PeopleList people={people} error={error} loading={loading} />
    );
  }
}

const mapStateToProps = ({
  people
}: {
  people: Array<Person>
}): Array<Person> => people;

// $FlowIssue
export default connect(mapStateToProps)(People);
