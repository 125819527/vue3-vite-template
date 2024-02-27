<script setup>
import { computed } from 'vue'
// import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
import SidebarSubmenu from './SidebarSubmenu.vue'
import NavBar from './NavBar.vue'

defineProps({
  routerList: {
    type: Object,
    default: () => {
      return []
    }
  }
})
const router = useRouter()
const defaultActive = computed(() => {
  return (
    router.currentRoute.value?.meta.activeMenu || router.currentRoute.value.path
  )
})
</script>

<template>
  <div class="-flex" flex>
    <div class="logo -flex-row-center-center" pr-5 w-70 h-14>
      <img src="@/assets/logo.png" width="35px" height="35px" ml-2 mr-2 />
      <h3 style="color: #3e75dc">旅游信息管理网</h3>
    </div>
    <el-menu
      mode="horizontal"
      router
      background-color="#fff"
      padding-left="16px"
      :default-active="defaultActive"
      class="menu"
    >
      <sidebar-submenu
        v-for="route in routerList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
    <nav-bar></nav-bar>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 57px;
  box-shadow: 0 2px 2px -1px rgba(27, 36, 44, 0.1),
    0 2px 8px -1px rgba(27, 36, 44, 0);
  width: 100%;
  border-bottom: none;
}

.logo {
  box-shadow: 0 2px 2px -1px rgba(27, 36, 44, 0.1),
    0 2px 8px -1px rgba(27, 36, 44, 0);
}

:deep {
  // 一级菜单 - 鼠标悬浮
  .nest-menu_one,
  .el-sub-menu__title {
    &:hover {
      background: #f3f8fd !important;

      .menu-icon {
        color: #0c5eff !important;
        font-weight: 600;
      }
    }
  }

  // 二级菜单 - 鼠标悬浮
  .el-menu-item {
    border-radius: 4px;
    background: transparent !important;

    &:hover {
      background: #f3f8fd !important;
    }

    &.is-active {
      border-radius: 0px;
      background: linear-gradient(270deg, #6fb4ef, #3377ed) !important;
    }
    &.is-active .menu-text {
      color: #fff;
      font-weight: 600;
    }
    &.is-active .menu-icon {
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
