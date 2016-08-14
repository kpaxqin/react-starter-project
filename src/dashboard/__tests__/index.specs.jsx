import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import Dashboard from '../index'

describe('Dashboard index', () => {
  it(`Should say 'hello world'`, () => {
    const wrapper = mount(<Dashboard />);

    expect(wrapper).to.have.text('Hello world');
  })
});

