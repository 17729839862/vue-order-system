<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/logo.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input
                                    type="email"
                                    class="form-control"
                                    v-model="email"
                                    id="email"

                                    >
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password"
                                    class="form-control"
                                    v-model="password"
                                   id="password"
                                    >
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input
                                    type="password"
                                    class="form-control"
                                    v-model="confirmPassword"
                                    id="confirm-password"
                                    >
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    //引入axios
    import axios from 'axios';
    export default{
        data:function(){
        return {
            email:'',
            password:'',
            confirmPassword:''
        }
      },
        methods:{
            onSubmit:function(){
              //console.log(111);//111
                if(this.password===this.confirmPassword){
                    const formData={
                        email:this.email,
                        password:this.password,
                        confirmPassword:this.confirmPassword
                    };
                    //发送请求
                    axios.post('/user.json',formData).then(
                            res => this.$router.push({name:'Login'})
                )
                   /* function(res){
                        return this.$router.push({name:'Login'});//这种写法错误
                    }*/
                }else{
                    alert('两次密码不一致');
                    this.email='';
                    this.password='';
                    this.confirmPassword=''
                }

          }
        }
    }
</script>


