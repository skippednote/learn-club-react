// @flow
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import type { Person, Props } from './people.types';
import {
  getPeople,
  getPeopleSuccess,
  getPeopleFailure
} from './people.actions';
import PeopleList from '../../components/PeopleList';

export class People extends React.Component<Props> {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPeople());

    try {
      const { data: people }: { data: Array<Person> } = await axios.get(
        '/people.json'
      );
      dispatch(getPeopleSuccess(people));
    } catch (error) {
      dispatch(getPeopleFailure(error));
    }
  }

  render() {
    const { people, error, loading }: Props = this.props;
    return <PeopleList people={people} error={error} loading={loading} />;
  }
}

const mapStateToProps = state => state.PeopleReducer;
export default connect(mapStateToProps)(People);
