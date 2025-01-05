<template>
  <h1>{{ $t('counter.title') }}</h1>
  <p id="count">{{ $t('counter.countMsg') }}{{ counterStore.count }}</p>
  <p>{{ $t('counter.doubleCountMsg') }}{{ counterStore.doubleCount }}</p>
  <el-button @click="counterStore.increment" type="primary" id="increment">{{
    $t('counter.increment')
  }}</el-button>
  <el-button @click="counterStore.decrement" type="danger" id="decrement">{{
    $t('counter.decrement')
  }}</el-button>
  <el-button @click="counterStore.$reset" type="warning" id="reset">{{
    $t('counter.reset')
  }}</el-button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
