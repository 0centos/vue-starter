export interface Todo {
  id: number
  text: string
  done: boolean
}

let nextId = 1; // 用于生成唯一 ID

export const useTodoListStore = defineStore('todolist', () => {
  const list = $ref<Array<Todo>>([])

  function addTodo(text: string) {
    const todo: Todo = { id: nextId++, text, done: false }
    list.push(todo)
  }

  function removeTodo(index: number) {
    list.splice(index, 1)
  }

  function updateTodo(index: number, todo: Todo) {
    list[index] = todo
  }

  function toggleTodoDone(index: number) {
    list[index].done = !list[index].done
  }

  function getPendingTodos() {
    return list.filter(todo => !todo.done)
  }

  return {
    list: $$(list),
    addTodo,
    removeTodo,
    updateTodo,
    toggleTodoDone,
    getPendingTodos
  }
})
