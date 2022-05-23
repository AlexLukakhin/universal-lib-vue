<template>
  <div>
    <span class="counter-number">{{count}}</span>
    <button @click="clickFun">click</button>
  </div>
</template>
<script>
import { defineComponent, isVue2 } from 'vue-demi';

export default defineComponent({
  name: 'Awesome',
  props: {
    from: {
      type: [Number, String],
      default: 1,
    },
    to: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    duration: {
      type: Number,
      default: 1000, // Duration of animation in ms
    },
    easing: {
      type: String,
      default: 'easeInOutQuad',
    },
    delay: {
      type: Number,
      default: 0, // Delay the animation in ms
    },
  },
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
      console.log('is vue 2')
    } else {
      console.log('else-ssssss')
    }
  }
  // setup(props, ctx) {
  //   const { count } = useCounter(props, ctx.emit);
  //   const clickFun = (): void => {
  //     count.value = count.value + 1;
  //   }
  //   return {
  //     count,
  //     clickFun,
  //   }
  // },
})
</script>
