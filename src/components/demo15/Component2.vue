<template>
  <p ref="myRef"></p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const myRef = ref(null)
    onMounted(() => {
      console.log(myRef.value)
    })
    return {
      myRef
    }
  }
})
</script>

<!--
1. 通过 composition api 的方式获取 ref
-->
