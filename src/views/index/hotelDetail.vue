<template>
  <div class="main -flex-column-center-center" ml-10 mr-10 p-10 mb-20>
    <el-row w-full justify="space-between">
      <el-col :span="4">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/home/index' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>酒店详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <detailHotel></detailHotel>
    <orderHotel></orderHotel>
    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
import detailHotel from './components/detailHotel.vue'
import orderHotel from './components/orderHotel.vue'
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
.main {
  background-color: #f6f8fa;
  border-radius: 5px;
  
}
</style>
