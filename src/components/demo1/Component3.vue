<template>
  <div>Test for setup</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Component3",
  props: {
    title: String,
  },

  setup(props) {
    console.log(props.title);
  },
});
</script>

<!--
1. ts中，需要使用 defineComponent 来对 props 进行类型推导
-->