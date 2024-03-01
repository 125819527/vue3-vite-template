<template>
  <div class="other" w-full p-5>
    <div v-for="index in 2" :key="index">
      <h4>费用</h4>
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
        <el-table-column prop="date" label="Date" width="240" />
        <el-table-column prop="name" label="Name" width="480" />
        <el-table-column prop="address" label="Address" />
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
