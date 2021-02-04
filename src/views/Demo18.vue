<template>
  <component-1 v-on:submit="submit" />
</template>

<script lang="ts">
import Component1 from '@/components/demo18/Component1.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    submit() {
      console.log('触发了提交')
    }
  },
  components: { Component1 }
})
</script>
