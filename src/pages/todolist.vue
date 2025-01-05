<template>
  <h1 class="mb-4 text-2xl">{{ $t('todolist.title') }}</h1>
  <div class="mb-4">
    <el-input class="mb-2" v-model="inputTodo" :placeholder="$t('todolist.placeholder')" />
    <el-button type="primary" @click="addTodo">{{ $t('todolist.add') }}</el-button>
  </div>
  <el-table :data="todoStore.list" class="mt-4">
    <el-table-column prop="text" :label="$t('todolist.item')" />
    <el-table-column prop="done" :label="$t('todolist.done')" />
    <el-table-column :label="$t('todolist.action')">
      <template #default="scope">
        <div class="flex flex-col justify-center items-center space-y-2">
          <el-button @click="toggleTodoDone(scope.$index)" type="primary">
            {{ scope.row.done ? $t('todolist.undo') : $t('todolist.complete') }}
          </el-button>
          <el-button @click="removeTodo(scope.$index)" type="danger">{{
            $t('todolist.remove')
          }}</el-button>
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
