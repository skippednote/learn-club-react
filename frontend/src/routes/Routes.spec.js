import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Routes from './index';

describe('Counter', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Routes />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders the Header', () => {
    const wrapper = shallow(<Routes />);
    const header = wrapper.find('Header');
    expect(header).toHaveLength(1);
  });

  it('renders the title', () => {
    const wrapper = shallow(<Routes />);
    const title = wrapper.find('Route');
    expect(title).toHaveLength(2);
  });
});
