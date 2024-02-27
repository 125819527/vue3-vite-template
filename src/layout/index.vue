<template>
  <div flex-col h-full class="div" @scroll="handleScroll">
    <div>
      <sidebar-menu :router-list="routerList" />
    </div>
    <div class="routemain">
      <router-view></router-view>
    </div>
    <!-- main -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import SidebarMenu from '@/layout/components/SidebarMenu.vue'
import { menuStore } from '@/store/menu'

const store = menuStore()
const routerList = ref([])

onMounted(async () => {
  if (localStorage.getItem('menu')) {
    routerList.value = JSON.parse(localStorage.getItem('menu'))
  } else {
    routerList.value = store.getMenuList
    // 存入菜单到本地
    localStorage.setItem('menu', JSON.stringify(store.getMenuList))
  }
})

const handleScroll = (e) => {
  console.log(e, 'scroll')
}
</script>
<style lang="scss" scoped>
.div {
  width: 100vw;
}
</style>
