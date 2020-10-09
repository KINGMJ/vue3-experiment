<template>
  <div>
    <div>Count is: {{ countState.value }}, double is:</div>
    <button @click="increment" />
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
// eslint-disable-next-line no-unused-vars
import { Count } from "@/types/count";

export default defineComponent({
  name: "Component1",
  setup() {
    const countState = reactive<Count>({
      name: "计数",
      value: 0,
    });
    //double: computed(() => count.value * 2),

    // const increment = function (): void {
    //   countState.value++;
    // };

    return {
      countState,
      // increment,
    };
  },
});
</script>

