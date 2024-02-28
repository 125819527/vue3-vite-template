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
    <div class="swiper" w-full>
      <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

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
      <el-tabs v-model="activeName" class="list-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">
          <el-card shadow="hover" v-for="index in 8" :key="index">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
            />
            <div style="padding: 14px">
              <span class="-text-more-ellipsis">
                九寨沟+黄龙风景名胜区3日2晚跟团游·《国旅真纯玩》+携程5钻酒店+9:30出发C线（住希尔顿酒店J线+住五星豪生H线）+熊猫景区+赠藏家晚会+享五钻酒店美食+可选头等舱保姆车+免费包接+国旅官方直营+35000多人出游选择
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
                ¥ 1599
                <el-tag type="danger">活动优惠</el-tag>
              </p>
              <div class="bottom">
                <el-button class="button" type="primary" plain>
                  查看详情
                </el-button>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>

    <div class="list" w-full mb-10 mt-20 relative>
      <div absolute class="list-logo" flex>
        <img
          src="@/assets/index/travel2.png"
          alt="travel"
          width="60"
          height="50"
        />
        <p font-size-5 font-500 ml-2>推荐境外游</p>
      </div>
      <el-tabs v-model="activeName" class="list-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">
          <el-card shadow="hover" v-for="index in 10" :key="index">
            <img
              src="https://dimg04.c-ctrip.com/images/0305r12000cz71bco53EB_C_210_118_Q100.png"
              class="image"
            />
            <div style="padding: 14px">
              <span class="-text-more-ellipsis">
                九寨沟+黄龙风景名胜区3日2晚跟团游·《国旅真纯玩》+携程5钻酒店+9:30出发C线（住希尔顿酒店J线+住五星豪生H线）+熊猫景区+赠藏家晚会+享五钻酒店美食+可选头等舱保姆车+免费包接+国旅官方直营+35000多人出游选择
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
                ¥ 1599
                <el-tag type="danger">活动优惠</el-tag>
              </p>
              <div class="bottom">
                <el-button class="button" type="primary" plain>
                  查看详情
                </el-button>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
    <el-backtop :bottom="100">
      <el-icon size="20"><CaretTop /></el-icon>
    </el-backtop>
  </div>
</template>
<script setup>
const searchVal = ref('')
const activeName = ref('first')
const card = ref({
  width: '100px'
})
const search = () => {
  console.log('search')

  ElMessage({
    message: '更新成功，列表已更新',
    type: 'success'
  })
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
