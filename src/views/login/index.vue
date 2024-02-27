<script setup>
import Motion from './utils/motion'
import { useRouter } from 'vue-router'
import { loginRules } from './utils/rule'
import { bg, illustration, traveling } from './utils/static'

import { ref, reactive, toRaw, onMounted, onBeforeUnmount } from 'vue'

import { menuStore } from '@/store/menu'

const store = menuStore()
const router = useRouter()
const loading = ref(false)
const ruleFormRef = ref()

const isDay = ref(true)
const dataThemeChange = () => {
  console.log(1111)
}

const ruleForm = reactive({
  username: 'admin',
  password: 'admin123'
})

const onLogin = async (formEl) => {
  loading.value = true

  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // useUserStoreHook()
      //   .loginByUsername({ username: ruleForm.username, password: "admin123" })
      //   .then(res => {
      //     if (res.success) {
      //       // 获取后端路由
      //       initRouter().then(() => {
      //         router.push(getTopMenu(true).path);
      //         message("登录成功", { type: "success" });
      //       });
      //     }
      //   });
      // TODO 权限控制

      store.addMenuList()
      router.addRoute({
        path: '/roles',
        component: () => import('@/layout/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'User'
        },
        redirect: '/roles/index',
        children: [
          {
            path: '/roles/index',
            name: 'user',
            component: () => import('@/views/roles/index.vue'),
            meta: {
              title: '用户管理',
              icon: 'User'
            }
          }
        ]
      })

      // 存入菜单到本地
      localStorage.setItem('menu', JSON.stringify(store.getMenuList))
      router.push('/home/index')
    } else {
      loading.value = false
      return fields
    }
  })
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress(code) {
  if (code === 'Enter') {
    onLogin(ruleFormRef.value)
  }
}

onMounted(() => {
  window.document.addEventListener('keypress', onkeypress)
})

onBeforeUnmount(() => {
  window.document.removeEventListener('keypress', onkeypress)
})
</script>

<template>
  <div class="select-none" :style="{ background: isDay ? 'white' : 'black' }">
    <img :src="bg" class="wave" />
    <div class="switch absolute right-5 top-3" z-100>
      <!-- 主题 -->
      <el-switch
        v-model="isDay"
        inline-prompt
        active-icon="Sunny"
        inactive-icon="Moon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <div class="img-left">
        <img :src="isDay ? traveling : illustration" alt="illustration" />
      </div>
      <div class="login-box" z-99 relative>
        <div class="login-form">
          <img src="@/assets/logo.png" w-15 h-15 mb-5 />

          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                  }
                ]"
                prop="username"
              >
                <el-input
                  clearable
                  v-model="ruleForm.username"
                  placeholder="账号"
                  prefix-icon="User"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  clearable
                  show-password
                  v-model="ruleForm.password"
                  placeholder="密码"
                  prefix-icon="Lock"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="250">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;

  width: 100%;
}

.login-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
}

.img-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
}

.img-left img {
  width: 500px;
}

.login-box {
  display: flex;
  align-items: center;
  text-align: center;
}

.login-form {
  width: 360px;
}

.avatar {
  width: 350px;
  height: 80px;
}

.login-form h2 {
  text-transform: uppercase;
  margin: 15px 0;
  color: #999;
  font: bold 200% Consolas, Monaco, monospace;
}

@media screen and (max-width: 1180px) {
  .login-container {
    grid-gap: 9rem;
  }

  .login-form {
    width: 290px;
  }

  .login-form h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .img-left img {
    width: 360px;
    transition: all;
  }
}

@media screen and (max-width: 968px) {
  .wave {
    display: none;
  }

  .img-left {
    display: none;
  }

  .login-container {
    grid-template-columns: 1fr;
  }

  .login-box {
    justify-content: center;
  }
}
</style>
