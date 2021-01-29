<template>
  <!-- <custom-input :model-value="searchText" @update:model-value="searchText = $event" /> -->
  <custom-input v-model="searchText" />
  <custom-input-2 v-model="searchText" />

  <custom-input-3 v-model:title="pageTitle" v-model:content="pageContent" />

  <p>{{ searchText }}</p>
  <p>{{ pageTitle }}</p>
  <p>{{ pageContent }}</p>
</template>

<script lang="ts">
import CustomInput from '@/components/demo10/CustomInput.vue'
import CustomInput2 from '@/components/demo10/CustomInput2.vue'
import CustomInput3 from '@/components/demo10/CustomInput3.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      searchText: 'this is a search text',
      pageTitle: 'apple',
      pageContent: 'this is a content'
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
input {
  display: block;
  margin: 12px auto;
}
</style>

<!--
1. 组件上的 v-model 相当于 :model-value="searchText" @update:model-value="searchText = $event"
-->
