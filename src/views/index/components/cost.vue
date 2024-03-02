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
        :data="tableData"
        border
        style="width: 100%"
        :highlight-current-row="false"
        :header-cell-style="{ backgroundColor: '#f6f8fa' }"
      >
        <el-table-column prop="date" label="类型" width="240" />
        <el-table-column prop="name" label="成人【12周岁及以上】" width="480" />
        <el-table-column prop="address" label="儿童【2-12周岁(不含)】" />
      </el-table>
    </div>
    <div>
      <h3>自理费用</h3>

      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :highlight-current-row="false"
        :header-cell-style="{ backgroundColor: '#f6f8fa' }"
      >
        <el-table-column prop="date" label="住宿" width="240" />
        <el-table-column
          prop="name"
          label="儿童不含景交、门票和住宿费用敬请自理"
        />
      </el-table>
    </div>
  </div>
</template>
<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address:
      'No. 189, Grove St, Los Angeles,No. 189, Grove St, Los Angeles,No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
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
