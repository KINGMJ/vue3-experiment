<template>
  <p :ref="setMyRef"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      myRef: null
    }
  },
  methods: {
    setMyRef(el: any) {
      this.myRef = el
    }
  },
  mounted() {
    console.log(this.myRef)
  }
})
</script>

<!--
1. 通过把 ref 定义为回调函数，显示地传递元素或组件实例，option api 的方式
-->
