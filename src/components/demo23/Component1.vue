<template>
  <div>在两个组件中共享状态</div>
</template>

<script>
import { mutations } from '../../composition/_test_store'
export default {
  name: 'Component1',
  setup() {
    mutations.loadPerson()
  }
}
</script>
