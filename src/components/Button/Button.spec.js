import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Index as Button } from './index';

describe('Button', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Button apperence="primary" className="increment">
        Button
      </Button>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('call the onClick handler when pressed', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button apperence="primary" className="increment" onClick={onClick}>
        Button
      </Button>
    );
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
