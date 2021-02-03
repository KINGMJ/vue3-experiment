<template>
  <p :ref="setMyRef"></p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    let myRef = ''
    const setMyRef = (el: any) => {
      myRef = el
    }

    onMounted(() => {
      console.log(myRef)
    })

    return {
      setMyRef
    }
  }
})
</script>

<!--
1. 通过把 ref 定义为回调函数，显示地传递元素或组件实例，composition api 的方式
-->
