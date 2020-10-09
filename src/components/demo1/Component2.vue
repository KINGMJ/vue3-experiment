<template>
  <div>Count is: {{ count }}, double is: {{ double }}</div>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, defineComponent } from "vue";

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

    watch(
      () => count.value,
      (val) => {
        console.log(`count is ${val}`);
      }
    );
    onMounted(() => {
      console.log("mounted");
      console.log(double.value);
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
-->