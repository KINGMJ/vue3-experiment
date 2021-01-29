<template>
  <select @change="handleTitle">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>
  <input type="text" :value="content" @input="handleContent" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  emits: ['update:title', 'update:content'],
  computed: {},
  methods: {
    handleTitle(event: any) {
      this.$emit('update:title', event.target.value)
    },
    handleContent(event: any) {
      this.$emit('update:content', event.target.value)
    }
  }
})
</script>

<!--
1. 在一个组件上绑定多个 v-model
-->
