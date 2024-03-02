<template>
  <el-tabs
    v-model="activeName"
    class="list-tabs"
    @tab-click="handleClick"
    w-full
  >
    <el-tab-pane label="产品详情" name="0">
      <div class="detail" w-full p-5>
        <h2>产品详情</h2>
        <img
          src="https://dimg04.c-ctrip.com/images/0303p120003qjefmg966C.jpg"
          v-for="index in 3"
          :key="index"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="相关费用" name="1">
      <cost w-full p-5></cost>
    </el-tab-pane>
    <el-tab-pane label="预定须知" name="2">
      <tips w-full p-5></tips>
    </el-tab-pane>
    <el-tab-pane label="热门点评" name="3"><comments></comments></el-tab-pane>
    <el-tab-pane label="附近酒店" name="4"><hotels></hotels></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import cost from './cost.vue'

import comments from './comments.vue'
import tips from './tips.vue'
import hotels from './hotels.vue'

const activeName = ref('0')
</script>
<style scoped lang="scss">
:deep {
  .el-tabs__item {
    font-size: 20px;
  }
}
.detail {
  background-color: #f6f8fa;
}
</style>
