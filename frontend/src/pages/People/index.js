// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Props } from './people.types';
import { getPeopleRequest } from './people.actions';
import PeopleList from '../../components/PeopleList';

export class People extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPeopleRequest());
  }

  render() {
    const { people, error, loading }: Props = this.props;
    return <PeopleList people={people} error={error} loading={loading} />;
  }
}

const mapStateToProps = ({ people }) => people;
export default connect(mapStateToProps)(People);
