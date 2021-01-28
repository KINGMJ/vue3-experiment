<template>
  <component-1 id="custom-layout" @click="changeValue" />
</template>

<script lang="ts">
import Component1 from '@/components/demo9/Component1.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Component1
  },
  methods: {
    changeValue() {
      console.log('change value')
    }
  }
})
</script>

<!--
1. 组件多根节点上的属性继承，子组件必须要显式绑定$attrs，否则将发出运行时警告
-->
