<template>
  <input
    v-model="taskName"
    type="text"
  >
  <p>{{ name }}</p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: ''
    }
  },
  computed: {
    taskName: {
      get() {
        //从store中获取
        return this.name
      },
      set(value) {
        //提交到store
        console.log(value)
        this.name = 'Hi，' + value
      }
    }
  }
})
</script>

<!--
computed 的 get 和 set 方法
-->
