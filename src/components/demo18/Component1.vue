<template>
  <button @click="$emit('submit', { email: '' })">触发</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: {
    submit: payload => {
      if (payload.pwd) {
        console.log(payload)
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
})
</script>

<!--
1. 在 vue3 中，组件新增 emits 选项，建议记录每个组件发出的所有事件 emits
2. emits 可以是数组和对象，对象可以配置事件验证；验证函数必须返回布尔值，以表示事件参数是否有效
3. 事件参数验证失败，会出现警告提示，但是事件还是会传递到父组件
-->
