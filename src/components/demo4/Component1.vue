<template>
  <div>{{ name }}</div>
  <component-2 v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Component2 from "./Component2.vue";

export default defineComponent({
  components: {
    Component2,
  },
  props: {
    name: String,
  },
  setup(props, context) {
    console.log(props.name);
    console.log(context);
  },
});
</script>