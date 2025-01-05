<template>
  <h1>{{ $t('settings.title') }}</h1>
  <div class="leading-loose">
    {{ $t('settings.language') }}:
    <el-select v-model="value" @change="changeLang">
      <el-option label="中文" value="zh"></el-option>
      <el-option label="English" value="en"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const value = ref('')
const { locale } = useI18n()

const changeLang = (value: 'en' | 'zh') => {
  locale.value = value
}
</script>
