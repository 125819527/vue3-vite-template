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
      <component :is="(item.meta.icon)"></component>
    </el-icon>
    <span class="menu-text">{{ item.meta?.title || item.name }}</span>
  </el-menu-item>
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
