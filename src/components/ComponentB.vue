<template>
  <div>
    <p>组件B</p>
    <p v-if="methodACall">{{ methodACall }}</p>
  </div>
</template>

<script>
import ComponentA from './ComponentA';
import mixinsTest from '../mixins/mixinTest';

export default {
  name: 'ComponentB',
  props: {

  },
  data() {
    return {

    };
  },
  extends: ComponentA,
  mixins: [mixinsTest],
  created() {
    console.log('ComponentB created!!');
  },
  mounted() {
    this.methodA();
    this.methodMixin();
  },
  computed: {
  },
  methods: {

  },
};
</script>
