import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Logo from './index';

describe('Counter', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Logo>⚛</Logo>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the children prop', () => {
    const wrapper = shallow(<Logo>⚛</Logo>);
    expect(wrapper.prop('children')).toEqual('⚛');
  });
});
