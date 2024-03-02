<template>
  <div class="main -flex-column-center-center" ml-10 mr-10 mb-20>
    <el-row w-full justify="space-between">
      <el-col :span="4">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/home/index' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>景点详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="6" :offset="10" style="text-align: right">
        <span mr-5>编号：1311413434134134</span>
        <span>出发地：北京</span>
      </el-col>
    </el-row>

    <detail></detail>

    <detail-tabs></detail-tabs>

    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
import detail from './components/detail.vue'
import detailTabs from './components/detailTabs.vue'
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.content {
  .price {
    background-color: #fdf9ef;
    border-radius: 5px;
  }
  p {
    font-family: sans-serif;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .score {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
