/**
 * 高阶函数，处理中文输入法
 * @param e
 * @param handle
 * @returns
 */
export function handleKeyBoard(e: KeyboardEvent, handle: Function) {
  console.log(e)
  if (e.keyCode === 229) {
    return
  }
  handle(e)
}
