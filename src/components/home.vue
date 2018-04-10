<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center ">
            <div class="background">
                <h1>欢迎大家品尝美食</h1>
                <h2>这里有你非常喜欢的美味</h2>
                <button class="btn btn-danger" v-on:click="goToNowMenu">去瞧瞧!</button>
            </div>
        </div>
        <!--<button class="btn btn-success" v-on:click="goToMenu"> 跳转上一次页面</button>

        <button class="btn btn-primary" v-on:click="goToRouterName"> go log_router_name</button>
        <button class="btn btn-primary" v-on:click="goPush"> go_push_router_register</button>-->
    </div>


</template>
<script>
    export default {
        methods:{
            goToMenu:function(){
                //跳转到上一次浏览的页面
                this.$router.go(-1);
            },
            goToNowMenu:function(){
                this.$router.replace('/menu');
            },
            goToRouterName:function(){
                this.$router.replace({name:'Login'});
            },
            goPush:function(){
                this.$router.push('/register');
                //也可以通过路由的name来进行路由的跳转
                //this.$router.push({name:'Register'});
            }
        }
    }
</script>
<style>
    #home{
        background:url(../../src/assets/pizza.jpg);
        background-clip: content-box;/*根据内容的大小调整*/
        height:80vh;


    }
    .background h1{
        /*color:#fff;*/
    }
    .background h2{
        /*color:#fff;*/
    }
    .background h1,h2{
        margin:6%;
    }
    .background{
        background:#eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        position:relative;
        top:10%;
        left:0;
        padding:20px;
    }
</style>