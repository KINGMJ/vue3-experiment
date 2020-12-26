<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>第一组demo</h3>
    <a href="#/demo1" rel="noopener">defineComponent的使用</a>
    <a href="#/demo2" rel="noopener">reactive与toRefs</a>
    <a href="#/demo3" rel="noopener">setup函数返回渲染函数或JSX</a>
    <a href="#/demo4" rel="noopener">reactive与ref的使用</a>
    <a href="#/demo5" rel="noopener">setup函数的使用</a>
    <a href="#/demo6" rel="noopener">vue3生命周期钩子</a>
    <a href="#/demo7" rel="noopener">keep-alive的onActived和onDeactived钩子</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class DemoPreview extends Vue {
  msg!: string;
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
  margin: 12px 0;
}
</style>
