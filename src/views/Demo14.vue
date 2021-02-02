<template>
  <component-1 v-on:close="handleComponentEvent" v-on:click="handleNativeClickEvent" />
</template>

<script lang="ts">
import Component1 from '@/components/demo14/Component1.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    handleComponentEvent() {
      console.log('处理的是一个组件的事件')
    },
    handleNativeClickEvent() {
      console.log('处理的是一个原生事件')
    }
  },
  components: {
    Component1
  }
})
</script>
