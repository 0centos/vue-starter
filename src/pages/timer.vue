<template>
  <h1>{{ $t('timer.title') }}</h1>
  <p>{{ $t('timer.timeMsg') }} {{ timerStore.time }}</p>
  <el-button @click="timerStore.start" type="primary">{{ $t('timer.start') }}</el-button>
  <el-button @click="timerStore.stop" type="danger">{{ $t('timer.stop') }}</el-button>
  <el-button @click="timerStore.$reset" type="warning">{{ $t('timer.reset') }}</el-button>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'

const timerStore = useTimerStore()
</script>

<style scoped></style>
