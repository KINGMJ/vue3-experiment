<template>
  <div class="container">
    <div id="modals" class="test-modals"></div>
    <modal-button />
    <modal-button-2 />
    <teleport-demo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalButton from '@/components/demo8/ModalButton.vue'
import ModalButton2 from '@/components/demo8/ModalButton2.vue'
import TeleportDemo from '@/components/demo8/TeleportDemo.vue'
export default defineComponent({
  components: {
    ModalButton,
    ModalButton2,
    TeleportDemo
  }
})
</script>

<style scoped>
.container {
  position: relative;
  height: 500px;
  top: 100px;
}
</style>
