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

    <detail :detail="info"></detail>

    <detail-tabs :detail="info"></detail-tabs>

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
const info = ref({})

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
    }
  } catch (error) {
    const data = {
      id: 1,
      area: '北京',
      title: '九寨沟+黄龙风景名胜区3日2晚跟团游',
      summary:
        '优选纯玩~多套餐<高铁游/熊猫园/都江堰/懒人9点出发>可选·三环包接/5A景点/特色美食·连住2晚九寨沟口<四钻/五钻>低海拔酒店·附加项可升级保姆车【空间宽敞&座椅可调&配充电口】',
      summaryPics: [
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
        'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg'
      ],
      characteristic: [
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务',
        '导游服务'
      ],
      guarantee: '放心游',
      supplier: '四川啊客户发客户哦啊哦豁哦',
      sellingPoint:
        '★ 【服务保障】👍《本套餐：国旅官方直营--真纯玩》+《更多销量+35000多人的厚爱选择》 👍【本套餐：包含4大景区：九寨沟景区+黄龙景区+松潘古城景区+都江堰熊猫景区】游览更多景点 👍《本套餐：全程升级携程5钻度假酒店+升级5钻酒店晚餐》★ 【缤纷景点】👍【9:30晚出发选CD线套餐】 👍【升级五星国际天源豪生酒店选HI线套餐+升级5五星酒店晚餐】 👍【升级五星国际品牌希尔顿酒店选J线套餐+升级希尔顿酒店晚餐】★ 【超值赠送】👍《国旅官方直营--真纯玩无购物》 👍《特色用餐+赠走进藏家家访晚会+24小时国旅客服+国旅专业大咖导游》 👍《赠成都三环内免费上门接》',
      srcStrUrls: [
        'https://dimg04.c-ctrip.com/images/0303p120003qjefmg966C.jpg',
        'https://dimg04.c-ctrip.com/images/0303p120003qjefmg966C.jpg',
        'https://dimg04.c-ctrip.com/images/0303p120003qjefmg966C.jpg'
      ],
      costIncludes: [
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        },
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        },
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        }
      ],
      costSelf: [
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        },
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        },
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        },
        {
          consumerType: '交通',
          cost1: '用车：往返旅游巴士',
          cost2: '用车：往返旅游巴士',
          sort: 0
        }
      ],
      price: 999,
      itinerary: [
        {
          name: '成都--游览【都江堰熊猫基地景区】--汶川--茂县--游览【松潘古城景区】--九寨沟：全程升级携程五钻酒店《国旅直营--真纯玩》',
          itineraryDetailList: [
            {
              subTime: '07:00',
              title: '自由活动',
              hotel:
                '【国旅直营营--纯玩：九寨沟+黄龙+松潘古城+都江堰熊猫基地景区3日游+携程5钻酒店】',
              content:
                '本行程21000多人的选择和好评，销量证明我们的产品获得更多游客预定、更多人的选择，更多人的厚爱！！！！本行程全程升级携程5钻酒店连住+酒店级别更高、入住体验更舒适！！！成都三环内小车免费上门到酒店接客人，集合时间约07：00左右（接人时间会比集合时间早，根据季节和节假日接人、集合、出发和到达时间会有变化，行程所列仅供参考，以出团前接人师傅或导游通知为准）同时根据您入住成都酒店的地址不同，早上来接您的时间也会不同，个别游客可能会提前接到集合地点，建议您预订的酒店尽可能靠近宽窄巷子方便您逛街吃饭、早上接人和游玩；具体接的时间由工作人员提前一天晚上19：00-21:30电话通知，请保持电话畅通，如超过这个时间没有与您联系，请务必及时与客服联系，以免耽误您的行程。（春熙路、太古里、大慈寺、成都兰桂坊、九眼桥、盐市口、天府广场、武侯祠、锦里、宽窄巷子、文殊坊、杜甫草堂等附近都是可免费接范围）',
              touristContentList: [
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                }
              ]
            },
            {
              subTime: '03:00',
              title: 'aefefaefaef',
              hotel:
                '【国旅直营营--纯玩：九寨沟+黄龙+松潘古城+都江堰熊猫基地景区3日游+携程5钻酒店】',
              content:
                '本行程21000多人的选择和好评，销量证明我们的产品获得更多游客预定、更多人的选择，更多人的厚爱！！！！本行程全程升级携程5钻酒店连住+酒店级别更高、入住体验更舒适！！！成都三环内小车免费上门到酒店接客人，集合时间约07：00左右（接人时间会比集合时间早，根据季节和节假日接人、集合、出发和到达时间会有变化，行程所列仅供参考，以出团前接人师傅或导游通知为准）同时根据您入住成都酒店的地址不同，早上来接您的时间也会不同，个别游客可能会提前接到集合地点，建议您预订的酒店尽可能靠近宽窄巷子方便您逛街吃饭、早上接人和游玩；具体接的时间由工作人员提前一天晚上19：00-21:30电话通知，请保持电话畅通，如超过这个时间没有与您联系，请务必及时与客服联系，以免耽误您的行程。（春熙路、太古里、大慈寺、成都兰桂坊、九眼桥、盐市口、天府广场、武侯祠、锦里、宽窄巷子、文殊坊、杜甫草堂等附近都是可免费接范围）',
              touristContentList: []
            }
          ]
        },
        {
          name: '成都--游览【都江堰熊猫基地景区】--汶川--茂县--游览【松潘古城景区】--九寨沟：全程升级携程五钻酒店《国旅直营--真纯玩》',
          itineraryDetailList: [
            {
              subTime: '07:00',
              title: '自由活动',
              hotel:
                '【国旅直营营--纯玩：九寨沟+黄龙+松潘古城+都江堰熊猫基地景区3日游+携程5钻酒店】',
              content:
                '本行程21000多人的选择和好评，销量证明我们的产品获得更多游客预定、更多人的选择，更多人的厚爱！！！！本行程全程升级携程5钻酒店连住+酒店级别更高、入住体验更舒适！！！成都三环内小车免费上门到酒店接客人，集合时间约07：00左右（接人时间会比集合时间早，根据季节和节假日接人、集合、出发和到达时间会有变化，行程所列仅供参考，以出团前接人师傅或导游通知为准）同时根据您入住成都酒店的地址不同，早上来接您的时间也会不同，个别游客可能会提前接到集合地点，建议您预订的酒店尽可能靠近宽窄巷子方便您逛街吃饭、早上接人和游玩；具体接的时间由工作人员提前一天晚上19：00-21:30电话通知，请保持电话畅通，如超过这个时间没有与您联系，请务必及时与客服联系，以免耽误您的行程。（春熙路、太古里、大慈寺、成都兰桂坊、九眼桥、盐市口、天府广场、武侯祠、锦里、宽窄巷子、文殊坊、杜甫草堂等附近都是可免费接范围）',
              touristContentList: [
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                },
                {
                  tourist: '直营营--纯玩：九寨沟+黄龙+松潘',
                  img: '//dimg04.c-ctrip.com/images/0100k12000a9up2285274_D_256_180.jpg'
                }
              ]
            },
            {
              subTime: '03:00',
              title: 'aefefaefaef',
              hotel:
                '【国旅直营营--纯玩：九寨沟+黄龙+松潘古城+都江堰熊猫基地景区3日游+携程5钻酒店】',
              content:
                '本行程21000多人的选择和好评，销量证明我们的产品获得更多游客预定、更多人的选择，更多人的厚爱！！！！本行程全程升级携程5钻酒店连住+酒店级别更高、入住体验更舒适！！！成都三环内小车免费上门到酒店接客人，集合时间约07：00左右（接人时间会比集合时间早，根据季节和节假日接人、集合、出发和到达时间会有变化，行程所列仅供参考，以出团前接人师傅或导游通知为准）同时根据您入住成都酒店的地址不同，早上来接您的时间也会不同，个别游客可能会提前接到集合地点，建议您预订的酒店尽可能靠近宽窄巷子方便您逛街吃饭、早上接人和游玩；具体接的时间由工作人员提前一天晚上19：00-21:30电话通知，请保持电话畅通，如超过这个时间没有与您联系，请务必及时与客服联系，以免耽误您的行程。（春熙路、太古里、大慈寺、成都兰桂坊、九眼桥、盐市口、天府广场、武侯祠、锦里、宽窄巷子、文殊坊、杜甫草堂等附近都是可免费接范围）',
              touristContentList: []
            }
          ]
        }
      ]
    }
    info.value = data
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
