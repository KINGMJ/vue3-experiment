<template>
  <template v-for="item in list" :key="item.id">
    <div v-if="item.visible">
      <span>{{ item.name }}</span>
      <span>{{ item.age }}</span>
    </div>
    <span v-else>xxx</span>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      list: [
        { id: 1, name: 'jack', age: 18, visible: true },
        { id: 2, name: 'rose', age: 21, visible: false },
        { id: 3, name: 'mike', age: 30, visible: true }
      ]
    }
  }
})
</script>
