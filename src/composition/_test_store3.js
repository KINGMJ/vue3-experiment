import { reactive, readonly, toRefs } from 'vue'

const initState = reactive({
  books: []
})

const state = readonly(initState)

export default function useTestStore2() {
  // 用 setTimeout 模拟耗时操作
  const getBooksFromApi = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: '书籍1' },
          { id: 2, name: '书籍2' }
        ])
      }, 1000)
    })
  }

  const loadBooks = async () => {
    const res = await getBooksFromApi()
    initState.books = res
  }

  return {
    loadBooks,
    ...toRefs(state)
  }
}

/**
 * 使用 reactive 的方式进行状态管理
 */
