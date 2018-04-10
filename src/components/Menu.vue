<template>
    <div class="row">
        <!--菜单-->
        <div class="col-sm-12 bgs col-md-8 ">
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th>尺寸</th>
                    <th>价格</th>
                    <th>加入</th>
                </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                <tr>
                    <td><strong>{{item.name}}</strong></td>
                </tr>
                <tr v-for="option in item.options" :key="option.size">
                    <td>{{option.size}}寸</td>
                    <td>{{option.price}}</td>
                    <td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item,option)">+</button></td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--购物车-->
        <div class="col-md-4 col-sm-12">
            <table class="table">
                <thead class="thead-default">
                <tr>
                    <th>数量</th>
                    <th>品种</th>
                    <th>价格</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item_data in baskets" v-show="baskets.length>0" :key="item_data.name">
                    <td>
                        <button class="btn btn-sm btn-outline-primary" @click="decreaseQuantity(item_data)">-</button>
                        <span>{{item_data.quantity}}</span>
                        <button class="btn btn-sm btn-outline-primary" @click="increaseQuantity(item_data)">+</button>
                    </td>
                    <td>{{item_data.name}}{{item_data.size}}</td>
                    <td>{{item_data.price*item_data.quantity}}</td>
                </tr>
                <tr v-show="baskets.length<=0">
                    <p>购物车还没有宝贝哦！</p>
                </tr>
                </tbody>
            </table>
            <p v-show="baskets.length>0">总价:{{total+'元'}}</p>
            <button class="btn btn-success btn-block">结算</button>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000" class="text-center">
        </el-pagination>
    </div>
</template>
<script>
    export default{
        created:function(){//将菜单的数据从数据库中请求显示在页面上
          this.fetchData();//调用请求数据库的方法
        },
        data:function(){
            return{
                shows:true,
                baskets:[],//购物车放置的数组
                getMenuItems:{

                }
            }
        },
        computed:{
          total:function(){
            let totalCost=0;
            for(let index in this.baskets){
              let individualItem=this.baskets[index];//把购物车的每一项赋值给一个变量
              totalCost+=individualItem.quantity*individualItem.price;
            }
            return totalCost;
          }
        },
        methods:{
            addToBasket:function(item,option){
              //为了解决重复添加项的问题 用一个变量接受购物车的内容
                let basket={
                  name:item.name,
                  size:option.size,
                  price:option.price,
                  quantity:1//数量 默认为1
                };
                //匹配的操作
               if(this.baskets.length>0){
                 //过滤 当购物车的数组大于零的时候
                 //过滤掉重复的添加
                 let result=this.baskets.filter(function(basket){
                   return basket.name===item.name&&basket.price===option.price;
                 });//返回过滤成功的数据
                 if(result!=null&&result.length>0){
                   result[0].quantity++;
                 }else{
                   this.baskets.push(basket);
                 }
               }else{
                 //alert(this.$options.baskets);
                 this.baskets.push(basket);
               }

            },
          //购物车的两个方法
            decreaseQuantity:function(item){
              item.quantity--;
              if(item.quantity<=0){
                this.removeFromBasket(item);
              }

            },
            increaseQuantity:function(item){
              item.quantity++;
           },
           removeFromBasket:function(item){
             this.baskets.splice(this.baskets.indexOf(item),1);//删除当前项
           },
          fetchData:function(){//菜单请求数据的方法
            let _this=this;
            fetch("https://wd3488580453julxed.wilddogio.com/menu.json").then(function(res){
              return res.json();
            }).then(function(data){
              _this.getMenuItems=data;
            });
          }
        }
    }
</script>