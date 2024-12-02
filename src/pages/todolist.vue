<template>
  <h1 class="mb-4 text-2xl">Todo List</h1>
  <div class="mb-4">
    <el-input class="mb-2" v-model="inputTodo" placeholder="Enter todo" />
    <el-button type="primary" @click="addTodo">Add</el-button>
  </div>
  <el-table :data="todoStore.list" class="mt-4">
    <el-table-column prop="text" label="Todo" />
    <el-table-column prop="done" label="Done" />
    <el-table-column label="Actions">
      <template #default="scope">
        <div class="flex flex-col justify-center items-center space-y-2">
          <el-button @click="toggleTodoDone(scope.$index)" type="primary">
            {{ scope.row.done ? 'Undo' : 'Complete' }}
          </el-button>
          <el-button @click="removeTodo(scope.$index)" type="danger">Remove</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { useTodoListStore } from '@/stores/todolist'

const todoStore = useTodoListStore()
let inputTodo = $ref('')

function addTodo() {
  if (inputTodo.trim()) {
    todoStore.addTodo(inputTodo)
    inputTodo = ''
  }
}

function removeTodo(index: number) {
  todoStore.removeTodo(index)
}

function toggleTodoDone(index: number) {
  todoStore.toggleTodoDone(index)
}
</script>
