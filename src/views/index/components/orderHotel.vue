<template>
  <div class="other" w-full>
    <div class="input" w-180 p-3 mb-5>
      <h2>可选房间</h2>
      <div class="-flex-row-flex-start-center" mb-1>
        <h4 mr-5>入住日期</h4>
        <el-date-picker
          v-model="date"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="YYYY-MM-DD"
          date-format="YYYY-MM-DD"
          @change="handleDate"
        />
      </div>
    </div>
    <el-divider></el-divider>
    <div class="input comments -flex-column-flex-start-center" w-full p-3 mb-5>
      <div
        class="list"
        w-full
        v-for="(item, index) in info.rootTypeList"
        :key="index"
      >
        <div flex>
          <div class="-flex-column-center-center" mr-10>
            <el-avatar shape="square" :size="110" :src="item.img" />
            <p>{{ item.leftInfo }}</p>
          </div>

          <div ml-3 class="-flex-row-space-between-center" w-full mr-3>
            <div class="right" w-10>
              <el-icon><UserFilled /></el-icon>
              <el-icon><UserFilled /></el-icon>
            </div>
            <el-divider direction="vertical" />
            <div class="right" w-80>
              <p class="-text-6-ellipsis">{{ item.middleInfo }}</p>
            </div>
            <el-divider direction="vertical" />
            <div class="right" w-80>
              <p class="-text-6-ellipsis">{{ item.rightInfo }}</p>
            </div>
            <el-divider direction="vertical" />
            <div class="right">
              <p font-size-6 color="#3a84ee" font-600 mr-5>
                <span class="price-old" font-size-4 color="gray">￥400</span>
                <span font-size-5>￥</span>
                300
                <span font-size-4 color="#b2b2b2" font-400></span>
              </p>
              <el-button type="primary" @click="order">预定</el-button>
            </div>
          </div>
        </div>

        <el-divider></el-divider>
      </div>
    </div>

    <div class="input comments -flex-column-flex-start-center" w-full p-3 mb-5>
      <div w-full class="-flex-row-flex-start-center">
        <el-icon color="#e9b555" mr-1><Opportunity /></el-icon>
        <h2 w-50>酒店政策</h2>
      </div>
      <div w-full v-for="(item, index) in info.policyInfoList" :key="index">
        <h4>{{ item.title }}</h4>
        <ul>
          <li>
            <p>{{ item.info }}</p>
          </li>
        </ul>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="提交预定" width="500">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item label="预定姓名" prop="username">
          <el-input v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="联系方式" prop="mobile">
          <el-input
            v-model.number="form.mobile"
            autocomplete="off"
            type="text"
          />
        </el-form-item>
        <el-form-item
          label="酒店名称"
          prop="shopName"
          class="-flex-row-center-center"
        >
          <p font-size-5 font-500>{{ form.shopName }}</p>
        </el-form-item>
        <el-form-item
          label="酒店地点"
          prop="area"
          class="-flex-row-center-center"
        >
          <p font-size-5 font-500>{{ form.area }}</p>
        </el-form-item>
        <el-form-item
          label="预定天数"
          prop="travelNum"
          class="-flex-row-center-center"
        >
          <p font-size-5 font-500>{{ form.travelNum }}天</p>
        </el-form-item>
        <el-form-item label="订单总价" class="-flex-row-center-center">
          <p font-size-5 font-500>{{ form.travelNum * 300 }}元</p>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="orderConfirm(formRef)">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { userStore } from '@/store/user'
import { ElMessage } from 'element-plus'
import * as api from '@/api/app'
const date = ref()

const user = userStore()
const dialogVisible = ref(false)

const info = ref({
  rootTypeList: [],
  policyInfoList: []
})
const form = reactive({
  userId: user.getInfo.userId,
  username: '',
  mobile: '',
  shopId: 0,
  type: 2, // 1景点 2酒店
  travelNum: 0,
  shopName: '',
  area: ''
})
const formRef = ref()
const rules = reactive({
  username: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 1, max: 10, message: '请输入1-10字符', trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: '请输入联系方式' },
    { type: 'number', message: '请输入正确联系方式' }
  ]
})

const order = () => {
  if (!date.value) {
    return ElMessage.warning('请先选择日期')
  }
  const travelNum = daysDifference()

  //TODO shopId 为当前酒店id
  form.shopId = info.value.id
  form.travelNum = travelNum
  form.shopName = info.value.headlineTitle
  form.area = info.value.localtion

  dialogVisible.value = true
}
onMounted(() => {
  getDetail()
})

const daysDifference = () => {
  // 计算两个日期之间的毫秒差值
  var differenceInMilliseconds = Math.abs(
    date.value[1].getTime() - date.value[0].getTime()
  )

  // 一天的毫秒数是 24小时 * 60分钟 * 60秒 * 1000毫秒
  var oneDayInMilliseconds = 24 * 60 * 60 * 1000

  // 计算相差的天数并向下取整
  var differenceInDays = Math.floor(
    differenceInMilliseconds / oneDayInMilliseconds
  )

  return differenceInDays
}
const orderConfirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      handleOrder()
    } else {
      console.log('error submit!', fields)
    }
  })
}

/**
 * 获取酒店详情
 *
 */
const getDetail = () => {
  try {
    // const {data} = await api.
    const data = {
      id: 1,
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
        },
        {
          leftInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟',
          img: 'https://dimg04.c-ctrip.com/images/0303r12000cwse3vr8363_D_350_170_Q70.jpg',
          middleInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟',
          rightInfo: '城际大床房1张1.5米双人床 | 30m² | 落地窗 | 禁烟'
        },
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
/**
 * 提交订单
 *
 */
const handleOrder = async () => {
  try {
    await api.addOrderApi(form)
    ElMessage({
      message: '预定成功',
      type: 'success'
    })
    dialogVisible.value = false
  } catch (error) {
    ElMessage({
      message: '预定失败，请重试',
      type: 'success'
    })
    dialogVisible.value = false
    console.log(error)
  }
}
</script>

<style scoped lang="scss">
:deep {
  .el-divider__text {
    font-size: 18px;
  }
}
p {
  margin: 5px 0;
}
.input {
  border-radius: 5px;
  background-color: #f6f8fa;
}
.comments {
  background-color: #fff;
  padding: 10px;
}
.price-old {
  text-decoration: line-through;
}
</style>
