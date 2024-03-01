<template>
  <div class="content" w-full flex>
    <div class="left" w-224 mb-30>
      <h2 class="title">九寨沟+黄龙风景名胜区3日2晚跟团游</h2>
      <p ccolor="#b2b2b2" font-size-4 mt-1 mb-3>
        《国旅真纯玩》+携程5钻酒店+9:30出发C线（住希尔顿酒店J线+住五星豪生H线）+熊猫景区+赠藏家晚会+享五钻酒店美食+可选头等舱保姆车+免费包接+国旅官方直营+35000多人出游选择
      </p>

      <div class="price" w-full p-2 mb-3>
        <div class="-flex-row-flex-start-center">
          <p font-size-6 color="#ee7f31" font-600 mr-5>
            <span font-size-5>￥</span>
            300
            <span font-size-4 color="#b2b2b2" font-400>/人起</span>
          </p>
          <p font-size-6 color="#3a84ee" mr-3 font-600>
            4.9
            <span font-size-4 font-400>分</span>
          </p>
          <p font-size-4 color="#3a84ee" mr-3 class="score">1231313评分</p>
          <p font-size-4 color="#666666" mr-3>13413413人出游</p>
        </div>
        <div class="-flex-row-flex-start-center">
          <el-tag plain type="warning">限时促销</el-tag>
          <el-tag plain type="error" mr-3 ml-3>已减700</el-tag>
        </div>
        <div class="-flex-row-flex-start-center">
          <p font-size-4 color="#666666" mr-2>
            会员权益
            <el-tag plain type="primary" mr-3 ml-3>白银会员</el-tag>
            <span font-size-3 color="gray">最少可得39积分</span>
          </p>
        </div>
      </div>

      <div class="imgs" w-full mb-3>
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

      <div class="more -flex-column-flex-start-flex-start">
        <div mb-1 class="-flex-row-flex-start-center">
          <p font-size-3 color="gray" w-17>产品特色</p>
          <el-tag type="primary" plain>含导游服务</el-tag>
        </div>
        <div mb-1 class="-flex-row-flex-start-center">
          <p font-size-3 color="gray" w-17>服务保障</p>
          <div mr-2 class="-flex-row-flex-start-center" font-size-3.5>
            <el-icon color="#7db444" mr-1><CircleCheck /></el-icon>
            放心
          </div>
          <div mr-2 class="-flex-row-flex-start-center" font-size-3.5>
            <el-icon color="#7db444" mr-1><CircleCheck /></el-icon>
            放心
          </div>
          <div mr-2 class="-flex-row-flex-start-center" font-size-3.5>
            <el-icon color="#7db444" mr-1><CircleCheck /></el-icon>
            放心
          </div>
          <div mr-2 class="-flex-row-flex-start-center" font-size-3.5>
            <el-icon color="#7db444" mr-1><CircleCheck /></el-icon>
            放心
          </div>
        </div>
        <div mb-1 class="-flex-row-flex-start-center">
          <p font-size-3 color="gray" w-17>供应商</p>
          <div
            font-size-3.5
            mr-2
            class="-flex-row-flex-start-center"
            color="#3a84ee"
          >
            <el-icon mr-1 color="#3a84ee"><HomeFilled /></el-icon>
            四川中国空军哈佛i啊饿后i
          </div>
        </div>
        <div mb-1 class="-flex-row-flex-start-flex-start">
          <p font-size-3 color="gray" w-17>产品卖点</p>

          <p w-full font-size-3.5>
            ★
            【服务保障】👍《本套餐：国旅官方直营--真纯玩》+《更多销量+35000多人的厚爱选择》
            👍【本套餐：包含4大景区：九寨沟景区+黄龙景区+松潘古城景区+都江堰熊猫景区】游览更多景点
            👍《本套餐：全程升级携程5钻度假酒店+升级5钻酒店晚餐》
            <br />
            ★ 【缤纷景点】👍【9:30晚出发选CD线套餐】
            👍【升级五星国际天源豪生酒店选HI线套餐+升级5五星酒店晚餐】
            👍【升级五星国际品牌希尔顿酒店选J线套餐+升级希尔顿酒店晚餐】 ★
            【超值赠送】👍《国旅官方直营--真纯玩无购物》
            👍《特色用餐+赠走进藏家家访晚会+24小时国旅客服+国旅专业大咖导游》
            👍《赠成都三环内免费上门接》
          </p>
        </div>
      </div>
    </div>
    <div class="right" w-125 h-full pt-4>
      <el-calendar w-full>
        <template #date-cell="{ data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>
<script setup></script>
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
