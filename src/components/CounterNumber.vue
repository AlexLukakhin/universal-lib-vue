<template>
  <div>
    <span class="counter-number">{{count}}</span>
    <button @click="clickFun">click</button>
  </div>
</template>
<script>
import { defineComponent, isVue2 } from 'vue-demi';

export default defineComponent({
  name: 'Awesomennnn',
  data() {
    return {
      count: 33,
    }
  },
  methods: {
    clickFun() {
      this.count = this.count + 3;
    }
  },
  mounted() {
    if (isVue2) {
      console.log('is vue 2!')
    } else {
      console.log('else-ssssss')
    }
  }
})
</script>
