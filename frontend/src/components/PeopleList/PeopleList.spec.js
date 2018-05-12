import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import axios from 'axios';
import PeopleList from './index';

describe('PeopleList', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<PeopleList />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('requests data on #componentDidMount', async () => {
    const wrapper = shallow(<PeopleList />);
    await wrapper.instance().componentDidMount();
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('/people.json');
  });

  it('fetches list of person on #componentDidMount', async () => {
    const wrapper = shallow(<PeopleList />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('people')).toHaveLength(3);
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders an error if request fails', async () => {
    const wrapper = shallow(<PeopleList />);
    await wrapper.instance().componentDidMount();
    wrapper.setState({
      error: { message: 'Request failed with status code 404' }
    });
    const error = wrapper.find('.error');
    expect(error.text()).toContain(
      'There was an error loading list of People.'
    );
  });
});
