<template>
  <div class="main -flex-column-center-center" ml-10 mr-10 mb-20>
    <div class="top" w-full flex mb-20>
      <el-input
        v-model="searchVal"
        placeholder="请输入想搜索的旅游关键词，如：北京、欧洲"
        clearable
        class="input-with-select"
      >
        <template #append>
          <el-button @click="search">
            <el-icon color="#fff" size="18">
              <Search />
            </el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="swiper" w-full v-if="imgs.length">
      <el-carousel
        :interval="3000"
        height="400px"
        indicator-position="outside"
        arrow="always"
      >
        <el-carousel-item v-for="item in imgs" :key="item.Id">
          <img :src="item.imgUrl" alt="img" w-full h-full />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 搜索列表 -->
    <div class="list" w-full mb-10 mt-30 relative v-if="searchVal">
      <div absolute class="list-logo" flex>
        <img
          src="@/assets/index/travel2.png"
          alt="travel"
          width="60"
          height="50"
        />
        <p font-size-5 font-500 ml-1>
          搜索相关({{ Number(searchListTotal) ? searchListTotal : '0' }})
        </p>
      </div>
      <el-tabs v-model="searchName" class="list-tabs">
        <el-tab-pane label="搜索结果" name="1">
          <template v-if="Number(searchListTotal)">
            <el-card shadow="hover" v-for="item in searchList" :key="item.id">
              <img :src="item.picUrl" class="image" w-full h-30 />
              <div p-4 :style="{ overflow: 'scroll' }" h-70>
                <span font-600 font-size-5>
                  {{ item.title }}
                </span>
                <span class="-text-more-ellipsis">
                  {{ item.summary }}
                </span>
                <p
                  font-600
                  w-full
                  mt-1
                  mb-2
                  :style="{
                    color: '#ed702d',
                    fontSize: '24px'
                  }"
                >
                  ¥ {{ item.price }}
                  <el-tag type="danger">活动优惠</el-tag>
                </p>
                <div class="bottom">
                  <el-button
                    class="button"
                    type="primary"
                    plain
                    @click="goDetail(item.id)"
                  >
                    查看详情
                  </el-button>
                </div>
              </div>
            </el-card>
          </template>

          <el-empty description="暂无搜索相关信息" v-else w-full />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 列表1 -->
    <div class="list" w-full mb-10 mt-30 relative>
      <div absolute class="list-logo" flex>
        <img
          src="@/assets/index/travel1.png"
          alt="travel"
          width="60"
          height="50"
        />
        <p font-size-5 font-500 ml-2>欢乐周边游</p>
      </div>
      <el-tabs
        v-model="activeName"
        class="list-tabs"
        @tab-change="tabClick(val)"
      >
        <el-tab-pane
          :label="item.name"
          :name="item.id"
          v-for="item in areaList.list1"
          :key="item.id"
        >
          <template v-if="travelList.list1.length">
            <el-card
              shadow="hover"
              v-for="item in travelList.list1"
              :key="item.id"
            >
              <img :src="item.picUrl" class="image" w-full h-30 />
              <div p-4 :style="{ overflow: 'scroll' }" h-70>
                <span font-600 font-size-5>
                  {{ item.title }}
                </span>
                <span class="-text-more-ellipsis">
                  {{ item.summary }}
                </span>
                <p
                  font-600
                  w-full
                  mt-1
                  mb-2
                  :style="{
                    color: '#ed702d',
                    fontSize: '24px'
                  }"
                >
                  ¥ {{ item.price }}
                  <el-tag type="danger">活动优惠</el-tag>
                </p>
                <div class="bottom">
                  <el-button
                    class="button"
                    type="primary"
                    plain
                    @click="goDetail(item.id)"
                  >
                    查看详情
                  </el-button>
                </div>
              </div>
            </el-card>
          </template>

          <el-empty
            description="暂无相关景点，请切换地区查看更多景点信息"
            v-else
            w-full
          />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 返回顶部 -->
    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
import router from '@/router'
import * as api from '@/api/app'
import { onMounted, reactive } from 'vue'

const searchVal = ref('')
const activeName = ref('')

const searchName = ref('1')
const pageParams = reactive({
  pageNo: 1,
  pageSize: 10
})

const imgs = reactive([])
const searchList = ref([])
const searchListTotal = ref(0)

const areaList = reactive({
  list1: []
})

const travelList = reactive({
  list1: []
})

onMounted(async () => {
  getAreaTabOne()

  getImgs()
})

/**
 * 获取活动图片
 */
const getImgs = async () => {
  try {
    const { data } = await api.getImgApi()
    if (data) {
      imgs.push(...data)
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * 获取列表1地区ltabs
 */
const getAreaTabOne = async () => {
  try {
    const { data } = await api.getAreaListApi(pageParams)
    if (data.areaModelList) {
      areaList.list1 = data.areaModelList

      activeName.value = areaList.list1[0].id
      getlist()
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * 根据地区获取列表
 */
const getlist = async () => {
  try {
    const { data } = await api.getScenicListApi({
      areaId: activeName.value,
      ...pageParams,
      pageSize: 100
    })
    if (data.travelSceneModelList) {
      travelList.list1 = data.travelSceneModelList
    }
  } catch (error) {
    console.log(error)
  }
}

const tabClick = (item) => {
  getlist()
}
/**
 *  搜索
 */
const search = async () => {
  try {
    if (!searchVal.value) {
      return ElMessage({
        message: '搜索内容不能为空',
        type: 'warning'
      })
    }
    searchList.value = []
    searchListTotal.value = 0
    const { data } = await api.searchSceniclApi({
      ...pageParams,
      pageSize: 100,
      keyword: searchVal.value
    })
    if (data.travelSceneModelList) {
      searchListTotal.value = Number(data.total)
      searchList.value = data.travelSceneModelList
    }
    ElMessage({
      message: '更新成功，列表已更新',
      type: 'success'
    })
  } catch (error) {
    searchList.value = []
    searchListTotal.value = 0
    console.log(error)
  }
}

const goDetail = (travelId) => {
  router.push({ path: '/scenicDetail', query: { travelId } })
}
</script>
<style lang="scss" scoped>
:deep {
  .el-input__wrapper {
    box-shadow: none;
  }
  .el-input-group__append {
    width: 30px;
    background-color: #3a84ee;
    box-shadow: none;
  }

  //   tabs
  .list .el-tabs__nav {
    left: 190px;
  }
  .el-tabs__item {
    font-size: 22px;
    padding: 0 30px;
  }
  // card
  .el-card__body {
    padding: 5px;
  }
}
.top {
  justify-content: flex-end;

  .input-with-select {
    height: 40px;
    width: 40%;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #9acefb;
  }
}

.list {
  .list-logo {
    top: -10px;
  }
  p {
    color: #4b74d5;
  }
  .el-tag {
    height: 18px;
    font-size: 10px;
    padding: 0 5px;
  }
  .el-card {
    margin-right: 2%;
    margin-left: 2%;
    width: 220px;
    margin-bottom: 10px;
    span {
      cursor: pointer;
    }
    .image:hover {
      transition: all 0.5s;
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .el-card:hover {
    border-color: #abcdff;
  }
  .el-card:hover image {
    border-color: #abcdff;
  }
  .el-tab-pane {
    display: flex;
    flex-wrap: wrap;
  }
}
.list-tabs .el-tabs__nav {
  left: 80px;
}
// todo
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
