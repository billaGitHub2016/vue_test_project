<template>
  <div>
    <p>组件A</p>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  props: {},
  data() {
    return {
      methodACall: '',
    };
  },
  created() {
    console.log('ComponentA created!!');
  },
  computed: {},
  methods: {
    methodA() {
      console.log('组件A的方法A');
      this.methodACall = '调用了组件A的methodA方法';
    },
  },
};
</script>
