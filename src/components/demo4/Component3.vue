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
1. 在非ts中，可以通过导出对象的方式，直接导出 setup 方法作为一个组件
2. ts中，需要使用 defineComponent 来对 props 进行类型推导
-->