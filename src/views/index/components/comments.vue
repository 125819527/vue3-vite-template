<template>
  <div class="other" w-full >
    <div class="input" w-full p-3 mb-5>
      <h3>发表评论</h3>
      <div class="-flex-row-flex-start-center" mb-1>
        <span font-size-4 font-500>评分：</span>
        <el-rate v-model="rate" :colors="colors" />
        <p ml-2 font-size-6 font-500 color="#4e82e7">
          {{ rate }}
          <span font-size-4 ml-1>分</span>
        </p>
      </div>
      <el-input
        v-model="textarea"
        maxlength="500"
        style="width: 100%"
        placeholder="请输入您的评论内容"
        show-word-limit
        :rows="4"
        type="textarea"
      />
      <div class="-flex-row-flex-end-center" w-full mt-4>
        <el-button type="primary" @click="onSubmit">发表评论</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>
    <el-divider content-position="center">全部评论</el-divider>
    <div class="input comments -flex-column-flex-start-center" w-full p-3 mb-5>
      <div class="list" w-full v-for="index in 5" :key="index">
        <div flex>
          <div class="-flex-column-center-center" mr-10>
            <el-avatar
              shape="square"
              :size="90"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
            />
            <p>小米</p>
          </div>
          <div class="right">
            <div class="-flex-row-flex-start-center" mb-1>
              <span font-size-4 font-500>评分：</span>
              <el-rate v-model="rate" :colors="colors" disabled />
              <p ml-2 font-size-6 font-500 color="#4e82e7">
                {{ rate }}
                <span font-size-4 ml-1>分</span>
              </p>
            </div>
            <p w-full>
              1，关于行程：出行前一晚，导游会提前告知上车集中点和车号，小车司机会准时来酒店接我！行程很紧凑，虽然要早起，但得知以前四天行程如今压缩到三天，对于我这种上班族，请假来旅游，能看到这样的美景，很值得！
              2，就像行程所介绍的，没有强制性消费，不欺客，做到明明白白消费，九寨黄龙真的是精品线路！四川省的名片！
              3，感谢赵导，性格直爽，特别照顾老人小孩，除了讲景点外，还会谈人生，特别大地震的故事，让我在以后的工作生活中更珍惜自己现在所拥有的美好生活！司机师傅驾驶技术超棒，九寨沟早上出发大雪，绑防滑链，一路的艰辛，预计21.00到成都，19.45就到了！
              谢谢你们三天的陪伴，辛苦了！
            </p>
          </div>
        </div>

        <el-divider></el-divider>
      </div>

      <el-pagination layout="prev, pager, next" :total="1000" background />
    </div>
  </div>
</template>
<script setup>
const textarea = ref('')
const rate = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const onSubmit = () => {
  console.log(textarea.value)
}
const reset = () => {
  textarea.value = ''
  rate.value = 0
}
</script>

<style scoped lang="scss">
:deep {
  .el-divider__text {
    font-size: 18px;
  }
}
.input {
  border-radius: 5px;
  background-color: #f6f8fa;
}
.comments {
  background-color: #fff;
  padding: 10px;
}
</style>
