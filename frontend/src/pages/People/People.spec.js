import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import axios from 'axios';
import People from './index';

describe('Home', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<People />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders PeopleList component', () => {
    const wrapper = shallow(<People />);
    const counter = wrapper.find('PeopleList');
    expect(counter).toHaveLength(1);
  });

  it('requests data on #componentDidMount', async () => {
    const wrapper = shallow(<People />);
    await wrapper.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('/people.json');
  });
});
