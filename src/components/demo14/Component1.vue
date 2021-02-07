<template>
  <div>
    <span>这是一个span</span>
    <button @click="$emit('close')">确定</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: ['close']
})
</script>

<!--
1. 在 vue3 中，组件的事件需要在子组件中通过 emits 来指定；如果未指定 emits ，会被当做 DOM 的原生事件添加到子组件的根元素上
2. 如果子组件指定了 inheritAttrs: false , 不会添加到子组件的根元素上
-->
