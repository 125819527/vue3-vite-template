<template>
  <div flex class="box">
    <el-card
      shadow="hover"
      v-for="(item, index) in hotels"
      :key="index"
      @click="goHotel(item)"
    >
      <img :src="item.starImg" class="image" w-full h-30 />
      <div style="padding: 14px">
        <span class="-text-more-ellipsis" font-500>
          {{ item.headlineTitle }}
        </span>
        <div>
          <el-icon color="#ffd74a" v-for="index in 5" :key="index">
            <StarFilled />
          </el-icon>
        </div>
        <p mt-1 mb-2>地点：{{ item.localtion }}</p>
        <p font-600 w-full mt-1 mb-2 font-size-6 color="#427bf2">
          ¥{{ item.price }}晚起
        </p>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import * as api from '@/api/app'
import router from '@/router'
import { onMounted, watch, defineProps } from 'vue'

const hotels = ref([])
const page = reactive({
  pageNo: 1,
  pageSize: 10
})

const props = defineProps({
  area: {
    type: String,
    default: ''
  }
})

watch(props, (val) => {
  if (val) {
    getHotels()
  }
})

const getHotels = async () => {
  try {
    const { data } = await api.getHotelApi({ ...page, area: props.area })

    if (data.hotelVoList) {
      hotels.value = data.hotelVoList
    }
  } catch (error) {
    console.log(error)
  }
}
const goHotel = async (item) => {
  router.push({ path: '/hotelDetail', query: { hotelId: item.id } })
}
</script>

<style scoped lang="scss">
:deep {
  .el-card__body {
    padding: 5px;
  }
}
.box {
  flex-wrap: wrap;
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
