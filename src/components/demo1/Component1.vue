<template>
  <div>{{ name }}</div>
  <div>
    Count is: {{ state.count }}, double is: {{ state.double }}, treble is:
    {{ treble }}
  </div>
  <button @click="increment">+</button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Component1",
  data() {
    return {
      name: "jack",
    };
  },

  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    const treble = computed(() => state.count * 3);

    const increment = () => {
      state.count++;
    };
    return {
      state,
      increment,
      treble,
    };
  },
};
</script>

<!--
1. vue3 支持 multi-root 节点
2. setup 可以与之前的 options 模式共存

-->