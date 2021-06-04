import { createRouter, createWebHashHistory } from 'vue-router'
import login from "@/views/login/login";
import admin_index from '@/views/admin/Index';
import admin from '@/views/admin/Home';
import index from '@/views/sys/index'
import sys_app from "@/views/admin/sya/sys_app";

const routes = [
  {path :'/',name:'首页',component: index},
  {
    path: '/admin',
    component: admin,
    name: '管理员页面',
    redirect:'/admin/admin_index',
    children: [
      /*{ path: '/admin/login', name:'登录页面', redirect: login},*/
      { path: '/admin/admin_index',name:'后台首页',component: admin_index},
      { path: '/admin/sys_app',name:'应用管理',component: sys_app},
    ]
  },
  { path: '/login', name:'登录页面', component: login}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
//to到哪儿 from从哪儿离开 next跳转 为空就是放行
  if (to.path === '/login') {
    //如果跳转为登录，就放行
    next();
  } else {
    //取出localStorage判断
    let token = localStorage.getItem('authorization');
    console.log("token的值>>>>>>" + token)
    if (token == null || token === '') {
      console.log('请先登录')
      next('/login');
    } else {
      next();
    }
  }});



export default router
