<template>
  <span>鼠标坐标：{{ x }}: {{ y }}</span>
</template>

<script lang="ts">
import { useMousePosition } from "@/composition/_mouse";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();
    //...业务逻辑
    return { x, y };
  },
});
</script>
