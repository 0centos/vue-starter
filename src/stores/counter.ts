export const useCounterStore = defineStore('counter', () => {
  let count = $ref<number>(0) // Vue Macros 的ref语法糖
  const doubleCount = $computed(() => count * 2) // Vue Macros 的computed语法糖

  function increment() {
    count += 1 // 会被编译成count.value += 1
  }
  function decrement() {
    count -= 1
  }

  // 使用 $ref 的原始响应式对象：$$(count), 因为Pinia要判断'count'是ref还是reactive，所以需要用$$来包裹
  return { count: $$(count), doubleCount: $$(doubleCount), increment, decrement }
})
