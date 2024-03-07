<template>
  <div class="other" w-full p-5>
    <div>
      <h3>费用</h3>
      <el-alert
        title="为成人/儿童有差异的项目，请特别留意"
        type="warning"
        show-icon
        :closable="false"
      />
      <el-table
        :data="detail?.costIncludes"
        border
        style="width: 100%"
        :highlight-current-row="false"
        :header-cell-style="{ backgroundColor: '#f6f8fa' }"
      >
        <el-table-column prop="consumerType" label="类型" width="240" />
        <el-table-column
          prop="cost1"
          label="成人【12周岁及以上】"
          width="480"
        />
        <el-table-column prop="cost2" label="儿童【2-12周岁(不含)】" />
      </el-table>
    </div>
    <div>
      <h3>自理费用</h3>

      <el-table
        :data="detail.costSelf"
        border
        style="width: 100%"
        :highlight-current-row="false"
        :header-cell-style="{ backgroundColor: '#f6f8fa' }"
      >
        <el-table-column prop="consumerType" label="自理项" width="240" />
        <el-table-column prop="cost1" label="自理内容" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

defineProps({
  detail: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped lang="scss">
div {
  box-sizing: border-box;
}
.other {
  .el-alert {
    width: 500px;
    margin-bottom: 10px;
  }
}
</style>
