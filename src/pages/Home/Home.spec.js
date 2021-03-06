import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Home from './index';

describe('Home', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders Counter component', () => {
    const wrapper = shallow(<Home />);
    const counter = wrapper.find('Counter');
    expect(counter).toHaveLength(1);
  });
});
