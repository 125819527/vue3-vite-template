<script setup>
import BaseInfo from './BaseInfo.vue'
import { defineProps } from 'vue'
// import { userStore } from '@/store/navUser'
// const store = userStore()
defineProps({
  userInfo: {
    type: Object,
    default: () => {
      return {}
    }
  },
  bgColor: {
    type: String,
    default: '#ffffff'
  }
})
</script>

<template>
  <div class="flex-row navbar">
    <div class="flex-row">
      <div class="flex-row-center header-menu">
        <div class="flex-row sidebar-logo-link">
          <template>
            <img class="nav-logo" src="@/assets/avator.png" />
            <span class="title">旅游信息管理网</span>
          </template>
        </div>
      </div>
    </div>

    <div class="right-menu">
      <!-- 用户信息 -->
      <base-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
}

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

.pointer {
  cursor: pointer;
}

:deep {
  .el-dropdown-menu {
    overflow: scroll !important;
  }

  .app-popover {
    width: 300px !important;
  }
}

.font-balck {
  color: #353e49 !important;
}

.header-menu {
  height: 58px;
  // width: 172px;
  position: relative;
}

.blackBack {
  background: #374769;
  color: #fff;
}

.whiteBack {
  background: #fff;
  color: #3a74f2;
}

.navbar {
  display: flex;
  position: relative;
  top: 0;
  right: 0;
  z-index: 2000;
  color: #353e49;
  background: rgb(255, 255, 255);
  height: 56px;

  box-shadow: 0 2px 2px -1px rgba(27, 36, 44, 0.1),
    0 2px 8px -1px rgba(27, 36, 44, 0);
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 32px;

  .sidebar-logo-link {
    height: 100%;

    img {
      height: 32px;
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      padding-left: 10px;
    }

    span {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    margin-right: 4px;
    color: #353e49 !important;

    .el-menu.el-menu--horizontal {
      border: 0px;
    }

    :deep {
      .is-active {
        border: 0px;
      }

      .app-info {
        margin-left: 26px;
      }

      .base-info {
        margin-left: 30px;
      }
    }

    &:focus {
      outline: none;
    }

    .search-box {
      font-size: 25px;
      cursor: pointer;
    }

    .right-menu-item-border {
      cursor: pointer;
      align-items: center;
      height: 38px;
      padding: 0 16px;
      font-size: 18px;
      border-radius: 32px;
      border: 1px solid #e6eaee;
    }

    .right-menu-item {
      cursor: pointer;
      align-items: center;
      height: 38px;
      padding: 0 16px;
      font-size: 18px;
    }

    .avatar-container {
      .dropdown-head {
        cursor: pointer;
        position: relative;

        .dropdown-text {
          margin: 0 4px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
