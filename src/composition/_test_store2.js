import { ref, computed } from 'vue'

const music = ref([])

export default function useTestStore() {
  // 用 setTimeout 模拟耗时操作
  const getMusicFromApi = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: '歌曲1' },
          { id: 2, name: '歌曲2' }
        ])
      }, 1000)
    })
  }

  const loadMusic = async () => {
    const res = await getMusicFromApi()
    console.log(res)
    music.value = res
  }

  return {
    music: computed(() => music.value), // 这种写法类似 readonly，防止在外部改变 state
    loadMusic
  }
}

/**
 * 使用 composition function 的形式来组织状态，好处是以功能进行组织而不是集中式的，需要注意的是这种方式要把状态提升到函数之外
 * 参考：https://vueschool.io/articles/vuejs-tutorials/state-management-with-composition-api/
 */
