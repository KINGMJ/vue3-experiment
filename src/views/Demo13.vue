<template>
  <div id="red" v-bind="{ id: 'blue' }"></div>
  <div v-bind="{ id: 'blue' }" id="red"></div>
</template>
