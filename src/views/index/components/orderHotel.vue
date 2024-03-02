<template>
  <div class="other" w-full>
    <div class="input" w-180 p-3 mb-5>
      <h3>房间</h3>
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
      <div class="list" w-full v-for="index in 5" :key="index">
        <div flex>
          <div class="-flex-column-center-center" mr-10>
            <el-avatar
              shape="square"
              :size="90"
              src="https://dimg04.c-ctrip.com/images/02049120009mh8e4k9353_W_1080_808_R5_D.jpg_.webp"
            />
            <p>城际大床房</p>
            <p>1张1.5米双人床 | 30m² | 落地窗 | 禁烟</p>
          </div>
          <el-divider direction="vertical" />
          <div ml-3 class="-flex-row-space-between-center" w-full mr-3>
            <div class="right">
              <el-icon><UserFilled /></el-icon>
              <el-icon><UserFilled /></el-icon>
            </div>
            <div class="right">
              <p>无早餐</p>
            </div>
            <div class="right">
              <p>限时取消</p>
            </div>
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

    <el-dialog v-model="dialogVisible" title="提交预定" width="500">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item label="预定姓名" prop="name">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="联系方式" prop="tel">
          <el-input v-model.number="form.tel" autocomplete="off" type="text" />
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
const date = ref()
const dialogVisible = ref(false)
const order = () => {
  dialogVisible.value = true
}
const form = reactive({
  name: '',
  tel: ''
})
const formRef = ref()
const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 1, max: 10, message: '请输入1-10字符', trigger: 'blur' }
  ],
  tel: [
    { required: true, message: '请输入联系方式' },
    { type: 'number', message: '请输入正确联系方式' }
  ]
})

const orderConfirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: '预定成功',
        type: 'success'
      })
      dialogVisible.value = false
    } else {
      console.log('error submit!', fields)
    }
  })
}
const handleDate = (date) => {
  console.log(date[0])
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
