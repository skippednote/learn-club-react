import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ArticleItem from './index';
import fixture from '../../pages/Article/Article.fixture';

const props = {
  article: fixture
};

describe('ArticleItem', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ArticleItem {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a list of people when request passes', () => {
    const wrapper = shallow(<ArticleItem {...props} />);
    const articletitle = wrapper.find('ArticleTitle');
    const articlebody = wrapper.find('ArticleBody');

    expect(articletitle).toHaveLength(1);
    expect(articlebody).toHaveLength(1);
  });
});
