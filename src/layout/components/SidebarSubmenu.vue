<script setup>
import { defineProps } from 'vue'
import SidebarMenuItem from './SidebarMenuItem.vue'
// import { userStore } from '@/store/navUser'
// const store = userStore()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

/**
 * 过滤子菜单
 * @param {Object} item 当前菜单
 */
const getChild = (item) => {
  console.log(item.children, '---')
  let childArr = []
  
  for (let child in item.children) {
    childArr.push(child)
  }
  return childArr
}

const hasChild = (item) => {
  return getChild(item).length > 0
}

const onlyOneChild = (item) => {
  return getChild(item).length === 1
}
</script>

<template>
  <div
    v-if="hasChild(item)"
    class="submenu-box"
    :class="{
      'submenu-box_has': hasChild(item)
    }"
  >
    <template v-if="onlyOneChild(item)">
      <sidebar-menu-item
        :item="getChild(item)[0]"
        :show-icon="true"
        class="nest-menu"
        :class="{ 'nest-menu_one': onlyOneChild(item) }"
      />
    </template>

    <template v-else>
      <el-sub-menu :index="item.name">
        <template #title>
          <el-icon class="menu-icon">
            <component :is="(item.meta, icon)"></component>
          </el-icon>

          <span class="menu-text">{{ item.meta?.title }}</span>
        </template>

        <sidebar-menu-item
          v-for="child in getChild(item)"
          :key="child.path"
          :item="child"
          class="nest-menu"
        />
      </el-sub-menu>
    </template>
  </div>
</template>

<style lang="scss" scoped>
// @import '@/styles/sidebar.scss';

.submenu-box {
  :deep {
    .el-menu-item.is-active > span {
      color: #fff !important;
      font-weight: 500 !important;
    }

    .submenu-box > a > .el-menu-item > span {
      margin-left: 16px;
      color: rgba($color: #fff, $alpha: 0.8);

      &:hover {
        color: #fff;
      }
    }

    .router-link-exact-active {
      font-weight: 500 !important;

      li > span {
        color: red !important;
      }
    }

    .el-submenu.is-active .el-submenu__title {
      span {
        font-weight: 600 !important;
      }
    }

    .el-submenu.is-opened .el-submenu__title {
      background: #292e35 !important;
    }

    .el-submenu__title {
      // margin-top: 8px;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      padding: 0 8px 0px 16px !important;

      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.06);
      }
    }

    .submenu-title-noDropdown {
      // margin-top: 8px;
      padding-left: 16px !important;
      box-sizing: border-box;
      width: 100%;
      height: 40px !important;
      line-height: 40px !important;
      border-radius: 2px;
      // padding: 0 8px 0px 16px !important;
      display: flex;
      align-items: center;

      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.06);
      }
    }

    .el-menu {
      border-right: none;
      background-color: transparent !important;
    }
  }
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 0px !important;
  color: #c5ccd5;
}

.menu-text {
  margin-left: 8px;
  color: #4c545c;
}

.is-active {
  .menu-icon {
    color: #0c5eff;
  }
  .menu-text {
    font-weight: 500 !important;
  }
}

.el-menu-item .is-active .nest-menu {
  .menu-text {
    color: #292e35;
    font-weight: 500;
  }
}

.submenu-box_beta {
  width: 212px;
  position: fixed;
  bottom: 80px;
  left: 12px;
  border-top: 1px solid $gray-2;
  background: $gray-2;
}
</style>
