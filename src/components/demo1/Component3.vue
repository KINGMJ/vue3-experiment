<template>
  <div>Test for setup</div>
</template>

<script>
import { onMounted, toRefs } from "vue";

export default {
  name: "Component3",
  props: {
    title: String,
  },

  setup(props) {
    console.log(props.title);
    onMounted(() => {
      console.log("mounted");
      const { title } = toRefs(props);
      console.log(title.value);
    });
  },
};
</script>

<!--
1. 使用 ref，需要用 .value 访问包装过的对象值
-->