<template>
  <p v-for="item in items">
    {{ item.name }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      items: [
        { id: 1, name: 'jack' },
        { id: 2, name: 'peter' },
        { id: 3, name: 'rose' }
      ]
    }
  }
})
</script>

<!--
利用 is 属性进行子组件的选择
-->
