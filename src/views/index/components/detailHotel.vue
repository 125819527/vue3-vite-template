<template>
  <div class="content" w-full flex p-5 mt-3>
    <div class="left" w-164 mb-15 mr-10>
      <h2 class="title">九寨沟+黄龙风景名胜区3日2晚跟团游</h2>
      <p ccolor="#b2b2b2" font-size-4 mt-1 mb-5 class="-text-6-ellipsis">
        酒店从高品质、高效率的德式基调出发，打造出专为商务休闲旅客细心设想的待客之道。
        酒店讲究简约时尚的设计，舒适便捷的设施与精致贴心的服务，客房内部皆采用高智能设计，德龙热水壶，小度全智能控制，电子窗帘以及全床型舒达床垫给客人的舒适感。并拥有多元优质配
        套设施，如灵动的功能性会议空间
        "好会"，配备有独立的投影仪设备、音响设备、电视机等符合现代化会议及办公的各项设施，是您会议、培训、私人聚会的首选。
        具有德国风情的现代餐厅“好味”结合了季节性以及德式风味主题，经典的德式酒吧提供优质德国进口饮料酒水，加上传统的Happy
        Hour元素融入其中，必定是让顾客流连忘返的优质社交空间。
        环境优雅的行政酒廊“好聚”是谈生意的佳选。音乐舒缓，服务周到，轻饮食的复合式休闲空间，让宾客在紧凑忙碌的行程中游刃有余并随时补充能量。
        “好物”大堂吧精心为您准备了多种美味的咖啡，愿您在这喧嚣的城市中享受片刻的宁静。能提供高端贴心的服务，给商务客人小憩以及小酌的片刻悠闲。
        另外为商务宾客特别设计的健身房“好体”，为住店宾客，更能纾压唤醒身心，是健身及放松的理想私人空间。
        “好净”多功能自助免费洗衣房，采用高端品牌顶配商用洗衣烘干设备，高温+紫外线消毒保障卫生安全，洗衣烘干分开不伤衣物，为您的出行提供无忧保障。
        酒店为爱城市、爱旅行的每一位宾客，在快节奏的忙碌生活之中，找到一席心灵休憩之所，重新焕活能量，在尽情去探索大千世界之间，同时提升自己的生活状态。
      </p>

      <div class="price" w-full p-2 mb-3>
        <div class="-flex-row-flex-start-center">
          <p font-size-6 color="#3a84ee" font-600 mr-5>
            <span font-size-5>￥</span>
            300
            <span font-size-4 color="#b2b2b2" font-400>起</span>
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

        <div class="-flex-row-flex-start-center">
          <p font-size-3 color="#666666" mr-2>
            会员权益
            <el-tag plain type="primary" mr-3 ml-3>白银会员</el-tag>
            <span font-size-3 color="gray">最少可得39积分</span>
          </p>
        </div>
      </div>
    </div>
    <div class="right" h-full pt-4>
      <div class="imgs" w-full mb-1>
        <el-row h-full w-full>
          <el-col :span="10">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
          </el-col>
          <el-col :span="8" pl-1 pr-1>
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
          </el-col>
          <el-col :span="6" class="-flex-column-center-center">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
              pb-1
            />

            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
          </el-col>
        </el-row>
      </div>
      <div class="imgs" w-full mb-1>
        <el-row h-full w-full>
          <el-col :span="10">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
          </el-col>
          <el-col :span="8" pl-1 pr-1>
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
          </el-col>
          <el-col :span="6" class="-flex-column-center-center">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
              pb-1
            />

            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
              w-full
              h-full
            />
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
        <el-carousel-item v-for="index in 6" :key="index">
          <img
            src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
            class="image"
            w-full
            h-full
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-dialog>
</template>
<script setup>
const dialogVisible = ref(false)
const openMore = () => {
  console.log('openMore')
  dialogVisible.value = true
}

const endDdate = ref(null)

onMounted(() => {
  let currentDate = new Date()

  // 增加两个月份（注意：getMonth()返回的是0-11的数字，因此需要加2再减去1）
  currentDate.setMonth(currentDate.getMonth() + 2)

  endDdate.value = currentDate

  console.log(endDdate.value, new Date())
})
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
  width: 25%;
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
