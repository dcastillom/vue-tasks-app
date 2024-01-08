import { mount } from '@vue/test-utils'
import { describe, expect,it } from 'vitest'

import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renders a button with text', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.html()).toContain('increments')
    expect(wrapper.html()).toContain('decrements')
  })
  it('should increment the count when button is clicked', () => {
    const wrapper = mount(BaseButton)
    const buttons = wrapper.findAll('button')
    const button = buttons.find((b) => b.text() === 'increments')
    button.trigger('click').then(() => expect(wrapper.html()).toContain('1'))
  })
  it('should decrement the count when button is clicked', () => {
    const wrapper = mount(BaseButton)
    const buttons = wrapper.findAll('button')
    const button = buttons.find((b) => b.text() === 'decrements')
    button.trigger('click').then(() => expect(wrapper.html()).toContain('-1'))
  })
})
