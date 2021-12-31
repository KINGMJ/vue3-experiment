<template>
  <todo-button action="delete"> Delete a item {{ item.name }} {{ action }} </todo-button>
  <!--后备内容-->
  <submit-button />

  <!--具名插槽-->
  <slot-panel>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </slot-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoButton from './TodoButton.vue'
import SubmitButton from './SubmitButton.vue'
import SlotPanel from './SlotPanel.vue'
export default defineComponent({
  components: {
    TodoButton,
    SubmitButton,
    SlotPanel
  },
  data() {
    return {
      item: {
        name: 'First item'
      }
    }
  }
})
</script>

<!--

1. slot 渲染作用域问题：父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
action 是传递给字模板的内容，在父级模板是获取不到的

2. 后备内容，具名插槽
-->
