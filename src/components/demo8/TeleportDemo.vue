<template>
  <button @click="modalOpen = true">Open</button>
  <div v-if="modalOpen">
    <teleport to=".test-modals" disabled="true">
      <div>A</div>
    </teleport>
    <teleport to=".test-modals">
      <div>B</div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      modalOpen: false
    }
  }
})
</script>
