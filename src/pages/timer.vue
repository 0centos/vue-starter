<template>
  <h1>Timer</h1>
  <p>Time is: {{ timerStore.time }}</p>
  <el-button @click="timerStore.start" type="primary">Start</el-button>
  <el-button @click="timerStore.stop" type="danger">Stop</el-button>
  <el-button @click="timerStore.$reset" type="warning">Reset</el-button>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'

const timerStore = useTimerStore()
</script>

<style scoped></style>
