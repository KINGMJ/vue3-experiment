<template>
  <div>
    <h3>{{ state.title }}</h3>
    <h3>{{ rawState.title }}</h3>

    <button @click="change">修改</button>
  </div>
</template>
<script>
import { ref, toRaw, watchEffect } from 'vue'
export default {
  name: 'Component4',

  setup(props) {
    const state = {
      title: '这是一个title'
    }
    const rawState = toRaw(state)

    const change = () => {
      state.title = 123
    }

    watchEffect(() => {
      console.log(rawState)
    })
    return {
      state,
      rawState,
      change
    }
  }
}
</script>
