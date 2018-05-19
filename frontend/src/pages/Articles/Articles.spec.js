import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Articles } from './index';
import fixture from './Articles.fixture';

describe('Articles', () => {
  it('matches snapshot', () => {
    const props = {
      articles: fixture,
      error: null,
      loading: false,
      dispatch: jest.fn()
    };
    const wrapper = shallow(<Articles {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a loading message when requesting data', () => {
    const props = {
      articles: [],
      error: null,
      loading: true,
      dispatch: jest.fn()
    };
    const wrapper = shallow(<Articles {...props} />);
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

    const wrapper = shallow(<Articles {...props} />);
    const loading = wrapper.find('.error');
    expect(loading).toHaveLength(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders ArticleList component', () => {
    const props = {
      articles: fixture,
      error: null,
      loading: false,
      dispatch: jest.fn()
    };

    const wrapper = shallow(<Articles {...props} />);
    const articleslist = wrapper.find('ArticleList');
    expect(articleslist).toHaveLength(1);
  });
});
