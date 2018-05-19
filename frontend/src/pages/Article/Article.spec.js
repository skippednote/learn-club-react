import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Article } from './index';
import fixture from '../Articles/Articles.fixture';

const defaultProps = {
  dispatch: jest.fn(),
  match: {
    params: {
      id: '1b14a3z'
    }
  }
};

describe('Articles', () => {
  it('matches snapshot', () => {
    const props = {
      ...defaultProps,
      article: fixture[0],
      error: null,
      loading: false
    };
    const wrapper = shallow(<Article {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a loading message when requesting data', () => {
    const props = {
      ...defaultProps,
      article: [],
      error: null,
      loading: true
    };
    const wrapper = shallow(<Article {...props} />);
    const loading = wrapper.find('.loading');
    expect(loading).toHaveLength(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a error message when request fails', () => {
    const props = {
      ...defaultProps,
      articles: [],
      error: { message: 'Request failed with status code 404' },
      loading: false
    };

    const wrapper = shallow(<Article {...props} />);
    const loading = wrapper.find('.error');
    expect(loading).toHaveLength(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders Article component', () => {
    const props = {
      ...defaultProps,
      article: fixture[0],
      error: null,
      loading: false
    };
    const wrapper = shallow(<Article {...props} />);
    const articleitem = wrapper.find('ArticleItem');
    expect(articleitem).toHaveLength(1);
  });
});
