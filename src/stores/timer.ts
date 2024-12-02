export const useTimerStore = defineStore('timer', () => {
  let time = $ref<number>(0)
  let timer = $ref<number | null | NodeJS.Timer| undefined>(null)

  function start() {
    if (timer) return
    timer = setInterval(() => {
      time += 1
    }, 1000)
  }
  function stop() {
    if (!timer) return
    clearInterval(timer as number)
    timer = null
  }

  return { time: $$(time), timer: $$(timer), start, stop }
})
