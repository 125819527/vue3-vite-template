<template>
  <div class="main -flex-column-center-center" pl-10 pr-10 pb-20>
    <div class="form" w-250 p-10>
      <h2>个人信息</h2>
      <div flex>
        <el-form
          ref="formRef"
          :model="form"
          :rules="registerRules"
          size="large"
        >
          <el-form-item prop="username" label="账号">
            <el-input
              v-if="isEdit"
              clearable
              v-model="form.username"
              placeholder="账号"
              prefix-icon="User"
            />
            <p font-size-5 v-else>{{ form.username }}</p>
          </el-form-item>

          <el-form-item prop="password" label="密码">
            <el-input
              v-if="isEdit"
              clearable
              show-password
              v-model="form.password"
              placeholder="密码"
              prefix-icon="Lock"
            />
            <p font-size-5 v-else>{{ form.password }}</p>
          </el-form-item>

          <el-form-item prop="nickName" label="昵称">
            <el-input
              v-if="isEdit"
              clearable
              v-model="form.nickName"
              maxlength="10"
              placeholder="昵称"
              prefix-icon="Ship"
            />
            <p font-size-5 v-else>{{ form.nickName }}</p>
          </el-form-item>

          <el-form-item prop="mobile" label="电话">
            <el-input
              v-if="isEdit"
              clearable
              v-model.number="form.mobile"
              placeholder="电话号码"
              prefix-icon="Phone"
            />
            <p font-size-5 v-else>{{ form.mobile }}</p>
          </el-form-item>

          <el-form-item prop="email" label="邮箱">
            <el-input
              v-if="isEdit"
              clearable
              v-model="form.email"
              placeholder="邮箱"
              prefix-icon="Message"
            />
            <p font-size-5 v-else>{{ form.email }}</p>
          </el-form-item>

          <el-form-item prop="gender" label="性别">
            <el-radio-group v-model="form.gender" v-if="isEdit">
              <el-radio label="男" />
              <el-radio label="女" />
              <el-radio label="未知" />
            </el-radio-group>
            <p font-size-5 v-else>
              {{ form.gender == 1 ? '男' : form.gender == 1 ? '女' : '未知' }}
            </p>
          </el-form-item>

          <el-form-item prop="age" label="年龄">
            <el-select-v2
              v-if="isEdit"
              v-model="form.age"
              placeholder="年龄"
              :options="ageOp"
            />
            <p font-size-5 v-else>{{ form.age }}岁</p>
          </el-form-item>

          <el-form-item prop="birthday" label="生日">
            <el-date-picker
              v-if="isEdit"
              v-model="form.birthday"
              type="date"
              format="YYYY-MM-DD"
              placeholder="选择生日日期"
              clearable
            />
            <p font-size-5 v-else>{{ form.birthday }}</p>
          </el-form-item>

          <el-button
            v-if="isEdit"
            class="mt-4"
            size="default"
            type="primary"
            @click="edit(formRef)"
          >
            提交
          </el-button>
          <el-button
            v-if="isEdit"
            class="mt-4"
            size="default"
            type="primary"
            @click="cancel"
          >
            取消
          </el-button>
          <el-button
            v-if="!isEdit"
            class="mt-4"
            size="default"
            type="primary"
            @click="isEdit = true"
          >
            编辑
          </el-button>
        </el-form>
        <img :src="info" alt="info" width="700" v-if="!isEdit" />
      </div>
    </div>
    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
import info from '@/assets/svg/info.svg'
import { registerRules } from '@/views/login/utils/rule'
import { formatDate } from '@/views/login/utils/day'
import { ref, reactive } from 'vue'
const formRef = ref()

const isEdit = ref(false)
const form = reactive({
  username: '31r13r1351',
  password: '113413affsf',
  nickName: '1faeaera',
  mobile: '14134134',
  email: 'afafaef',
  gender: '男',
  age: 13,
  birthday: '1431年13月13日'
})
const ageOp = Array.from({ length: 100 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}))

const edit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const params = {
        ...form,
        birthday: formatDate(form.birthday),
        gender: form.gender == '男' ? 1 : form.gender == '女' ? 2 : 3
      }
      console.log(params, 'valid regsiter')
      ElMessage({ message: '编辑成功', type: 'success' })
      isEdit.value = false
    } else {
      return fields
    }
  })
}
const cancel = () => {
  isEdit.value = false
}
</script>
<style lang="scss" scoped>
.main {
  margin-top: -40px;
  background-color: #f6f8fa;
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
}
.form {
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
