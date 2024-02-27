<template>
  <div class="main -flex-column-center-center" ml-10 mr-10 mt-10 mb-20>
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

    <div class="list" h-1000>
      <div></div>
    </div>
    <div class="list"></div>
    <el-backtop :bottom="100">
      <div
        style="
          font-size: 14px;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          color: #1989fa;
        "
      >
        回到顶部
      </div>
    </el-backtop>
  </div>
</template>
<script setup>
const searchVal = ref('')
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
}
.top {
  justify-content: flex-end;

  .input-with-select {
    height: 40px;
    width: 30%;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #9acefb;
  }
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
