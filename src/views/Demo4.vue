<template>
  <component-1 :name="name" :msg="msg" />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Component1 from "@/components/demo4/Component1.vue";

export default defineComponent({
  name: "Demo4",
  components: {
    Component1,
  },
  setup() {
    const msg = ref(0);
    const name = ref("测试组件");
    return {
      name,
      msg,
    };
  },
});

/**
 * 1. https://cn.vuejs.org/v2/api/#vm-attrs
 * 2. 渲染函数的使用：https://cn.vuejs.org/v2/guide/render-function.html
 */
</script>

