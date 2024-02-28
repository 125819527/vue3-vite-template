<template>
  <div flex-col h-full class="div"  >
    <sidebar-menu :router-list="routerList" :op="op" />

    <div class="routemain" mt-24 >
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
const op = ref(1)

onMounted(async () => {
  window.addEventListener('scroll', handleScroll, true)
  if (localStorage.getItem('menu')) {
    routerList.value = JSON.parse(localStorage.getItem('menu'))
  } else {
    routerList.value = store.getMenuList
    // 存入菜单到本地
    localStorage.setItem('menu', JSON.stringify(store.getMenuList))
  }
})

const handleScroll = (e) => {
  let top = document.documentElement.scrollTop
  if (top > 60 && top <= 300) {
    op.value = top / 300
  } else if (top < 60 && top > 0) {
    op.value = 0
  } else if (top == 0) {
    op.value = 1
  }
}
</script>
<style lang="scss" scoped>
.div {
  width: 100vw;
}
</style>
