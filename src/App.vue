<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const zIndex = 3000
const size = 'default'
const locale = zhCn
</script>

<template>
  <el-config-provider :size="size" :locale="locale" :z-index="zIndex">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" :class="$route.name" />
      </transition>
    </router-view>
  </el-config-provider>
</template>

<style lang="scss">
@import './styles/base.scss';
@import './styles/common.scss';
@import './styles/standard.scss';
@import './styles/animation.scss';
@import './styles/transition.scss';
@import './styles/element-style.scss';
</style>
