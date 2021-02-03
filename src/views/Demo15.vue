<template>
  <component-1 ref="myComponent1Ref" />
  <component-2 />
  <component-3 />
  <component-4 />
  <component-5 />
  <component-6 />
</template>

<script lang="ts">
import Component1 from '@/components/demo15/Component1.vue'
import Component2 from '@/components/demo15/Component2.vue'
import Component3 from '@/components/demo15/Component3.vue'
import Component4 from '@/components/demo15/Component4.vue'
import Component5 from '@/components/demo15/Component5.vue'
import Component6 from '@/components/demo15/Component6.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {},
  components: {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6
  },
  mounted() {
    const myComponentInstance: any = this.$refs.myComponent1Ref
    console.log(myComponentInstance.$data)
  }
})
</script>
