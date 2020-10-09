<template>
  <div>Count is: {{ state.count }}, double is: {{ state.double }}</div>
  <button @click="increment">+</button>
</template>

<script>
import { reactive, computed, defineComponent } from "vue";

export default defineComponent({
  name: "Component1",
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    const increment = () => {
      state.count++;
    };

    return {
      state,
      increment,
    };
  },
});
</script>

<!--
1. vue3 支持 multi-root 节点
2. 使用 defineComponent 来定义组件
3. 使用 Reactive 
-->