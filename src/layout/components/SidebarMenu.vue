<script setup>
import { computed } from 'vue'
// import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
import SidebarSubmenu from './SidebarSubmenu.vue'

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
const isCollapse = ref(false)
</script>

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      router
      popper-effect="light"
      background-color="transparent"
      :unique-opened="true"
      text-color="#4C545C"
      active-text-color="#292E35"
      padding-left="16px"
      :collapse-transition="true"
      :default-active="defaultActive"
      :collapse="isCollapse"
    >
      <sidebar-submenu
        v-for="route in routerList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
:deep {
  // 一级菜单 - 鼠标悬浮
  .nest-menu_one,
  .el-sub-menu__title {
    &:hover {
      background: #e1e6eb !important;

      .menu-icon {
        color: #0c5eff !important;
      }
    }
  }

  // 二级菜单 - 鼠标悬浮
  .el-menu-item {
    border-radius: 4px;
    background: transparent !important;

    &:hover {
      background: #e1e6eb !important;
    }

    &.is-active {
      background: #fff !important;
    }
  }
}

.scrollbar-wrapper {
  margin-top: 32px;
}

.hamburger-container {
  position: absolute;
  bottom: 60px;
  right: 0px;
  line-height: 46px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
</style>
