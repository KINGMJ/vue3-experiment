<template>
  <custom-input v-model.capitalize="searchText" />
  <custom-input-2 />
  <custom-input-3 v-model:first-name.capitalize="firstName" v-model:last-name.upper="lastName" />
  <p>名字：{{ firstName }} {{ lastName }}</p>
</template>

<script lang="ts">
import CustomInput3 from '@/components/demo11/CustomInput3.vue'
import CustomInput from '@/components/demo11/CustomInput.vue'
import CustomInput2 from '@/components/demo11/CustomInput2.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      searchText: 'this is a search text',
      firstName: 'jerry',
      lastName: 'mei'
    }
  },
  components: {
    CustomInput,
    CustomInput2,
    CustomInput3
  }
})
</script>

<style scoped>
input,
textarea {
  display: block;
  margin: 12px auto;
}
</style>
