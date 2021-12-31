<template>
  <button class="btn-primary">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoButton',
  setup() {}
})
</script>
