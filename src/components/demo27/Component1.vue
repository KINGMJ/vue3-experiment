<template>
  <div>
    <todo-list />
    <button @click="changeTodos">增加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './TodoList.vue'

export default defineComponent({
  name: 'Component1',
  components: { TodoList },
  data() {
    return {
      todos: ['item1', 'item2']
    }
  },
  methods: {
    changeTodos() {
      this.todos.push('item3')
    }
  },
  // provide: {
  //   location: 'North Pole',
  //   todoLength: 2
  // }

  //使用组件实例的属性，需要将provide转换为返回对象的函数
  provide() {
    return {
      location: 'Notrh Pole',
      todoLength: this.todos.length
    }
  }
})
</script>
