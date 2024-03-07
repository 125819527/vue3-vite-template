<template>
  <div flex>
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
        <p
          font-600
          w-full
          mt-1
          mb-2
          :style="{
            color: '#427bf2',
            fontSize: '16px'
          }"
        >
          地点：{{ item.localtion }}
        </p>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import * as api from '@/api/app'
import router from '@/router'
import { onMounted } from 'vue'
const hotels = ref([])

onMounted(() => {
  getHotels()
})
const getHotels = async () => {
  try {
    const { data } = await api.getHotelApi()
    if (data) {
      hotels.value = data
    }
  } catch (error) {
    const data = [
      {
        headlineTitle: '上海新国际博览中心城际酒店',
        starImg:
          'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        area: '北京',
        localtion: '上海浦东新区兰花路308号盈丰天地A座五层',
        summaryImg: [
          'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
          'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
          'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg'
        ],
        summaryInfo:
          '酒店从高品质、高效率的德式基调出发，打造出专为商务休闲旅客细心设想的待客之道。酒店讲究简约时尚的设计，舒适便捷的设施与精致贴心的服务，客房内部皆采用高智能设计，德龙热水壶，小度全智能控制，电子窗帘以及全床型舒达床垫给客人的舒适感。并拥有多元优质配 套设施，如灵动的功能性会议空间 "好会"，配备有独立的投影仪设备、音响设备、电视机等符合现代化会议及办公的各项设施，是您会议、培训、私人聚会的首选。',
        characteristic:
          '酒店从高品质、高效率的德式基调出发，打造出专为商务休闲旅客细心设想的待客之道。',
        facilities: [],
        around: [],
        rootTypeList: [
          {
            leftInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟',
            img: 'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
            middleInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟',
            rightInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟'
          }
        ],
        policyInfoList: [
          {
            title: '订房必读',
            info: '为贯彻落实《上海市生活垃圾管理条例》相关规定，推进生活垃圾源头减量，上海市文化和旅游局特制定《关于本市旅游住宿业不主动提供客房一次性日用品的实施意见》，2019年7月1日起，上海市旅游住宿业将不再主动提供牙刷、梳子、浴擦、剃须刀、指甲锉、鞋擦这些一次性日用品。若需要可咨询酒店。'
          },
          {
            title: '订房必读',
            info: '为贯彻落实《上海市生活垃圾管理条例》相关规定，推进生活垃圾源头减量，上海市文化和旅游局特制定《关于本市旅游住宿业不主动提供客房一次性日用品的实施意见》，2019年7月1日起，上海市旅游住宿业将不再主动提供牙刷、梳子、浴擦、剃须刀、指甲锉、鞋擦这些一次性日用品。若需要可咨询酒店。'
          },
          {
            title: '订房必读',
            info: '为贯彻落实《上海市生活垃圾管理条例》相关规定，推进生活垃圾源头减量，上海市文化和旅游局特制定《关于本市旅游住宿业不主动提供客房一次性日用品的实施意见》，2019年7月1日起，上海市旅游住宿业将不再主动提供牙刷、梳子、浴擦、剃须刀、指甲锉、鞋擦这些一次性日用品。若需要可咨询酒店。'
          }
        ]
      }
    ]
    hotels.value = data
    console.log(error)
  }
}
const goHotel = async () => {
  router.push({ path: '/hotelDetail', query: { id: '111' } })
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
