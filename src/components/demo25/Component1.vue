<template>
  <ul>
    <li v-for="(item, index) in items" :key="index"><input type="checkbox"/>{{ item.name }}</li>
  </ul>

  <button @click="changeItems">改变item</button>
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
  },

  methods: {
    changeItems() {
      this.items.reverse()
    }
  }
})
</script>

<!--
v-for 为什么要用 key，以及 key为什么不能为 index：在上面例子中如果不这么做，checkbox选中的值改变顺序后没有跟着改变
-->
