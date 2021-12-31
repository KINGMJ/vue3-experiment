<template>
  <div>
    <!-- <todo-item /> -->
    <todo-item-1 />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoItem1 from './TodoItem1.vue'

export default defineComponent({
  components: { TodoItem, TodoItem1 },
  name: 'TodoList'
})
</script>
