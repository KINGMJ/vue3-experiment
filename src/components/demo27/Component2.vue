<template>
  <div>
    <todo-list />
    <button @click="changeTodos">增加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed } from 'vue'
import TodoList from './TodoList.vue'

export default defineComponent({
  name: 'Component1',
  components: { TodoList },
  setup() {
    const todos = ref(['item1', 'item2'])
    const changeTodos = () => todos.value.push('item3')

    provide('location', 'North Pole')

    //保持响应式
    provide(
      'todoLength',
      computed(() => todos.value.length)
    )

    return {
      changeTodos
    }
  }
})
</script>
