<template>
  <ul>
    <li v-for="item in list" :key="item.id" :ref="setItemRef">{{ item.name }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      list: [
        { id: 1, name: 'Book' },
        { id: 2, name: 'MP3' },
        { id: 3, name: 'Food' }
      ],
      itemRefs: [] as any
    }
  },
  methods: {
    setItemRef(el: any) {
      this.itemRefs.push(el)
    }
  },
  mounted() {
    console.log(this.itemRefs[0])
  }
})
</script>

<!--
1. vu3 中 ref 与 v-for 一起使用时，不再会数组去填充相应的 $refs 属性，因为这种行为会变得不明确且效率低下；
   应该将 ref 绑定到一个更灵活的函数上
-->
