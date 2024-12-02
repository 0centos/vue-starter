
export const useCounterStore = defineStore('counter', () => {
  let count = $ref<number>(0) // ref语法糖
  // $reactive reactive 语法糖
  const doubleCount = $computed(() => count * 2) // 计算属性语法糖
  function increment(){
    count += 1 // 无需.value
    debugger
  }
  function decrement() {
    count -= 1
  }

  // 使用 $ref 的原始响应式对象：$$(count)
  return { count: $$(count), doubleCount: $$(doubleCount), increment, decrement }
})
