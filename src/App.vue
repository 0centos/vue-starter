<template>
  <el-config-provider :locale="Ellocale">
    <!-- <router-view v-slot="{ Component }" v-if="settingStore.setting.KeepAlive">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import enUs from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const Ellocale = computed(() => (locale.value === 'zh' ? zhCn : enUs))
</script>
