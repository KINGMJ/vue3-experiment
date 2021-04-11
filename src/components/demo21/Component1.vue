<template>
  <button @click="handleBtnClick">这是一个button</button>
  <div @click="handleClick">这是一个div</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['click'],
  methods: {
    handleClick(e) {
      console.log(e)
      e.stopPropagation()
    },
    handleBtnClick(e) {
      this.$emit('click', e)
    }
  }
})
</script>
