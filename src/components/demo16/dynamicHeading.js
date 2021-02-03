import { h } from 'vue'

const dynamicHeading = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

export default dynamicHeading
