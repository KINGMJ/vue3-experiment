<template>
  <component :is="child" />
</template>

<script>
import { computed, defineComponent } from 'vue'
import Component1 from '@/components/demo25/Component1.vue'
export default defineComponent({
  components: { Component1 },
  setup() {
    const child = computed(() => {
      return 'Component1'
    })

    return {
      child
    }
  }
})
</script>
