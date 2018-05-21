import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PeopleList from './index';
import fixture from '../../pages/People/People.fixture';

describe('PeopleList', () => {
  it('renders a list of people when request passes', () => {
    const props = {
      people: fixture,
      error: null,
      loading: false
    };
    const wrapper = shallow(<PeopleList {...props} />);
    const peopleItem = wrapper.find('PeopleItem');
    expect(peopleItem).toHaveLength(3);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
