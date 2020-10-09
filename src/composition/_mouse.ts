import { reactive, onMounted, onUnmounted, toRefs } from 'vue'

export function useMousePosition() {
  const point = reactive({
    x: 0,
    y: 0
  })

  const update = (e: { pageX: number; pageY: number }) => {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return toRefs(point)
}

/**
 * 1. 使用 toRefs 将响应对象上的每个属性转换成相应的 ref；如果没有使用 toRefs， 使用时必须用下面这种方式
 *
 * return {
 *   point: useMousePosition
 * }
 *  <span>鼠标坐标：{{ point.x }}: {{ point.y }}</span>
 */