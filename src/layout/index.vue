<template>
  <div class="home">
    <HelloWorld></HelloWorld>
    <main style="display: flex">
      <!-- 侧边 -->
      <!-- <el-menu
        :default-active="route"
        class="el-menu-vertical-demo menu"
        router
        background-color="rgb(69 165 79)"
        :default-openeds="[]"
        text-color="rgb(255 255 255)"
        active-text-color="#d7efe0"
      >
        <el-sub-menu
          :index="index + ''"
          v-for="(item, index) in menuList"
          :key="index"
        >
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group v-for="(el, i) in item.children" :key="i">
            <el-menu-item :index="el.url">{{ el.title }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu> -->
      <sidebar-menu :router-list="routerList" />
      <div class="routemain">
        <router-view></router-view>
      </div>
      <!-- main -->
    </main>
  </div>
</template>

<script setup>
import { onMounted, computed, getCurrentInstance } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import SidebarMenu from '@/layout/components/SidebarMenu.vue'
import { routes } from '@/router/routes'
const routerList = ref(routes)

onMounted(async () => {})
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    .routemain {
      flex: 1;
      width: 80%;
      padding: 20px;
    }
  }
}
</style>
