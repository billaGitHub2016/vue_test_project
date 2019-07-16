<template>
  <div>
    <h3>{{ countNum }}</h3>
    <input type="text" v-model="addNum">&nbsp;
    <button @click="onAddHandler">累加</button>
    <button @click="onAsyncAddHandler">异步累加</button>

    <p>测试extends</p>
    <component-b/>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapGetters } from 'vuex';
// const { mapGetters } = createNamespacedHelpers('count')
import ComponentB from './ComponentB';

export default {
  name: 'Count',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'hi',
    },
  },
  components: {
    ComponentB,
  },
  data() {
    return {
      addNum: '',
      lovingVue: false,
    };
  },
  computed: {
    ...mapGetters(['countNum']),
  },
  methods: {
    onAddHandler() {
      this.$store.dispatch('Count/addNum', parseFloat(this.addNum));
    },
    onInputHandler(e) {
      this.addNum = e.target.value;
    },
    onAsyncAddHandler() {
      this.$store.dispatch('Count/addNumAsync', parseFloat(this.addNum));
    },
  },
};
</script>
