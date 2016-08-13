import Index from '../Index'
import {expect} from 'chai'
import {mount} from 'enzyme'
import React from 'react'

describe('Dashboard index', function() {
  it(`Should say 'hello world'`, function() {
    const wrapper = mount(<Index />)

    expect(wrapper).to.have.text('Hello world')
  })
})

