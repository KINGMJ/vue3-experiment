<template>
  <div>
    Count is: {{ state.count }}, double is: {{ state.double }}, treble is:
    {{ treble }}
  </div>
  <button @click="increment">+</button>
</template>

<script>
import { reactive, computed, watchEffect, defineComponent } from "vue";

export default defineComponent({
  name: "Component1",
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    //computed 内部实现了 reactive ，所以这里的 treble 是一个 ref 对象，需要使用 treble.value 来拦截它的值
    const treble = computed(() => state.count * 3);

    const increment = () => {
      state.count++;
    };

    watchEffect(() => {
      console.group("wtachEffect");
      console.log(state.double);
      console.log(treble.value);
      console.groupEnd();
    });

    return {
      state,
      increment,
      treble,
    };
  },
});
</script>

<!--
1. vue3 支持 multi-root 节点
2. 使用 defineComponent 来定义组件
3. 使用 Reactive 
4. reactive 与 ref 的区别：ref通常把一个值变成反应式的对象，需要用.value拦截；
reactive用于把一个对象里的所有属性变成反应式的对象，复合函数的使用者必须始终保持对对象的引用，通常用 toRefs来处理

function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return toRefs(pos)
}

// x & y are now refs!
const { x, y } = useMousePosition()

5. watchEffect 与 watch 的区别：

watchEffect 不需要指定监听的属性，它会自动收集依赖
watchEffect 获取不到更新前的值
watchEffect 在组件初始化的时候就会执行， watch 需要指定 immediate 属性
-->