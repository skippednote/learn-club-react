import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from './index';

describe('Counter', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the Logo', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find('Logo');
    expect(logo).toHaveLength(1);
  });

  it('renders the title', () => {
    const wrapper = shallow(<Header />);
    const title = wrapper.find('h1');
    expect(title).toHaveLength(1);
    expect(title.text()).toContain('Learn Club - React');
  });
});
