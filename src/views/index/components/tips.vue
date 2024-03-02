<template>
  <div class="other" w-full p-5>
    <div v-for="(item, index) in data" :key="index">
      <h3>{{ item.title }}</h3>
      <ul v-if="item.item.length">
        <li v-for="(li, index1) in item.item" :key="index1">
          <p
            v-for="(text, index) in li.text"
            :key="index"
            :style="{
              color: index == 2 ? '#4e82e7' : '',
              fontWeight: index == 2 ? '600' : ''
            }"
          >
            {{ text }}
          </p>

          <el-table
            v-if="li.showTable"
            :data="li.tableData"
            border
            :highlight-current-row="false"
            :header-cell-style="{ backgroundColor: '#f6f8fa' }"
          >
            <el-table-column
              v-for="(col, index2) in li.tableCol"
              :key="index2"
              :label="col.label"
              :prop="col.prop"
            />
          </el-table>
        </li>
      </ul>

      <el-table
        v-if="item.showTable"
        :data="item.tableData"
        border
        :highlight-current-row="false"
        :header-cell-style="{ backgroundColor: '#f6f8fa' }"
      >
        <el-table-column
          v-for="(col, index1) in item.tableCol"
          :key="index1"
          :width="col.width"
          :label="col.label"
          :prop="col.prop"
        />
      </el-table>
    </div>
  </div>
</template>
<script setup>
const moneyData = ref([
  {
    before: '行程前6-4日',
    money: '20%'
  },
  {
    before: '行程前3-1日',
    money: '40%'
  },
  {
    before: '行程开始当日	',
    money: '60%'
  }
])

const data = [
  {
    title: '违约条款',
    item: [
      {
        text: [
          '旅行社违约：',
          '旅行社向旅游者退还已收取的全部旅游费用，并按下列标准向旅游者支付违约金：',
          '如按下述比例支付的违约金不足以赔偿旅游者的实际损失，旅行社应当按实际损失对旅游者予以赔偿'
        ],
        showTable: true,
        tableData: moneyData.value,
        tableCol: [
          {
            prop: 'before',
            label: '行程前'
          },
          {
            prop: 'money',
            label: '违约金'
          }
        ]
      },
      {
        text: [
          '旅游者违约：',
          '在行程前解除合同的，必要的费用扣除标准为：',
          '如按下述约定比例扣除的必要的费用低于实际发生的费用，旅游者按照实际发生的费用支付，但最高额不应当超过旅游费用总额。因部分旅游资源需提前预订的特殊性，本产品线路在旅行社成团后至出行前6天外取消的，也将产生实际损失，具体损失包括但不限于机票、酒店等，如旅游者需要取消订单，应及时联系旅行社，旅行社除协助旅游者减损并退还未实际发生的损失费用外不再承担其他赔偿责任。'
        ],
        showTable: true,
        tableData: moneyData.value,
        tableCol: [
          {
            prop: 'before',
            label: '行程前'
          },
          {
            prop: 'money',
            label: '违约金'
          }
        ]
      }
    ]
  },
  {
    title: '预订限制',
    showTable: true,
    tableData: [
      {
        one: '此线路行程强度较大，请确保身体健康适宜旅游，如出行人中有70周岁(含)以上老人，须至少有1位18周岁—69周岁亲友陪同方可参团，敬请谅解此线路因服务能力有限，无法接待婴儿（14天-2周岁（不含））出行出于安全考虑，18岁以下未成年人需要至少一名成年旅客陪同',
        two: '出于安全考虑，本产品不接受孕妇预订，敬请谅解',
        three:
          '因优惠票种需要提前预约，如您持有离休干部证、军人证、残疾证、学生（小学-全日制大学本科）可享受景区门票优惠政策，请在下单时备注证件信息，出行时携带相关优惠票证件原件及身份证原件，门票优惠差额随团服务人员团上现退；如因提供的优惠证件信息有误导致无法进景区，后果需您自行承担'
      }
    ],
    tableCol: [
      {
        prop: 'one',
        label: '年龄限制',
        width: '420'
      },
      {
        prop: 'two',
        label: '人群限制',
        width: '320'
      },
      {
        prop: 'three',
        label: '其他限制'
      }
    ],
    item: []
  },
  {
    title: '成团说明',
    showTable: true,
    tableData: [
      {
        one: '本产品最少成团人数1人，订单一经携程旅行网以书面形式确认后均默认发团，若因旅行社原因未发团，旅行社将按双方合同约定的违约条款予以赔付',
        two: '最晚在出行前1天20点，您将收到《出团通知书》（付款时间在出发前一天18点后的，会于出发当天12点前发送）。如未收到请及时联系工作人员。集合时间可参考网站披露，具体请以《出团通知书》或服务人员通知为准',
        three:
          '本产品为散客拼团，在承诺服务内容和标准不变的前提下 ，可能会与其他旅行社的客人合并用车，共同游玩。如您提交订单，则视为接受旅行社拼团后统一安排行程'
      }
    ],
    tableCol: [
      {
        prop: 'one',
        label: '成团说明',
        width: '420'
      },
      {
        prop: 'two',
        label: '出团通知',
        width: '320'
      },
      {
        prop: 'three',
        label: '拼团说明'
      }
    ],
    item: []
  },
  {
    title: '单人/多人入住政策',
    showTable: true,
    tableData: [
      {
        one: '综合考量目前常规团队出行人群结构并考虑实际入住体验等因素，本产品暂时无法提供拼房。报价是按照2成人入住1间房计算的价格，请在页面中选择所需房间数或单人房差选项',
        two: '综合考量目前常规团队出行人群结构并考虑实际入住体验等因素，本产品暂时无法提供3人间，也无法安排3成人入住一间房'
      }
    ],
    tableCol: [
      {
        prop: 'one',
        label: '单房差',
        width: '420'
      },
      {
        prop: 'two',
        label: '多人入住'
      }
    ],
    item: []
  }
]
</script>

<style scoped lang="scss">
div {
  box-sizing: border-box;
}
.other {
  .el-alert {
    width: 500px;
    margin-bottom: 10px;
  }
}
</style>
