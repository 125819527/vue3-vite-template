<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import { ElMessage as Message } from 'element-plus'
import { getUserInfoApi, changeTenantApi } from '@/api/nav'
// import { userStore } from '@/store/navUser'
// 从菠萝中拿用户信息
// const store = userStore()
// const {
//   saveUser,
//   saveTenant,
//   saveTenantList,
//   savePermissions,
//   savePlatformApp,
//   saveCustomized
// } = store
// 跳转路由列表
const routerList = {
  0: '/cockpit/index', // 帐号
  1: '/customer/customer-profile', // 租户
  power: '/user-permission/index' // 无权限
}
const dialog = ref({
  isShow: false,
  title: '切换租户'
})

onMounted(async () => {
  getUser()
})
const getUser = async () => {
  // const { data } = await getUserInfoApi()
  // if (!data) {
  //   return
  // }
  // const { userinfo, tenant, tenantList, permissions, platformApp, customized } =
  //   data
  // // 处理权限
  // handlePower(data)
  // // 存储用户信息、角色、租户
  // saveUser(userinfo)
  // saveTenant(tenant)
  // saveTenantList(tenantList)
  // savePermissions(permissions)
  // savePlatformApp(platformApp)
  // saveCustomized(customized)
  // let title = '旺工牌'
  // if (customized && customized['app.APP_GP.name']) {
  //   title = customized['app.APP_GP.name']
  // }
  // document.title = title
}

// 退出登录
const logout = async () => {}

// 关闭弹窗
const onClose = () => {
  dialog.value.isShow = false
}
</script>

<template>
  <div class="base-info">
    <el-popover
      placement="bottom-end"
      width="310"
      trigger="click"
      :show-arrow="false"
      :teleported="false"
    >
      <template #reference>
        <div class="head-img flex-row right-menu-item">
          <el-avatar
            v-if="store.userInfo.avatar"
            :size="32"
            :src="store.userInfo.avatar.url"
          />
          <el-avatar v-else :size="32" :src="store.userInfo.avatar" />
        </div>
      </template>

      <div class="user-popover">
        <div class="header f-x">
          <div class="left">
            <div class="name">
              <el-avatar
                v-if="store.userInfo.avatar"
                :size="44"
                :src="store.userInfo.avatar.url"
              />
              <el-avatar v-else :size="44" :src="store.userInfo.avatar" />
            </div>
          </div>
          <div class="right">
            <div class="top f-x">
              <div class="name">{{ store.userInfo.name }}</div>
            </div>
          </div>
        </div>
        <div class="list">
          <ul>
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
    <template v-for="item in store.tenantList" :key="item.id">
      <div :class="'f-x item item-' + item.status" @click="changeTenant(item)">
        <div class="f-x">
          <div class="icon">
            <svg-icon :font-class="getStatus(item).icon" />
          </div>
          <div class="name">{{ item.showName || item.name }}</div>
        </div>
        <div>
          <span :class="getStatus(item).style">
            {{ getStatus(item).title }}
          </span>
        </div>
      </div>
    </template>
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

.f-x {
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

    .name {
      color: #292e35ff;
      font-size: 14px;
      font-weight: 500;
      font-family: 'PingFang SC';
      padding-left: 8px;
    }

    span {
      display: block;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
    }

    .status-1 {
      width: 48px;
      height: 24px;
      line-height: 24px;
      border-radius: 4px;
      background: #0c5effff;
      color: #ffffffff;
    }

    .status-11 {
      width: 60px;
      height: 20px;
      line-height: 20px;
      border-radius: 2px;
      background: #e9f0ffff;
      color: #0035e1ff;
    }
  }

  .item-1 {
    &:hover {
      border: 1px solid #0c5eff;
    }
  }

  .item-0 {
    border: none;
    background: #f8f8faff;
  }
}

.status-0 {
  width: 36px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 2px;
  background: #ffede8ff;
  color: #be2b2bff;
}

.head-img {
  cursor: pointer;
}

.tenant-img {
  width: 14px;
  height: 14px;
}
</style>
