<template>
  <component :is="child" />
</template>

<script>
import { computed, defineComponent } from 'vue'
import Component1 from '@/components/demo27/Component1.vue'
import Component2 from '@/components/demo27/Component2.vue'

export default defineComponent({
  components: { Component1, Component2 },
  setup() {
    const child = computed(() => {
      return 'Component2'
    })
    return {
      child
    }
  }
})
</script>
