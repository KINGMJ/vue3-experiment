<template>
  <custom-input v-model.capitalize="searchText" />
</template>

<script lang="ts">
import CustomInput from '@/components/demo11/CustomInput.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      searchText: 'this is a search text'
    }
  },
  components: {
    CustomInput
  }
})
</script>

<style scoped>
input {
  display: block;
  margin: 12px auto;
}
</style>
