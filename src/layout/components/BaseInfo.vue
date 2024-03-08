<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { logoutApi } from '@/api/app'
import { menuStore } from '@/store/menu'
import { userStore } from '@/store/user'

const user = userStore()
const menu = menuStore()
const userInfo = ref({})
const router = useRouter()
onMounted(async () => {
  userInfo.value = JSON.parse(localStorage.getItem('user'))
  console.log(JSON.parse(localStorage.getItem('user')))
})
const dialog = ref({
  isShow: false,
  title: '我的余额'
})

const visible = ref(false)
const getUser = async () => {}

// 退出登录
const logout = async () => {
  try {
    await logoutApi()
    ElMessage({
      message: '退出成功',
      type: 'success',
      duration: 1000
    })
    menu.clearMenuList()
    user.clearInfo()
    localStorage.clear()
    router.push('/login')
  } catch (error) {
    ElMessage({
      message: '退出失败，请重试',
      type: 'error',
      duration: 1000
    })
    console.log(error)
  }
}

// 关闭弹窗
const onClose = () => {
  dialog.value.isShow = false
}

const openDialog = () => {
  dialog.value.isShow = true
  visible.value = false
}
</script>

<template>
  <div class="base-info">
    <el-popover placement="bottom-start" width="210" :visible="visible">
      <template #reference>
        <div
          class="head-img flex-row right-menu-item"
          @click="visible = !visible"
        >
          <el-avatar
            :size="44"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
      </template>

      <div class="user-popover">
        <div class="header flex-ac">
          <div class="left">
            <div class="name">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                :size="44"
              />
            </div>
          </div>
          <div class="right">
            <div class="top flex-ac">
              <div class="name">{{ userInfo.nickName }}</div>
            </div>
          </div>
        </div>
        <div class="list">
          <ul>
            <li cursor-pointer @click="openDialog">
              <el-icon><Money /></el-icon>
              <span class="title">我的余额</span>
            </li>
            <li cursor-pointer @click="logout">
              <el-icon><SwitchButton /></el-icon>
              <span class="title">退出登陆</span>
            </li>
          </ul>
        </div>
      </div>
    </el-popover>
  </div>
  <el-dialog
    v-model="dialog.isShow"
    :title="dialog.title"
    width="480"
    class="top-dialog"
    @close="onClose"
  >
    <div>
      <div class="flex-ac item">
        <div class="-flex-row-flex-start-center">
          <div class="-flex-row-center-center">
            <el-icon color="black"><Money /></el-icon>
          </div>
          <div class="title">我的余额：</div>
        </div>

        <div class="num">133元</div>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
:deep {
  .el-popover {
    --el-popover-padding: 0;
  }
}

ul {
  margin: 0;
  padding: 0;
}

@mixin flex {
  display: flex;
  align-items: center;
}

.flex-ac {
  @include flex;
}

.user-popover {
  margin: auto;

  // width: 310px;
  .user-head {
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
  }

  .user-name {
    margin-top: 8px;
    color: #353e49;
    font-size: 16px;
    font-weight: bold;
    min-width: 142px;
    text-align: center;
  }

  .user-option {
    cursor: pointer;
    line-height: 32px;
    align-items: center;

    &:hover {
      color: #409eff;
    }
  }

  .header {
    flex-direction: row;
    border-bottom: 1px solid #f0f2f7;
    padding: 20px 24px;

    .right {
      padding: 0 0 0 12px;
    }

    .top {
      .name {
        color: #292e35ff;
        font-size: 16px;
        font-weight: 500;
        font-family: 'PingFang SC';
      }

      .roles {
        padding-left: 12px;
      }
    }

    .tenant {
      padding: 5px 0 0 0;

      .status {
        padding: 0 12px 0 0;
      }

      .icon {
        padding-right: 4px;
      }

      .title {
        color: #6b7481ff;
        font-size: 12px;
        font-weight: 400;
        font-family: 'PingFang SC';

        .con {
          display: inline-block;
          width: 200px;
          height: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .list {
    padding: 7px 0;

    li {
      @include flex;
      justify-content: flex-start;
      padding: 10px 24px;

      &:hover {
        color: #292e35;
        font-size: 14px;
        font-weight: 400;
        background: #f8f8faff;
      }

      .title {
        padding-left: 10px;
      }
    }
  }
}

.top-dialog {
  .item {
    flex-direction: row;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid #e1e6eb;
    margin-bottom: 12px;
    padding: 12px;
    box-sizing: border-box;

    .title,
    .num {
      color: #292e35ff;
      font-size: 14px;
      font-weight: 500;
      font-family: 'PingFang SC';
      padding-left: 8px;
    }
  }
}
</style>
