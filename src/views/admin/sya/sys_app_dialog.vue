<template>
  <el-dialog
      :title="!form.id ?'新增' : '修改'"
      :close-on-click-modal="false"
      v-model="dialogVisible"
      append-to-body
      top="8%">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="应用名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="应用图片">
        <el-input v-model="form.image"></el-input>
      </el-form-item>
      <el-form-item label="应用内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="下载地址">
        <el-input v-model="form.download"></el-input>
      </el-form-item>
      <el-form-item label="应用评分">
        <el-rate
            style="line-height: 50px"
            v-model="form.score"
            :colors="colors">
        </el-rate>
      </el-form-item>
    </el-form>
    <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addapp(this.form.id)">确 定</el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script>
import http from "@/utils/request"
import { ElMessage } from 'element-plus'

export default {
  inject:['reload'],
  data() {
    return {
      dialogVisible: false,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      form: {
        id: '',
        name: "",
        image: "",
        content: "",
        download: "",
        score: "",
        appTime: ""
      },
    };
  },
  methods: {
    addapp(id) {
      console.log("传入的ID >>>>> "+id)
      this.form.id = id || 0
      // 如果有值 则更新
      if (this.form.id){
        http({
          header: {'Content-Type': 'application/json'},
          method: 'put',
          url: '/sysapp/update',
          data: {
            "id":this.form.id,
            "appName": this.form.name,
            "appImage": this.form.image,
            "appContent": this.form.content,
            "appDownload": this.form.download,
            "appScore": this.form.score
          }}).then( res => {
          if(res.data.code === 200){
            this.dialogVisible = false
            this.reload()
            ElMessage.success({
              message:'更新完毕',
              type:'success'
            })
          }
        })
      }else {
        // 进行数据添加
        http({
          header: {'Content-Type': 'application/json'},
          method: 'post',
          url: '/sysapp/add',
          data: {
            "appName": this.form.name,
            "appImage": this.form.image,
            "appContent": this.form.content,
            "appDownload": this.form.download,
            "appScore": this.form.score
          }}).then( res => {
          if(res.data.code === 200){
            this.dialogVisible = false
            this.reload()
            ElMessage.success({
              message:'插入成功',
              type:'success'
            })
          }
        })
      }

    },
    init(id) {
      this.form.id = id || 0
      this.dialogVisible = true
      /*编辑*/
      if (this.form.id) {
        /*根据id查询数据*/
        http({
          header:{'Content-Type':'application/x-www-form-urlencoded'},
          method:'get',
          url:'/sysapp/id',
          params:{
            id:this.form.id
          }
        }).then( res =>{
          console.log(res.data.data.appName)
          this.form.name = res.data.data.appName
          this.form.image = res.data.data.appImage
          this.form.content = res.data.data.appContent
          this.form.download = res.data.data.appDownload
          this.form.score = res.data.data.appScore
          this.form.appTime = res.data.data.appTime
        })
      }
    }
  }
};
</script>

<style>
</style>
