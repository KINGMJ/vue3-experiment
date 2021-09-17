<template>
  <ul>
    <li v-for="item in person" :key="item.id">
      {{ item.name }}
    </li>
  </ul>

  <ul>
    <li v-for="item in music" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { state } from '../../composition/_test_store'
import useTestState from '../../composition/_test_store2'

export default {
  name: 'Component2',
  setup() {
    const { music } = useTestState()

    console.log(music)
    return {
      person: state.person,
      music
    }
  }
}
</script>
