<template>
  <!--作用域插槽-->
  <current-user v-slot="{ user }"> {{ user.firstName }}</current-user>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentUser from './CurrentUser.vue'
export default defineComponent({
  components: {
    CurrentUser
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
作用域插槽
-->