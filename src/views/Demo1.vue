<template>
  <component1 />
  <component2 />
  <component-3 title="组件3" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Demo1Service } from "../service/demo1/index";
import Component1 from "../components/demo1/Component1.vue";
import Component2 from "../components/demo1/Component2.vue";
import Component3 from "../components/demo1/Component3.vue";

@Options({
  components: {
    Component1,
    Component2,
    Component3,
  },
})
export default class Demo1 extends Vue {
  created() {
    new Demo1Service().init();
  }
}
</script>