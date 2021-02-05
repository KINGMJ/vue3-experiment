import { h, reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    return () => h('button', { onClick: increment }, state.count)
  }
}
