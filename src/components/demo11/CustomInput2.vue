<template>
  <input type="password" v-model.number="msg" />
  <textarea v-model.number="msg" placeholder="add multiple lines"></textarea>

  <p>Message is: {{ msg }}</p>

  <select v-model.number="selected">
    <option disabled value="">Please select one</option>
    <option>1 </option>
    <option>2</option>
    <option>3</option>
  </select>
  <p>Selected: {{ selected }}</p>

  <div id="v-model-radiobutton" class="block">
    <input type="radio" id="one" value="1" v-model.number="picked" />
    <label for="one">1</label>
    <br />
    <input type="radio" id="two" value="2" v-model.number="picked" />
    <label for="two">2</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      msg: '123',
      selected: 1,
      picked: ''
    }
  },
  watch: {
    msg: {
      handler(val) {
        console.log('msg 的数据类型：' + typeof val)
      },
      immediate: true
    },
    selected: {
      handler(val) {
        console.log('selected 的数据类型：' + typeof val)
      },
      immediate: true
    },
    picked: {
      handler(val) {
        console.log('picked 的数据类型：' + typeof val)
      },
      immediate: true
    }
  }
})
</script>

<style scoped>
textarea {
  display: block;
  margin: 12px auto;
}
.block {
  margin: 12px;
}
</style>

<!--
1. 内置修饰符 .trim、 .number、.lazy 在input文本输入和textarea里生效，其他的单选框等等好像没用
2. 组件上只能使用自定义的修饰符，内置的好像没用
-->
