import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import axios from 'axios';
import { People } from './index';

describe('People', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<People dispatch={jest.fn(() => {})} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  xit('renders PeopleList component', () => {
    const wrapper = shallow(<People dispatch={jest.fn(() => {})} />);
    const counter = wrapper.find('PeopleList');
    expect(counter).toHaveLength(1);
  });

  xit('requests data on #componentDidMount', async () => {
    const wrapper = shallow(<People dispatch={jest.fn(() => {})} />);
    await wrapper.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('/people.json');
  });
});
