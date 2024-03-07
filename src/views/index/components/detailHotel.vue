<template>
  <div class="content -flex-column-center-center" w-full p-5 mt-3>
    <div class="left" w-full mb-3 mr-10 p-5>
      <h1 class="title">{{ info.headlineTitle }}</h1>
      <p ccolor="#b2b2b2" font-size-4 mt-1 mb-5 class="-text-6-ellipsis">
        {{ info.summaryInfo }}
      </p>

      <div class="price" w-full p-2 mb-3>
        <div class="-flex-row-flex-start-center">
          <p font-size-8 color="#3a84ee" font-600 mr-5>
            <span font-size-5>￥</span>
            300
            <span font-size-4 color="#b2b2b2" font-400>晚起</span>
          </p>

          <div class="-flex-row-flex-start-center">
            <el-tag plain type="warning">立即折扣</el-tag>
            <el-tag plain type="error" mr-3 ml-3>已减700</el-tag>
          </div>
        </div>

        <p
          font-size-6
          color="#f3b23e"
          mr-3
          font-600
          class="-flex-row-flex-start-center"
        >
          <el-icon v-for="index in 5" :key="index" mr-2>
            <StarFilled />
          </el-icon>
          4.9
          <span font-size-4 font-400>分</span>
        </p>
        <p font-size-4 color="#455873" font-400>酒店所在地：{{ info.area }}</p>
        <p font-size-4 color="#455873" font-400>地址：{{ info.localtion }}</p>
        <p font-size-4 color="#455873" font-400>
          特点：{{ info.characteristic }}
        </p>

        <div class="-flex-row-flex-start-center">
          <p font-size-3 color="#455873" mr-2>
            酒店特色
            <el-tag
              plain
              type="primary"
              mr-3
              ml-3
              v-for="item in info.facilities"
              :key="item"
            >
              {{ item }}
            </el-tag>
            <span font-size-3 color="gray">最少可得39积分</span>
          </p>
        </div>

        <div class="-flex-row-flex-start-center">
          <p font-size-3 color="#455873" mr-2>
            酒店周边
            <el-tag
              plain
              type="primary"
              mr-3
              ml-3
              v-for="item in info.around"
              :key="item"
            >
              {{ item }}
            </el-tag>
          </p>
        </div>
      </div>
    </div>
    <div class="right" h-100 pt-4 w-full>
      <div class="imgs" w-full mb-1 h-full>
        <el-row h-full w-full>
          <el-col :span="8" mr-2 h-full w-ful>
            <img :src="info.starImg" class="image" w-full h-full />
          </el-col>

          <el-col :span="8" mr-2 h-full w-ful>
            <img :src="info.summaryImg[0]" class="image" w-full h-full />
          </el-col>
          <el-col :span="7" class="-flex-column-center-center" h-full w-ful>
            <img :src="info.summaryImg[1]" class="image" w-full pb-1 h-59 />

            <img :src="info.summaryImg[2]" class="image" w-full h-59 />
            <div class="last-hover -flex-row-center-center" @click="openMore">
              <span color="#fff" font-size-3>查看更多图片</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="全部图片" width="60%">
    <div class="swiper" w-full p-5>
      <el-carousel :interval="3000" height="400px" arrow="always">
        <el-carousel-item v-for="(item, index) in info.summaryImg" :key="index">
          <img :src="item" class="image" w-full h-full />
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-dialog>
</template>
<script setup>
import * as api from '@/api/app'
const dialogVisible = ref(false)
const openMore = () => {
  console.log('openMore')
  dialogVisible.value = true
}
const info = ref({
  summaryImg: [],
  rootTypeList: [],
  policyInfoList: []
})
const endDdate = ref(null)

onMounted(() => {
  let currentDate = new Date()
  // 增加两个月份（注意：getMonth()返回的是0-11的数字，因此需要加2再减去1）
  currentDate.setMonth(currentDate.getMonth() + 2)
  endDdate.value = currentDate
  getDetail()
})

const getDetail = () => {
  try {
    // const {data} = await api.
    const data = {
      headlineTitle: '上海新国际博览中心城际酒店',
      starImg:
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
      area: '北京',
      localtion: '上海浦东新区兰花路308号盈丰天地A座五层',
      summaryImg: [
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg'
      ],
      summaryInfo:
        '酒店从高品质、高效率的德式基调出发，打造出专为商务休闲旅客细心设想的待客之道。酒店讲究简约时尚的设计，舒适便捷的设施与精致贴心的服务，客房内部皆采用高智能设计，德龙热水壶，小度全智能控制，电子窗帘以及全床型舒达床垫给客人的舒适感。并拥有多元优质配 套设施，如灵动的功能性会议空间 "好会"，配备有独立的投影仪设备、音响设备、电视机等符合现代化会议及办公的各项设施，是您会议、培训、私人聚会的首选。',
      characteristic:
        '酒店从高品质、高效率的德式基调出发，打造出专为商务休闲旅客细心设想的待客之道。',
      facilities: ['订房必读', '订房必读'],
      around: ['订房必读', '订房必读', '订房必读'],
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
    info.value = data
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
:deep {
  .el-carousel__arrow {
    font-size: 30px;
    color: #475669;
    font-weight: 500;
    background-color: transparent;
  }
}
div {
  box-sizing: border-box;
}
.content {
  border-radius: 10px;
  background: #fff;
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
.last-hover {
  position: absolute;
  width: 29%;
  height: 49%;
  top: 51%;
  background-color: #00000054;

  text-align: center;
}
.last-hover:hover {
  cursor: pointer;
  background-color: #00000074;
}

// todo
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
