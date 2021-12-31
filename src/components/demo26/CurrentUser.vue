<template>
  <span>
    <slot :user="user"></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CurrentUser',
  data() {
    return {
      user: {
        firstName: 'Jack',
        lastName: 'Ma'
      }
    }
  }
})
</script>
