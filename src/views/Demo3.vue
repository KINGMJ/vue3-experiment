<script lang="ts">
import { h, ref, reactive, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    const object = reactive({ foo: "这是一个链接" });

    const a = h(
      "a",
      {
        href: "http://localhost:8080",
      },
      object.foo
    );
    const br = h("br", null, []);
    const h1 = h("h1", "这是一个h" + count.value);

    return () => h("div", null, [a, br, h1]);
  },
});

/**
 * 1. setup 可以返回一个Render Functions/JSX
 * 2. 渲染函数的使用：https://cn.vuejs.org/v2/guide/render-function.html
 */
</script>

