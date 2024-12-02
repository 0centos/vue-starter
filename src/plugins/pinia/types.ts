import type { Store } from 'pinia'

export interface TimerStore extends Store {
  time: number
  timer: number | null
  start: () => void
  stop: () => void
}
