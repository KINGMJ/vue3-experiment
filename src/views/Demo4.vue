<template>
  <component :is="child" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Component1 from '@/components/demo4/Component1.vue'
import Component2 from '@/components/demo4/Component2.vue'
import Component3 from '@/components/demo4/Component3.vue'
import Component4 from '@/components/demo4/Component4.vue'

export default defineComponent({
  components: { Component1, Component2, Component3, Component4 },
  setup() {
    const child = computed(() => {
      return 'Component4'
    })
    return {
      child
    }
  }
})
</script>
