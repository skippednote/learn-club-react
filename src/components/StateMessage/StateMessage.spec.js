import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import StateMessage from './index';

describe('StateMessage', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<StateMessage state="error">Error</StateMessage>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders children content', () => {
    const wrapper = shallow(
      <StateMessage state="loading">Loading</StateMessage>
    );
    expect(wrapper.children().text()).toContain('Loading');
  });
});
