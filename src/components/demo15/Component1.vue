<template>
  <p ref="myRef"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'jack'
    }
  },
  mounted() {
    console.log(this.$refs.myRef)
  }
})
</script>

<!--
1. vue2 中如果 DOM 元素上使用 ref 属性，this.$refs 可以获取到 DOM 元素；
   如果子组件上使用 ref 属性，this.$refs 获取到的是子组件的实例

2. vue3 中除了这种方式，还可以把 ref 定义为回调函数，显示地传递元素或组件实例
-->
