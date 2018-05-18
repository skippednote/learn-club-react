// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props, Dispatch, Person } from './people.types';
import { getPeopleRequest } from './people.actions';
import PeopleList from '../../components/PeopleList';

export class People extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch }: { dispatch: Dispatch } = this.props;
    dispatch(getPeopleRequest());
  }

  render() {
    const { people, error, loading }: Props = this.props;
    return <PeopleList people={people} error={error} loading={loading} />;
  }
}

const mapStateToProps = ({
  people
}: {
  people: Array<Person>
}): Array<Person> => people;

// $FlowIssue
export default connect(mapStateToProps)(People);
