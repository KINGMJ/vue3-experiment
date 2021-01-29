<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: {
      type: Object,
      default: () => ({
        capitalize: false
      })
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(event: any) {
      let value = event.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  created() {
    console.log(this.modelModifiers)
  }
})
</script>

<!--
v-model 自定义修饰符： v-model.capitalize
修饰符通过 modelModifiers prop 提供给组件
当组件的 created 生命周期钩子被触发时， modelModifiers prop 会包含 capitalize，值为 true：{capitalize:true}
-->
