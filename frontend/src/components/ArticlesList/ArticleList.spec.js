import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ArticlesList from './index';
import fixture from '../../pages/Articles/Articles.fixture';

const props = {
  articles: fixture,
  error: null,
  loading: false
};

describe('ArticlesList', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ArticlesList {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a list of articles', () => {
    const wrapper = shallow(<ArticlesList {...props} />);
    const articleItem = wrapper.find('ArticleItem');
    expect(articleItem).toHaveLength(2);
  });
});
