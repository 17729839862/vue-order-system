<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!--new pizza-->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!--品种展示-->
            <h4 class="text-success my-3">菜单</h4>
            <table class="table">
                <thead class="table table-default">
                <tr>
                    <th>品种</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                <tr>
                    <td>{{item.name}}</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteData(item)">&times;</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!--组件内部的守卫-->
</template>
<script>
    import MewPizza from './NewPizza.vue' ;

    export default{
      data:function(){
        return {
          getMenuItems:[]
        }
      },
      components:{
            'app-new-pizza':MewPizza
        },
      //页面加载出来触发的函数
      created:function(){
        var _this=this;
        //get提交就不需要进行配置
        fetch("https://wd3488580453julxed.wilddogio.com/menu.json").then(function(res){
          return res.json();
        }).then(function(data){
          //console.log(data);//data就是服务器返回的数据
          /*Object {-L95x8JTZZBHYlcv: Object,
           -L95yA1pAKYuRtbd: Object, -L962nWx-ELVa-GM: Object}*/
          let MenuArray=[];//保存菜单的数据在一个空的数组
          for(let key in data){//遍历对象的key，用来标识每条数据的唯一性
            //console.log(key);
            //console.log(data[key]);
            data[key].id=key;//将key保存在id的属性里面
            MenuArray.push(data[key]);//将菜单的数据遍历保存在一个空的数组
          }
          _this.getMenuItems=MenuArray;

        });
      },
      methods:{
        //删除数据的方法
        deleteData:function(item){
          let a=confirm('确认删除？');
          if(!a){
            return false;
          }
          var _this=this;
          fetch("https://wd3488580453julxed.wilddogio.com/menu/"+item.id+"/.json",{
            method:'DELETE',//配置的方法就是DELETE
            headers:{
              'Content-type':'application/json'
            }
          }).then(function(res){
            return res.json();
          }).then(function(data){
            /*console.log(data);*/
            alert('删除成功');
            _this.$router.push({name:'Menu'});//跳转到菜单页面
          }).then(function(err){
            console.log(err);
          });
        }

      }
       /* data:function(){
        return {
            name:'henry'
        }
        },
       beforeRouteEnter:function(to,from,next){
            //当前守卫执行的时候,组件还没有渲染出来，所以读取不到data里面的数据
            //alert('hello'+this.name);//cannot read property of name
            next(function(vm){//通过回掉函数的参数获取实例进行操作
                alert('hello'+vm.name);//vm.name相当于就是this.name 当前vue组件实例的对象

            });
        },
        beforeRouteLeave:function(to,from,next){//在即将离开当前路由时(点击其他路由的时候)
            //就会调用相应的回掉方法
            //alert('确定离开？');
            if(confirm('确定离开？')){
                next();//点击确定就会成功跳转
            }else{
                next(false);//点击取消就会仍然在当前路由
            }
        }
*/
    }
</script>