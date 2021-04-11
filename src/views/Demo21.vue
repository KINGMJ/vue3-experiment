<template>
  <component-1 @click="handleClick" />
</template>

<script lang="ts">
import Component1 from '@/components/demo21/Component1.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Component1
  },
  methods: {
    handleClick(e: any) {
      console.log(e)
    }
  }
})
</script>

<!--
在vue3 事件是通过 emit 向上传递的，如果在父组件定义了一个 @click 事件，在子组件中没有定义 emit，会默认绑定到根节点上；

在React中，事件也是被当做 props 来处理的，父组件可以传递一个 event props 到子组件，子组件中可以通过 this.props.onClick() 来触发父组件的事件
-->
