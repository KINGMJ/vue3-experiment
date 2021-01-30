<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
