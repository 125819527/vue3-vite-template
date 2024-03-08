<template>
  <div class="main -flex-column-center-center" ml-10 mr-10 mb-20>
    <el-row w-full justify="space-between">
      <el-col :span="6">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/home/index' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ info.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="6" :offset="10" style="text-align: right">
        <span mr-5>编号：{{ info.id }}</span>
        <span>出发地：{{ info.area }}</span>
      </el-col>
    </el-row>

    <detail :detail="info" v-if="info"></detail>

    <detail-tabs :detail="info" v-if="info"></detail-tabs>

    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import detail from './components/detail.vue'
import detailTabs from './components/detailTabs.vue'
import { onMounted } from 'vue'
import * as api from '@/api/app'

const router = useRouter()
const travelId = ref()
const info = ref({
  area: ''
})

onMounted(() => {
  travelId.value = router.currentRoute.value.query.travelId
  getDetail()
})
/**
 * 获取详情
 */
const getDetail = async () => {
  try {
    const { data } = await api.getScenicDetailApi({ travelId: travelId.value })
    if (data) {
      info.value = data
      info.value.costIncludes = data.costIncludes.slice(1)
    }
  } catch (error) {
    console.log(error)
  }
}
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
