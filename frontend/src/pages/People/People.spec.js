import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { People } from './index';

describe('People', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<People dispatch={jest.fn()} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders PeopleList component', () => {
    const wrapper = shallow(<People dispatch={jest.fn()} />);
    const counter = wrapper.find('PeopleList');
    expect(counter).toHaveLength(1);
  });
});
