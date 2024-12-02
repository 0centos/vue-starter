// 众所周知,pinia的Setup store没有$reset方法,所以需要自己实现

import type { Store } from 'pinia'
import type { TimerStore } from './types'

interface ExtendedStore extends Store {
  _isOptionAPI?: boolean; // 添加该属性
}

export default ({ store }: { store: Store }): void => {
  if (store.$id != 'timer') {
    if ((store as ExtendedStore)._isOptionAPI) return
    const initialState = JSON.parse(JSON.stringify(store.$state)) // 深拷贝
    store.$reset = () => {
      store.$patch(initialState)
    }
  }
  // 如果是TimerStore,则单独处理
  else {
    store.$reset = () => {
      (store as TimerStore).time = 0;
      (store as TimerStore).stop()
    }
  }
}
