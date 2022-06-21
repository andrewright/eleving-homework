import { mount } from '@vue/test-utils'
import FormInput from '@/components/FormInput.vue'

describe('FormInput', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FormInput)
    expect(wrapper.vm).toBeTruthy()
  })
})
