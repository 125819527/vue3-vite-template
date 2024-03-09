<template>
  <div flex-col h-full class="div">
    <sidebar-menu :router-list="routerList" :op="op" />
    <!-- main -->
    <div class="routemain" mt-24 h-full>
      <router-view :key="cRoute"></router-view>
    </div>
    <footer>
      <p>版权所有</p>
      <p>联系电话：020-88888888 联系邮箱：1234567@163.com</p>
      <p>©2024-2024智慧旅游信息管理网</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SidebarMenu from '@/layout/components/SidebarMenu.vue'
import { menuStore } from '@/store/menu'

const router = useRouter()
const menu = menuStore()
const routerList = ref([])
const op = ref(1)

let cRoute = computed(() => {
  return router.currentRoute.value.fullPath
})
onMounted(async () => {
  window.addEventListener('scroll', handleScroll, true)
  if (menu.getMenuList.length) {
    routerList.value = menu.getMenuList
  } else {
    menu.addMenuList(JSON.parse(localStorage.getItem('menu')))
  }

  routerList.value = menu.getMenuList
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
footer {
  background-color: #f6f8fa;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  p {
    margin: 5px 0;
  }
}
.routemain {
  min-height: 74vh;
}
</style>
