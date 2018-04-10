<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/logo.png" alt="">
                    <form @submit.prevent="onsubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input
                                    type="email"
                                    class="form-control"
                                    v-model="email"
                                    >
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input
                                    type="password"
                                    class="form-control"
                                    v-model="password"
                                    >
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data:function(){
            return {
                email:'',
                password:''
            }
        },
        methods:{
            onsubmit:function(){
                axios.get('/user.json').then(res=>{
                    //console.log(res);
                    //Object {data: Object, status: 200, statusText: "OK", headers: Object, config: Object…}
                    //console.log(res.data);
                    //Object {-L8v3g21F70c7qTQ: Object, -L8v3h_H4IY5xSYt: Object, -L8v4CtvRbGOOdGt: Object, -L8v4R17Fd3zPqNH: Object, -L8v66McnshXJdv2: Object…}
                    const data=res.data;//放到数组里里面去
                    const users=[];//定义一个空数组存放用户信息
                    for(let key in data){
                        const user=data[key];
                        //console.log(user);
                        //Object {confirmPassword: "321", email: "1030568897@qq.com", password: "321"}
                        //得到就是所有注册的用户信息数据
                        users.push(user);
                    }
                    //console.log(users);
                    //打印每条用户数据的信息 每条数据就是一个对象
                    //[Object, Object, Object, Object, Object, Object]
                    //实现过滤 定义过滤器 过滤出用户登录是输入的信息
                    let result=users.filter((user)=>{
                        //用户输入的邮箱和密码
                        return user.email===this.email&&user.password===this.password;
                    });
                    if(result.length>0&&result!=null){
                        this.$router.push({name:'home'});
                        alert('登录成功');
                    }else{
                        alert('账号或者密码错误');
                    }
                    console.log(result);//过滤的内容
                });
            }
        }
    }
</script>

