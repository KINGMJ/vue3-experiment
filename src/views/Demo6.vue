<template>
  <component-1 v-if="show" name="jack" />
  <button @click="destroyComponent">销毁组件</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Component1 from "../components/demo6/Component1.vue";

export default defineComponent({
  components: {
    Component1,
  },
  setup() {
    const show = ref(true);
    const destroyComponent = () => {
      show.value = false;
    };
    return {
      show,
      destroyComponent,
    };
  },
});
</script>