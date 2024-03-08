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
          :src="item"
          v-for="item in detail.srcStrUrls"
          :key="item"
          w-225
          h-300
        />
      </div>
    </el-tab-pane>
    <el-tab-pane label="每日行程" name="1">
      <plan :detail="detail"></plan>
    </el-tab-pane>
    <el-tab-pane label="相关费用" name="2">
      <cost w-full p-5 :detail="detail"></cost>
    </el-tab-pane>
    <el-tab-pane label="预定须知" name="3">
      <tips w-full p-5></tips>
    </el-tab-pane>
    <el-tab-pane label="热门点评" name="4"><comments></comments></el-tab-pane>
    <el-tab-pane label="附近酒店" name="5">
      <hotels :area="detail.area" v-if="detail"></hotels>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import cost from './cost.vue'
import plan from './plan.vue'
import comments from './comments.vue'
import tips from './tips.vue'
import hotels from './hotels.vue'

const activeName = ref('0')
defineProps({
  detail: {
    type: Object,
    default: () => {
      area: ''
    }
  }
})
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
