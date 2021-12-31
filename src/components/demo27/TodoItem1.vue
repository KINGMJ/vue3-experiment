<template>
  <p>{{ todoLength }}</p>
</template>
<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const todoLength = inject('todoLength')
    const location = inject('location')

    console.log(todoLength)
    console.log(location)

    return {
      todoLength
    }
  }
})
</script>
