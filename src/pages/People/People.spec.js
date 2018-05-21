import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { People } from './index';
import fixture from './People.fixture';

const props = {
  people: fixture,
  error: null,
  loading: false,
  dispatch: jest.fn()
};

describe('People', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<People {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a loading message when requesting data', () => {
    const props = {
      people: [],
      error: null,
      loading: true,
      dispatch: jest.fn()
    };
    const wrapper = shallow(<People {...props} />);
    const loading = wrapper.find('.loading');
    expect(loading).toHaveLength(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a error message when request fails', () => {
    const props = {
      articles: [],
      error: { message: 'Request failed with status code 404' },
      loading: false,
      dispatch: jest.fn()
    };

    const wrapper = shallow(<People {...props} />);
    const loading = wrapper.find('.error');
    expect(loading).toHaveLength(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders PeopleList component', () => {
    const wrapper = shallow(<People {...props} />);
    const counter = wrapper.find('PeopleList');
    expect(counter).toHaveLength(1);
  });
});
