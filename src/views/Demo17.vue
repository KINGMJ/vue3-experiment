<template>
  <component-1 />
  <component-2 />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import ErrorComponent from '@/components/demo17/ErrorComponent.vue'
import LoadingComponent from '@/components/demo17/LoadingComponent.vue'

export default defineComponent({
  components: {
    Component1: defineAsyncComponent(() => import('@/components/demo17/Component1.vue')),
    Component2: defineAsyncComponent({
      loader: () => {
        return new Promise<any>((res, rej) => {
          setTimeout(() => {
            // res(import('@/components/demo17/Component2.vue')
            rej('错误')
          }, 2000)
        })
      },
      delay: 200,
      timeout: 3000,
      errorComponent: ErrorComponent,
      loadingComponent: LoadingComponent,
      onError(error, retry, fail, attempts) {
        if (attempts > 3) {
          return
        }
        console.log(error)
        console.log(attempts)
        retry()
      }
    })
  }
})
</script>
