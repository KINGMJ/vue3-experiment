<template>
  <div>{{ $attrs.msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
    console.log(props);
    console.log(context.attrs);
  },
});
</script>