<template>
  <div>
    <Count msg="hi count test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Count from '@/components/Count.vue';

export default {
  name: 'CountPage',
  components: {
    Count,
  },
};
</script>
