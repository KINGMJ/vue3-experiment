<template>
  <div>Archive component</div>
</template>

<script lang="ts">
import { defineComponent, onActivated, onDeactivated } from "vue";

export default defineComponent({
  name: "TabArchive",
  setup() {
    onActivated(() => {
      console.log("tab archive activated");
    });
    onDeactivated(() => {
      console.log("tab archive deactivated");
    });
  },
});
</script>