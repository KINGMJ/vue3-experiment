<template>
  <label>First Name</label>
  <input type="text" :value="firstName" @input="handleFirstName" />
  <label>Last Name</label>
  <input type="text" :value="lastName" @input="handleLastName" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    firstName: String,
    firstNameModifiers: {
      type: Object,
      default: () => {}
    },
    lastName: String,
    lastNameModifiers: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['update:firstName', 'update:lastName'],
  methods: {
    handleFirstName(event: any) {
      let value = event.target.value
      if (this.firstNameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:firstName', value)
    },
    handleLastName(event: any) {
      let value = event.target.value
      if (this.lastNameModifiers.upper) {
        value = value.toUpperCase()
      }
      this.$emit('update:lastName', value)
    }
  }
})
</script>

<style scoped>
label {
  margin: 0 12px;
}
</style>

<!--
1. 对于带参数的 v-model 绑定，生成的 prop 名称由 modelModifiers 变为 arg + 'Modifiers'
-->
