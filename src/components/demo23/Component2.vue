<template>
  <ul>
    <li v-for="item in person" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { state } from '../../composition/_test_store'

export default {
  name: 'Component2',
  setup() {
    return {
      person: state.person
    }
  }
}
</script>
