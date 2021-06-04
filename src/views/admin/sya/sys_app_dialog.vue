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
      <el-button type="primary" @click="addapp">确 定</el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script>
import http from "@/utils/request"

export default {
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
        appTime :""
      }
    };
  },
  methods: {
    /*保存*/
    addapp() {
      console.log("保存")
      return http({
        header: {'Content-Type':'application/json'},
        method: 'post',
        url: '/sysapp/add',
        data: {
          "appName" : this.form.name,
          "appImage" : this.form.image,
          "appContent" : this.form.content,
          "appDownload" : this.form.download,
          "appScore" : this.form.score
        }
      }).then(res => {
        if (res.data === 200) {
          let data = res.data
          console.log(data)
        }
      })
    },
    init(id) {
      this.form.id = id || 0
      this.dialogVisible = true
      /*编辑*/
      if (this.form.id) {
        console.log("编辑")
      }
    }
  }
};
</script>

<style>
</style>
