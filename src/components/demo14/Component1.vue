<template>
  <div>
    <span>这是一个span</span>
    <button @click="$emit('close')">确定</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: ['close']
})
</script>
