import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import App from './App'

describe('App', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<App />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders Home component', () => {
    const wrapper = shallow(<App />)
    const home = wrapper.find('Home')
    expect(home).toHaveLength(1)
  })
})
