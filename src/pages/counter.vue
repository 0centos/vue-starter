<template>
  <h1>Counter</h1>
  <p id="count">Count is: {{ counterStore.count }}</p>
  <p>Double count is: {{ counterStore.doubleCount }}</p>
  <el-button @click="counterStore.increment" type="primary" id="increment">Increment</el-button>
  <el-button @click="counterStore.decrement" type="danger" id="decrement">Decrement</el-button>
  <el-button @click="counterStore.$reset" type="warning" id="reset">Reset</el-button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
