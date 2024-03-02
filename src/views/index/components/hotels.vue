<template>
  <div flex>
    <el-card shadow="hover" v-for="index in 5" :key="index" @click="goHotel">
      <img
        src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
        class="image"
      />
      <div style="padding: 14px">
        <span class="-text-more-ellipsis" font-500>
          九寨沟+黄龙风景名胜区3日2晚跟团游·《国旅真纯玩》+携程5钻酒店+9:30出发C线（住希尔顿酒店J线+住五星豪生H线）+熊猫景区+赠藏家晚会+享五钻酒店美食+可选头等舱保姆车+免费包接+国旅官方直营+35000多人出游选择
        </span>
        <div>
          <el-icon color="#ffd74a" v-for="index in 5" :key="index">
            <StarFilled />
          </el-icon>
        </div>
        <p
          font-600
          w-full
          mt-1
          mb-2
          :style="{
            color: '#ed702d',
            fontSize: '20px'
          }"
        >
          ¥ 1599
        </p>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import router from '@/router'
const goHotel = () => {
  console.log('goHotel')
  router.push({ path: '/hotelDetail', query: { id: '11111' } })
}
</script>

<style scoped lang="scss">
:deep {
  .el-card__body {
    padding: 5px;
  }
}

.el-card {
  margin-right: 2%;
  margin-left: 2%;
  width: 220px;
  margin-bottom: 10px;
  span {
    cursor: pointer;
  }
  .image:hover {
    transition: all 0.5s;
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
