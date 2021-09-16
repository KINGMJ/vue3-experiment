<template>
  <div>
    {{ key }}
    {{ id }}
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    key: String,
    id: String
  },
  data() {
    return {
      name: 'jack'
    }
  }
}
</script>
