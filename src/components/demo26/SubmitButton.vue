<template>
  <button type="submit">
    <slot>Submit</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubmitButton'
})
</script>
