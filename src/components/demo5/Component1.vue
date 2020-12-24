<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>

<script>
import { defineComponent } from "vue";

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

  setup(props) {
    console.log(props.name);
    console.log(this); //undefined
  },
});
</script>

<!--
1. setup 只接收 props 和 context 作为参数，this 在 setup 中无效

-->