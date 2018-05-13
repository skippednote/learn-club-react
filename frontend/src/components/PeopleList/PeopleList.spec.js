import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PeopleList from './index';

describe('PeopleList', () => {
  it('matches snapshot', () => {
    const props = {
      people: [],
      error: null,
      loading: false
    };
    const wrapper = shallow(<PeopleList {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a loading message when requesting data', () => {
    const props = {
      people: [],
      error: null,
      loading: true
    };
    const wrapper = shallow(<PeopleList {...props} />);
    const loading = wrapper.find('.loading');
    expect(loading).toHaveLength(1);
  });

  it('renders a error message when request fails', () => {
    const props = {
      people: [],
      error: { message: 'Request failed with status code 404' },
      loading: true
    };
    const wrapper = shallow(<PeopleList {...props} />);
    const loading = wrapper.find('.error');
    expect(loading).toHaveLength(1);
  });

  it('renders a list of people when request passes', () => {
    const people = [
      {
        id: 0,
        name: 'Ankur',
        role: 'CEO'
      },
      {
        id: 1,
        name: 'Aliya',
        role: 'Developer'
      },
      {
        id: 2,
        name: 'Bassam',
        role: 'Developer'
      }
    ];
    const props = {
      people: people,
      error: null,
      loading: false
    };
    const wrapper = shallow(<PeopleList {...props} />);
    const peopleItem = wrapper.find('PeopleItem');
    expect(peopleItem).toHaveLength(3);
  });
});
