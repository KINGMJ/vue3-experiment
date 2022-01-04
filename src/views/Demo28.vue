<template>
  <p>
    <span v-for="(attr, key) in person"> ✔ {{ key }}: {{ attr }} </span>
  </p>

  <p>
    <span v-for="attr in map.values()">✔ {{ attr }} &nbsp;</span>
  </p>

  <ul>
    <li v-for="item in lists" :key="item.id">{{ item.title }}</li>
  </ul>

  <button @click="changeObject">修改对象</button>
  <button @click="changeArray">修改数组</button>
  <button @click="changeMap">修改map</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Demo28',
  data() {
    return {
      person: {
        name: 'jack',
        age: 18,
        sex: 'male'
      },
      lists: [
        { id: 1, title: 'Todo 1' },
        { id: 2, title: 'Todo2' },
        { id: 3, title: 'Todo3' }
      ],
      map: new Map(Object.entries({ name: 'rose', age: '12' }))
    }
  },

  updated() {
    console.log(this.lists)
  },
  methods: {
    changeObject() {
      //新增不存在的属性，可以响应
      this.person.city = 'Shanghai'
      //删除对象属性，可以响应
      delete this.person.age
    },
    changeArray() {
      //修改数组长度，可以响应
      this.lists.length = 2
      //直接修改数组项，可以响应
      this.lists[0] = { id: 1, title: '新增的list' }
    },
    changeMap() {
      //可以修改map
      this.map.set('sex', 'female')
    }
  }
})
</script>
