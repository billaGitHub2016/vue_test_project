
const mixin = {
  created() {
    console.log('mixin created');
  },
  methods: {
    methodMixin() {
      console.log('methodMixin call');
    },
  },
};

export default mixin;
