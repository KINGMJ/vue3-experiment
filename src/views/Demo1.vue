<template>
  <component1 />
  <component2 />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Demo1Service } from "../service/demo1/index";
import Component1 from "../components/demo1/Component1.vue";
import Component2 from "../components/demo1/Component2.vue";

@Options({
  components: {
    Component1,
    Component2,
  },
})
export default class Demo1 extends Vue {
  created() {
    new Demo1Service().init();
  }
}
</script>