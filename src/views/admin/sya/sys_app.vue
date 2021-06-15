<template>
  <div style="background-color: #FFFFFF;line-height: 0;padding: 3%;text-align: left">
    <el-button type="primary" @click="add">添加</el-button>
  </div>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%;line-height: 0;"
      :header-cell-style="{textAlign: 'center'}"
      :cell-style="{ textAlign: 'center' }">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="appName"
        label="应用名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="appImage"
        label="应用图片"
        width="180">
    </el-table-column>
    <el-table-column
        prop="appDownload"
        label="应用地址"
        width="200">
    </el-table-column>
    <el-table-column label="应用评分" width="190">
      <template #default="scope">
        <el-rate
            v-model="scope.row.appScore"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
        </el-rate>
      </template>
    </el-table-column>
    <el-table-column
        prop="appTime"
        label="创建时间"
        width="180">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row.id)">编辑
        </el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 引入子组件 -->
    <Add-or-update v-if="dialogFormVisible" ref="addOrUpdate" style="padding: 0;margin: 0"></Add-or-update>
</template>

<script>
import AddOrUpdate from "@/views/admin/sya/sys_app_dialog";
import http from "@/utils/request"
import { ElMessage } from 'element-plus'
export default {
  inject:['reload'],
  components: {AddOrUpdate},
  data() {
    return {
      dialogFormVisible: false,
      tableData: [{
        appName: '',
        appImage: '',
        appContent: '',
        appDownload:'',
        appScore:'',
        appTime:''
      }]
    }
  },
  // 页面加载完自动执行
  mounted: function () {
    this.$nextTick( () => {
      // 请求数据
      http({
        url: '/sysapp/list',
        method: 'get',
      }).then( res=> {
        this.tableData=res.data.data.records
      })
    })
  },
  // 数据更新
  updated() {
    console.log("更新")
    this.$nextTick( () => {
      console.log("更新")
      // 请求数据
      // http({
      //   url: '/sysapp/list',
      //   method: 'get',
      // }).then( res=> {
      //   this.tableData=res.data.data.records
      // })
    })
  },
  /*方法区*/
  methods: {
    //新增
    add() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init()
      })
    },
    // 更新
    handleEdit(index, id) {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
      })
    },
    // 删除
    handleDelete(index, id) {
      console.log(index,id)
      this.$nextTick(()=>{
        http({
          url:'/sysapp/delete/'+id,
          method:'delete',
        }).then( res =>{
          if (res.data.code === 200){
            this.reload()
            ElMessage.success({
              message:'已删除',
              type:'success'
            })
          }
        })
      })
    }
  },

}
</script>

<style>

</style>
