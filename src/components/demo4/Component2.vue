<template>
  <div>Count is: {{ count }}, double is: {{ double }}</div>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { ref, computed, watch, defineComponent } from "vue";

export default defineComponent({
  name: "Component2",
  setup() {
    //reactive state
    const count = ref(0);
    //computed state
    const double = computed(() => count.value * 2);
    //method
    const increment = () => {
      count.value++;
    };

    // watch(
    //   () => count.value,
    //   (val, prevVal) => {
    //     console.group("watch函数");
    //     console.log(`count is ${val}`);
    //     console.log(`prev count is ${prevVal}`);
    //   }
    // );
    watch(count, (val, prevVal) => {
      console.group("watch函数");
      console.log(`count is ${val}`);
      console.log(`prev count is ${prevVal}`);
    });

    return {
      count,
      double,
      increment,
    };
  },
});
</script>

<!--
1. 使用 ref，需要用 .value 访问包装过的对象值
2. watch的两种用法，watching a getter 或者 watching a ref
-->