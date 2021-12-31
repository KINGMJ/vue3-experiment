<template>
  <div>
    <p v-for="(item, index) in lists" :key="index">{{ item }}</p>
    <button @click="triggerUpdate">触发更新</button>
    <button @click="triggerUpdate2">触发更新2</button>
    <button @click="triggerUpdate3">触发更新3</button>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data() {
    return {
      lists: ['a', 'b', 'c']
    }
  },
  updated() {
    console.log('触发更新')
  },
  methods: {
    triggerUpdate() {
      //vue3可以直接修改数组项触发更新
      this.lists[0] = 'd'
    },
    triggerUpdate2() {
      //修改元素组的方法会触发更新
      this.lists.splice(0, 0, 'e')
    },
    triggerUpdate3() {
      //通过返回一个新的数组触发更新
      this.lists = this.lists.slice(0, 2)
    }
  }
}
</script>
