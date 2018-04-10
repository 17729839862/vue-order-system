import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld';*/
import home from '@/components/home';
import Header from '@/components/header';
import Menu from '@/components/Menu';
import Admin from '@/components/Admin';
import Login from '@/components/Login';
import About from '@/components/about/About';
import Register from '@/components/Register';
//二级路由
import Contact from '@/components/about/Contact';
import Delivery from '@/components/about/Delivery';
import OrderingGuide from '@/components/about/OrderingGuide';
import History from '@/components/about/History';
import Connect from '@/components/about/Connect';
import Coupon from '@/components/about/Coupon';
import MyView from '@/components/about/MyView';
import PersonalInfo from '@/components/about/PersonalInfo';
//三级路由 contact下的三级路由
import personName from '@/components/about/contact/personName';
import Phone from '@/components/about/contact/Phone';
Vue.use(Router);

export default new Router({
  mode:'history' ,/*
  base:'/',*/
  scrollerBehavior:function(to,from,savedPosition){

      /*return { x: 0, y: 200 }*///滚动条在页面刷新的时候会滚动到相应指定的位置
   /* return{
      /!*selector:'.btn'//选择滑动到class选择器为btn的第一个*!/

    }*/
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path:'/',
      name:'home',
      components:{
        default:home,//默认是home组件
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
      }
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu

    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
      /*beforeEnter:(to,from,next)=>{//意思就是在进入这个路由之前会提示我们一个信息 就会停止在之前的路由页面

        //和beforeEach差不多
        //alert('非登陆状态不能进入');
        next();//正常跳转页面
        //next(false);//不会进入跳转页面
        //全局的守卫的方法
        /!*if(to.path=='/login' || to.path=='/register'){
          next();//正常的展示
        }else{
          alert('还没有登录,请先登录！');
          next('/login');
        }*!/
      }*/
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/about',
      name:'About',
      component:About,
      redirect:'/about/contact',//默认显示的组件
      children:[
        {
          path:'/about/contact',//可以写路径下的路由 也可以直接定义名字
          name:'contactLink',
          component:Contact,
          redirect:'/phone',
          children:[//三级路由
            {
              path:'/phone',
              name:'phoneNumber',
              component:Phone
            },
            {
              path:'/personName',
              name:'personName',
              component:personName
            }
          ]
        },
        {
          path:'/history',//直接定义名字
          name:'historyLink',
          component:History
        },
        {
          path:'/orderingGuide',
          name:'orderingGuideLink',
          component:OrderingGuide
        },
        {
          path:'/delivery',
          name:'deliveryLink',
          component:Delivery
        },
        {
          path:'/connect',
          name:'connectLink',
          component:Connect
        },
        {
          path:'/coupon',
          name:'couponLink',
          component:Coupon
        },{
          path:'/personalInfo',
          name:'personalInfoLink',
          component:PersonalInfo
        },{
          path:'/myView',
          name:'myViewLink',
          component:MyView
        },
      ]

    },
    {
      path:'*',//代表所有的路由 除去前面的所有路由的所有路由
      redirect:'/'
    }
  ]

})
