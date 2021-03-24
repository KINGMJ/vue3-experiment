<template>
  <input v-model="input" placeholder="请输入内容" @keydown.enter="handleKeyBoard($event, handleEnter)" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { handleKeyBoard } from '@/composition/_keyboard'

export default defineComponent({
  setup() {
    const handleEnter = (e: KeyboardEvent) => {
      console.log('触发enter', e)
    }
    return {
      input: ref(''),
      handleEnter,
      handleKeyBoard
    }
  }
})
</script>

<!--
在中文输入法时，我们希望按enter键不提交。在vue2中可以使用 @keydown.13来进行区分，因为中文输入法的keydown它的keyCode等于229
在vue3中，该修饰符被废弃了，那么我们怎么进行区分呢？可以使用一个高阶函数进行包装一下，@keydown.enter调用我们的高阶函数
在高阶函数里面，我们判断一下keyCode值，如果等于229就结束掉。否则就执行我们需要真正执行的函数。

vue3的composition api对于这种实现
-->
