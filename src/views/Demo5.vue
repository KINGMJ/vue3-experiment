<template>
  <component-1 name="jack" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Component1 from "../components/demo5/Component1.vue";

export default defineComponent({
  components: {
    Component1,
  },
  setup() {},
});
</script>