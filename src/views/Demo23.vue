<template>
  <component-1 />
  <component-2 />
</template>

<script lang="ts">
import Component1 from '@/components/demo23/Component1.vue'
import Component2 from '@/components/demo23/Component2.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Component1, Component2 }
})
</script>
