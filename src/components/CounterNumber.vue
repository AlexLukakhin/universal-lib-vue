<template>
  <div>
    <span class="counter-number">{{count}}</span>
    <button @click="clickFun">click</button>
  </div>
</template>
<script>
import { isVue2, ref } from 'vue-demi';

export default {
  name: 'Counter',
  setup() {
    // const { count } = useCounter(props, ctx.emit);
    if (isVue2) {
      console.log('is vue 2!!')
    } else {
      console.log('else-ssssss')
    }
    const count = ref(11);
    const clickFun = () => {
      count.value = count.value + 101;
    }
    return {
      count,
      clickFun,
    }
  },
}
</script>
