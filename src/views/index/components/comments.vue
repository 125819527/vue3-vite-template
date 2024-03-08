<template>
  <div class="other" w-full>
    <div class="input" w-full p-3 mb-5>
      <h3>发表评论</h3>

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
      <template v-if="comments.length">
        <div class="list" w-full v-for="item in comments" :key="item.id">
          <div flex>
            <div class="-flex-column-center-center" mr-10>
              <el-avatar
                shape="square"
                :size="90"
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              />
              <p>{{ item.name }}</p>
            </div>
            <div class="right" w-full>
              <div class="-flex-row-space-between-center" mb-1>
                <div class="-flex-row-flex-start-center">
                  <span font-size-4 font-500>评分：</span>
                  <el-rate v-model="rate" :colors="colors" disabled />
                  <p ml-2 font-size-6 font-500 color="#4e82e7">
                    5
                    <span font-size-4 ml-1>分</span>
                  </p>
                </div>

                <!-- <p>发表时间：{{ item.createdTime }}</p> -->
              </div>

              <p w-full>
                {{ item.content }}
              </p>
            </div>
          </div>

          <el-divider></el-divider>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        />
      </template>

      <el-empty description="暂无评论" v-else w-full />
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import * as api from '@/api/app'
const router = useRouter()
const user = userStore()
const textarea = ref('')
const rate = ref(5)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const comments = ref([])
const total = ref(0)
const travelId = ref(router.currentRoute.value.query.travelId)
const page = reactive({
  pageNo: 1,
  pageSize: 10
})

onMounted(() => {
  getComments()
})

const handleCurrentChange = (val) => {
  page.pageNo = val
  getComments()
}

/**
 * 获取评论
 */
const getComments = async () => {
  try {
    const { data } = await api.getScenicCommentApi({
      travelId: travelId.value,
      ...page
    })
    if (data.commentVoList) {
      comments.value = data.commentVoList
      total.value = Number(data.total)
    }
  } catch (error) {
    console.log(error)
  }
}

const onSubmit = async () => {
  if (!textarea.value) {
    return
  }

  await api.addScenicCommentApi({
    travelId: travelId.value,
    userId: user.getInfo.userId,
    name: user.getInfo.nickName,
    content: textarea.value
  })
  getComments()
  textarea.value = ''
  ElMessage.success('评论成功')
}
const reset = () => {
  textarea.value = ''
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
