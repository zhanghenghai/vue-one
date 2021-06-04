<template>
  <el-container style="height: 100%">
    <el-header style="padding: 0">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#409EFF" text-color="#ffff">
        <el-menu-item style="width: 10%;">
          <h2 style="margin: 0;padding: 0;color: #ffff">应用管理</h2>
        </el-menu-item>
      </el-menu>
    </el-header>
    <!--  导航栏    -->
    <el-container>
      <el-aside width="230px" style="background: #ffffff;">
        <el-row class="tac">
          <el-col>
            <el-menu
                router
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#ffff"
                style="text-align: left"
                text-color="#00000">
              <el-menu-item index="/admin/admin_index">
                <i class="el-icon-menu"></i>
                <template #title>系统首页</template>
              </el-menu-item>
              <el-submenu index="2">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>一个宝箱</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/admin/sys_app">系统应用</el-menu-item>
                  <el-menu-item index="1-2">插件大全</el-menu-item>
                  <el-menu-item index="1-1">新闻发布</el-menu-item>
                  <el-menu-item index="1-1">今日热卖</el-menu-item>
                  <el-menu-item index="1-2">公告发布</el-menu-item>
                  <el-menu-item index="1-2">版本更新</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <template #title>HH浏览器</template>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <template #title>学习助手</template>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>



</template>

<!--导航栏-->
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
body,html,#app{
  margin: 0;
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
