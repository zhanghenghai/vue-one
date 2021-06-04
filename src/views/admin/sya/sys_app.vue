<template>
  <div style="background-color: #FFFFFF;line-height: 0;padding: 3%;text-align: left">
    <el-button type="primary" @click="add">添加</el-button>
  </div>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%;line-height: 0;">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        label="应用名称"
        width="180">
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
        align="left"
        label="应用介绍"
        width="230">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
        label="应用地址"
        width="180">
    </el-table-column>
    <el-table-column
        label="应用评分"
        width="130">
    </el-table-column>
    <el-table-column
        label="创建时间"
        width="180">
    </el-table-column>
    <el-table-column label="操作" align="center-">
      <template #default="scope">
        <el-button
            size="mini"
            @clizck="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 引入子组件 -->
    <Add-or-update v-if="dialogFormVisible" ref="addOrUpdate" style="padding: 0;margin: 0"></Add-or-update>
</template>

<script>
import AddOrUpdate from "@/views/admin/sya/sys_app_dialog";

export default {
  components: {AddOrUpdate},
  data() {
    return {
      dialogFormVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    /*新增*/
    add() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init()
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>

</style>
