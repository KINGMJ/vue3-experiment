<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vue 基本特性</h3>
    <a href="#/demo24">computed的get和set方法</a>
    <a href="#/demo25">v-for的使用</a>
    <h3>Vue3 新特性</h3>
    <a href="#/demo1">defineComponent的使用</a>
    <a href="#/demo2">reactive与toRefs</a>
    <a href="#/demo3">setup函数返回渲染函数或JSX</a>
    <a href="#/demo4">reactive与ref的使用</a>
    <a href="#/demo5">setup函数的使用</a>
    <a href="#/demo6">vue3生命周期钩子</a>
    <a href="#/demo7">keep-alive的onActived和onDeactived钩子</a>
    <a href="#/demo8">teleport</a>
    <a href="#/demo9">fragments</a>
    <h3>功能变更</h3>
    <a href="#/demo10">v-model</a>
    <a href="#/demo11">v-model修饰符</a>
    <a href="#/demo12">template v-for</a>
    <a href="#/demo13">v-bind 的绑定顺序</a>
    <a href="#/demo14">v-on.native修饰符移除</a>
    <a href="#/demo15">v-for中的ref属性</a>
    <a href="#/demo16">函数式组件</a>
    <a href="#/demo17">异步组件</a>
    <a href="#/demo18">emits选项</a>
    <a href="#/demo19">h函数</a>
    <h3>与React的差异性测试</h3>
    <a href="#/demo21">事件传递</a>
    <h3>其他功能</h3>
    <a href="#/demo20">事件处理</a>
    <a href="#/demo22">key作为props传递在子组件中获取不到值</a>
    <a href="#/demo23">使用reactive作为状态管理</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class DemoPreview extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  display: block;
  margin: 12px;
  display: inline-block;
}
.hello {
  width: 80%;
  margin: 0 auto;
}
</style>
