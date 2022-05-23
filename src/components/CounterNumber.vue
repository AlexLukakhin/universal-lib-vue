<template>
  <div>
    <span class="counter-number">{{count}}</span>
    <button @click="clickFun">click</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { useCounter } from '@/composables/useCounter';

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
  setup(props, ctx) {
    const { count } = useCounter(props, ctx.emit);
    const clickFun = (): void => {
      count.value = count.value + 1;
    }
    return {
      count,
      clickFun,
    }
  },
})
</script>
