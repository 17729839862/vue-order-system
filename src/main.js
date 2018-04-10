// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(ElementUI);
//定义默认的基本路径
axios.defaults.baseURL='https://wd3488580453julxed.wilddogio.com/';//请求的基本路径

//全局守卫 是否登录的验证
/*router.beforeEach((to,from,next)=>{
  //to 是要到那个路由去
  //from 是从哪个路由离开
  //next 是一个是否决定展示要看到的一个页面？参数为路由地址 没有参数的时候就是正常显示
  //alert('请先登录!');//点击任何内容之前 都会有一个弹出框的提示
  //next();//=>跳转到点击的路由
  //判断store.gettes.isLogin===false;
  //console.log(to);//Object {name: "Admin", meta: Object, path: "/admin", hash: "", query: Object…}
  if(to.path=='/login' || to.path=='/register'){
    next();//正常的展示
  }else{

   alert('还没有登录,请先登录！');
    next('/login');
  }
});*/
//全局后置钩子,然而和守卫不同的是,这些钩子不会接受next函数也不会
/*router.afterEach((to,fromnpm)=>{
  console.log(to);
  alert('after each');//页面一加载出来就会弹出点击其他路由的时候也会弹出并且
  //正常跳转路由
});*/
//改变导航本身
//路由独享守卫
//组件内的守卫

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
