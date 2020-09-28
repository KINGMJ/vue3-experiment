<template>
  <div class="about">
    <demo-preview msg="Vue3 和 TypeScript 的尝试性 demo" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DemoPreview from "@/components/DemoPreview.vue";

@Options({
  components: {
    DemoPreview,
  },
})
export default class About extends Vue {}
</script>