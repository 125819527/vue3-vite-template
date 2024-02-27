<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
</script>

<template>
  <el-config-provider :locale="locale">
    <div style="width: 100%">
      <router-view />
    </div>
  </el-config-provider>
</template>
