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

  <ul>
    <li v-for="item in books" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { state } from '../../composition/_test_store'
import useTestState from '../../composition/_test_store2'
import useTestState2 from '../../composition/_test_store3'

export default {
  name: 'Component2',
  setup() {
    const { music } = useTestState()
    const { books } = useTestState2()

    console.log(music.value)
    console.log(books.value)
    return {
      person: state.person,
      music,
      books
    }
  }
}
</script>
