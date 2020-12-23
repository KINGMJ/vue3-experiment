<template>
  <div>Count is: {{ count }}</div>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Component2",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});

/**
 * 1. defineComponent 在 options 模式下的使用
 */
</script>

