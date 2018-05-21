import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Counter from './index';

describe('Counter', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Counter />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('has default count', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().count).toEqual(0);
  });

  it('increments count', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('.increment').simulate('click');
    expect(wrapper.state().count).toEqual(1);
  });

  it('decrements count', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('.decrement').simulate('click');
    expect(wrapper.state().count).toEqual(-1);
  });

  it('updates the DOM on updating count', () => {
    const wrapper = shallow(<Counter />);
    const increment = wrapper.find('.increment');
    const decrement = wrapper.find('.decrement');

    increment.simulate('click');
    increment.simulate('click');
    decrement.simulate('click');

    const count = wrapper.find('.count').children();
    expect(count.text()).toEqual('1');
  });
});
