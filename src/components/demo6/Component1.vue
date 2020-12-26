<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <button @click="increment">更新组件</button>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";

export default defineComponent({
  name: "Component1",
  props: {
    name: String,
  },
  data() {
    return {
      age: 18,
    };
  },

  methods: {
    increment() {
      this.age++;
    },
  },

  setup() {
    console.log("1. setup中不需要beforeCreate和created");
    onBeforeMount(() => {
      console.log("2. before mount");
    });
    onMounted(() => {
      console.log("3. mounted");
    });
    onBeforeUpdate(() => {
      console.log("4. before update");
    });
    onUpdated(() => {
      console.log("5. updated");
    });
    onBeforeUnmount(() => {
      console.log("6. before unmount");
    });
    onUnmounted(() => {
      console.log("7. mounted");
    });
    onErrorCaptured((err, vm, info) => {
      console.log(err);
      console.log(vm);
      console.log(info);
    });
  },
});
</script>

<!--
1. vue 的生命周期钩子的改变
-->