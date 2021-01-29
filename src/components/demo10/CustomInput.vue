<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    handleInput(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<!--
1. 新增 emits 选项
2. v-model 在组件中的使用，组件内的 <input> 必须满足以下需求：
  a. value 属性绑定到一个名叫 modelValue 的 prop 上
  b. 在其 input 事件被触发时，将新的值通过自定义的 update:modelValue
-->
