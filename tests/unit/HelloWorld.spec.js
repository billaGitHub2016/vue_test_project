import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorldComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function');
  });

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(HelloWorld).$mount();
    expect(vm.message).toBe('bye!');
  });

  // // 挂载元素并返回已渲染的文本的工具函数
  // function getRenderedText(Component, propsData) {
  //   const Constructor = Vue.extend(Component);
  //   const vm = new Constructor({ propsData }).$mount();
  //   return vm.$el.textContent;
  // }

  const factory = (props = {}, datas = {}) => shallowMount(HelloWorld, {
    data: { ...datas },
    propsData: { ...props },
  });

  it('测试组件渲染结果', () => {
    const expectText = 'Welcome to Your Vue.js App';
    const wrapper = factory({
      msg: expectText,
    });
    const renderText = wrapper.find('.hello > h1').text();

    // console.log('renderText = ', renderText)
    // console.log('renderText === expectText', renderText === expectText)
    // console.log('typeof renderText = ', typeof renderText)
    expect(renderText).toBe(expectText);
  });
});
