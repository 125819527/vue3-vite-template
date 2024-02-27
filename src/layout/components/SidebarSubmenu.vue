<script setup>
import { defineProps } from 'vue'
import SidebarMenuItem from './SidebarMenuItem.vue'
 
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
  let childArr = []

  for (let index in item.children) {
    childArr.push(item.children[index])
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
            <component :is="item.meta.icon"></component>
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
.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 0px !important;
  color: #3a84ee;
}
.menu-text {
  margin-left: 8px;
  font-size: 14px;
  color: #000000;
  font-weight: 500;
}

.is-active {
  .menu-icon {
    color: #505e7a;
  }
}
.el-menu-item .is-active .nest-menu {
  .menu-text {
    color: #3a84ee;
    font-weight: 500;
  }
}
</style>
