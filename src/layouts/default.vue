<template>
  <el-container class="flex h-full">
    <el-aside class="w-[200px] h-full bg-primary-light-8 text-primary">
      <el-scrollbar class="h-full">
        <el-menu class="border-none h-full">
          <el-menu-item index="1" @click="$router.push('/counter')">
            {{ $t('sidebar.item1') }}
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push('/timer')">
            {{ $t('sidebar.item2') }}
          </el-menu-item>

          <el-menu-item index="3" @click="$router.push('/todolist')">
            {{ $t('sidebar.item3') }}
          </el-menu-item>

          <el-menu-item index="4" @click="$router.push('/settings')">
            {{ $t('sidebar.item4') }}
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-main>
        <div class="flex items-center justify-center h-screen">
          <div class="rounded w-96 h-auto p-5 bg-emerald">
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
