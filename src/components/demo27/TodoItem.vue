<template>
  <p>{{ todoLength }}</p>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    console.log(this.todoLength.value)
    console.log(this.location)
  },
  //使用inject获取祖先provide的数据
  inject: ['todoLength', 'location']
})
</script>
