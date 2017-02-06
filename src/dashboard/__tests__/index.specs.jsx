import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import { DashboardComponent } from '../index'

describe('Dashboard index', () => {
  it(`Should say 'hello world'`, () => {
    const wrapper = mount(<DashboardComponent logout={() => {}}/>);

    expect(wrapper).to.contains.text('Hello world');
  })
});

