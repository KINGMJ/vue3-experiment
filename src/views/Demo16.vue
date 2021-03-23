<template>
  <dynamic-heading level="1">
    <span>这是 h 标签</span>
  </dynamic-heading>
</template>

<script>
import { defineComponent } from 'vue'

import DynamicHeading from '@/components/demo16/dynamicHeading'

export default defineComponent({
  components: {
    DynamicHeading
  }
})
</script>
