import { reactive, readonly } from 'vue'

const initState = reactive({
  person: {}
})

// 避免外部直接更改state值
export const state = readonly(initState)

export const mutations = {
  loadPerson() {
    initState.person = [
      { id: 1, name: 'jack' },
      { id: 2, name: 'rose' }
    ]
  }
}

/**
 * vue2 的 observable 函数废弃掉了，在 vue3 中使用 reactive 来进行状态管理
 */
