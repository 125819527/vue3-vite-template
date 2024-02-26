<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  showIcon: {
    type: Boolean,
    default: () => {
      return false
    }
  }
})
</script>

<template>
  <el-menu-item :index="item.path">
    <el-icon class="menu-icon">
      <component :is="(item.meta, icon)"></component>
    </el-icon>
    <span class="menu-text">{{ item.meta?.title || item.name }}</span>
  </el-menu-item>
</template>

<style lang="scss" scoped>
.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 0px !important;
  color: #c5ccd5;
}
.menu-text {
  margin-left: 8px;
  font-size: 14px;
  color: #4c545c;
}

.is-active {
  .menu-icon {
    color: #0c5eff;
  }
}
.el-menu-item .is-active .nest-menu {
  .menu-text {
    color: #292e35;
    font-weight: 500;
  }
}
</style>
