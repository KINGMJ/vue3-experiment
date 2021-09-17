<template>
  <div>在两个组件中共享状态</div>
</template>

<script>
import { mutations } from '../../composition/_test_store'
import useTestState from '../../composition/_test_store2'
export default {
  name: 'Component1',
  setup() {
    const { loadMusic } = useTestState()
    mutations.loadPerson()
    loadMusic()
  }
}
</script>
