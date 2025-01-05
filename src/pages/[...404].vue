<template>
  <div>
    <h1>{{ $t('notfound.title') }}</h1>
    <p>{{ $t('notfound.message') }}</p>
    <el-button type="primary" @click="$router.back">{{ $t('notfound.back') }}</el-button>
  </div>
</template>
