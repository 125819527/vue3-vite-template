<template>
  <div class="main" ml-10 mr-10 mb-20>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/home/index' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>景点订单</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>我的景点订单</h2>
    <div mt-10>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="景点名称" width="280" />
        <el-table-column prop="name" label="订单联系人" width="180" />
        <el-table-column prop="address" label="订单联系电话" />
        <el-table-column prop="address" label="操作">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        mt-10
        w-full
        v-model:current-page="tableParams.page"
        v-model:page-size="tableParams.pageSize"
        :page-sizes="[10, 15, 20, 50]"
        :background="background"
        layout="sizes, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="编辑订单" width="500">
    <el-form :model="form" :rules="rules" ref="formRef">
      <el-form-item label="预定姓名" prop="name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系方式" prop="tel">
        <el-input v-model.number="form.tel" autocomplete="off" type="text" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="editConfirm(formRef)">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
const dialogVisible = ref(false)
const tableParams = reactive({
  page: 1,
  pageSize: 10
})

const form = reactive({
  name: '',
  tel: ''
})
const formRef = ref()
const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 1, max: 10, message: '请输入1-10字符', trigger: 'blur' }
  ],
  tel: [
    { required: true, message: '请输入联系方式' },
    { type: 'number', message: '请输入正确联系方式' }
  ]
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
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

const handleDelete = () => {
  ElMessageBox.alert('确认删除这条订单吗？', '删除确认', {
    confirmButtonText: '确定',
    callback: (action) => {}
  })
}

const handleEdit = () => {
  dialogVisible.value = true
}

const editConfirm = () => {
  dialogVisible.value = false
}
</script>
<style lang="scss" scoped></style>
