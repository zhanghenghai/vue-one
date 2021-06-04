<template>
  <el-container>
    <el-header class="nav" style="background-color: #FFFFFF">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#000" background-color="#FFFFFF">
        <el-menu-item index="1" class="width">首页</el-menu-item>
        <el-submenu index="2" class="width">
          <template #title>系统</template>
          <el-menu-item index="2-1">浏览器</el-menu-item>
          <el-menu-item index="2-2">驱动</el-menu-item>
          <el-menu-item index="2-3">补丁</el-menu-item>
          <el-menu-item index="2-4">安全</el-menu-item>
          <el-menu-item index="2-4">优化</el-menu-item>
          <el-menu-item index="2-5">桌面</el-menu-item>
        </el-submenu>
        <el-submenu index="3" class="width">
          <template #title>办公</template>
          <el-menu-item index="3-1">文字处理</el-menu-item>
          <el-menu-item index="3-2">表格处理</el-menu-item>
        </el-submenu>
        <el-submenu index="4" class="width">
          <template #title>编程</template>
          <el-menu-item index="4-1">环境依赖</el-menu-item>
          <el-menu-item index="4-2">编程工具</el-menu-item>
          <el-menu-item index="4-3">设计软件</el-menu-item>
        </el-submenu>
        <el-submenu index="5" class="width">
          <template #title>娱乐</template>
          <el-menu-item index="5-1">影视</el-menu-item>
          <el-menu-item index="5-2">音乐</el-menu-item>
        </el-submenu>
        <el-menu-item index="1">系统美化</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-carousel :interval="5000" arrow="always" style="width: 80%;margin: auto" height="400px">
        <el-carousel-item v-for="item in imgList" :key=item.id>
          <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
        </el-carousel-item>
      </el-carousel>
      <!--   布局   -->
      <el-row :gutter="20" style="margin: auto;margin-top: 3%;width: 80%">
        <el-col :span="6"><div class="grid-content bg-purple plate" style="background: #67C23A"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple plate" style="background: #E6A23C"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple plate" style="background: #F56C6C"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple plate" style="background: #909399"></div></el-col>
      </el-row>


      <!--   最新文章   -->
      <el-row style="width: 80%;margin:auto;line-height: 50px;padding: 2%">
        <i class="el-icon-edit" style="line-height: 50px"></i>
        <span style="text-align: left;font-family: serif">最新文章</span>
      </el-row>

      <!--   最热   -->
      <el-row :gutter="20" style="margin: auto;margin-top: 0%;width: 80%">
        <el-col :span="6" v-for="ic in index" :key="ic.id">
          <el-card :body-style="{ padding: '33px' }">
            <img :src="ic.img" class="image" alt="">
            <div style="padding: 3px;">
              <span>{{ic.name}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!--   最新文章   -->
      <el-row style="width: 80%;margin:auto;line-height: 50px;padding: 2%">
        <i class="el-icon-menu" style="line-height: 50px"></i>
        <span style="text-align: left;font-family: serif">应用大全</span>
      </el-row>

      <el-row :gutter="20" style="margin: auto;width: 80%">
        <el-col :span="6" v-for="ap in app" :key="ap.id">
          <el-card :body-style="{ padding: '20' }" style="height: 160px">
            <div style="width: 100%;line-height: 0;height: 120px;padding: 10%" class="imghvr-fade;">
              <img :src="ap.img" class="image" style="width: 20%;margin: auto;margin-bottom: 5%" alt="">
              <figcaption>
                <h3 style="color: #333333">下载</h3>
              </figcaption>
              <span style="height: 100%">{{ap.name}}</span>
            </div>
          </el-card>
          <div style="background-color: #FFFFFF;height: 33px;">
            <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
            </el-rate>
          </div>
        </el-col>
      </el-row>

      <!--   内容   -->
      <el-row style="margin: auto;margin-top: 3%;width: 80%">
        <el-col :span="24">
          <div class="grid-content bg-purple content">
            <el-row :gutter="40" style="margin-top: 3%">

            </el-row>
          </div></el-col>
      </el-row>


    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>

</template>
<script>
export default {
  name: "index",
  data() {
    return {
      src: 'https://pc3.gtimg.com/softmgr/picture/web/banner/ac4f91ae41cda43113f855d70743e6a3.png',
      currentDate: new Date(),
      value: 3.7,
      /*图片*/
      imgList:[
        {
          id: 'one',
          name: 'one',
          src: 'https://img.lguohe.com/uploads/2021/03/office2021banner2.png',
          title: 'one',
        },
        {
          id: 'toe',
          name: 'tow',
          src: 'https://img.lguohe.com/uploads/2020/10/adobe2021banner4.png',
          title: 'tow',
        },
        {
          id: 'there',
          name: 'there',
          src: 'https://img.lguohe.com/uploads/2020/08/Ashampoobanner.png',
          title: 'there',
        },
        {
          id: 'four',
          name: 'four',
          src: 'https://img.lguohe.com/uploads/2020/05/Twinkstarbanner.jpg',
          title: 'four',
        },
      ],
      index: [
        {
          id: 1,
          name: 'QQ',
          img: 'https://pc3.gtimg.com/softmgr/picture/web/banner/ac4f91ae41cda43113f855d70743e6a3.png',
          content: 'QQ'
        },
        {
          id: 2,
          name: '腾讯网游',
          img: 'https://pc3.gtimg.com/softmgr/picture/web/banner/5f62da690dfce0f2697dc1d5e02e9e86.png',
          content: '腾讯网游'
        },
        {
          id: 3,
          name: '腾讯视频',
          img: 'https://pc3.gtimg.com/softmgr/picture/web/banner/40312784b351c6925ed6f0295cc29a9f.jpg',
          content: '腾讯视频'
        },
        {
          id: 4,
          name: '电脑管家',
          img: 'https://pc3.gtimg.com/softmgr/picture/web/banner/69518df1f17d472b6f399c88aa197246.png',
          content: '电脑管家'
        }
      ],
      app:[
        {
          id:1,
          name:"QQ",
          img:'https://pc3.gtimg.com/softmgr/logo/48/2_48_1482283025.png',
          title:'QQ',
        },
        {
          id:2,
          name: '微信电脑版',
          img:'https://pc3.gtimg.com/softmgr/logo/48/11488_48_1616464914.png',
          tiele:'微信电脑版'
        },
        {
          id:3,
          name: 'QQ浏览器',
          img:'https://pc3.gtimg.com/softmgr/logo/48/351_48_1390531994.png',
          title:'QQ浏览器'
        },
        {
          id:4,
          name: "腾讯网游",
          img:'https://pc3.gtimg.com/softmgr/logo/48/23988_48_1514032253.png',
          title:'腾讯网游'
        }
      ]
    }
  }
}
</script>

<style>
/*导航*/
.nav {margin: auto;}
/*导航内容*/
.width {width: 130px}
/*板块的高度*/
.plate{width:100%;height: 130px}
/*content*/
.content{height: 250px;display:block;margin: auto;text-align: center;line-height: 200px}
/*鼠标*/
.dynamic :hover{
  background-color: #F56C6C;
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
<!--走马灯-->
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>


