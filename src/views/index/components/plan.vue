<template>
  <div class="other" w-full pt-10 pb-5>
    <div v-for="(item, index) in detail.itinerary" :key="index">
      <el-timeline style="max-width: 1300px">
        <div class="-flex-row-flex-start-center">
          <div w-25 class="-flex-row-flex-start-center" mr-2>
            <el-icon size="20"><Calendar /></el-icon>
            <span ml-1  font-500 font-size-5>
              DAY {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
            </span>
          </div>

          <h2>{{ item.name }}</h2>
        </div>

        <el-timeline-item
          :timestamp="item.subTime"
          placement="top"
          v-for="(item, index) in item.itineraryDetailList"
          :key="index"
        >
          <el-card>
            <h3>{{ item.title }}</h3>
            <p font-size-4 color="#3a84ee" mr-3 font-600>{{ item.hotel }}</p>
            <p font-600>{{ item.content }}</p>
            <template v-if="item.touristContentList">
              <div
                v-for="(item, index) in item.touristContentList"
                :key="index"
              >
                <p font-size-4 color="#666666" mr-3 font-600>
                  {{ item.tourist }}
                </p>
                <img
                  :src="item.img"
                  alt="img"
                  w-75
                  h-40
                />
              </div>
            </template>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script setup>
defineProps({
  detail: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped lang="scss">
.other {
  background-color: #f6f8fa;
}
</style>
