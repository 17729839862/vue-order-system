<template>
    <form>
        <h4 class="text-success my-3">添加披萨</h4>
        <div class="form-group row">
            <label for="newPizza" class="col-sm-12 col-md-1 control-label ">品种</label>
            <div class="col-sm-12 col-md-11">
                <input type="text" class="form-control" v-model="newPizza.name" id="newPizza"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="description" class="col-sm-12 col-md-1 control-label ">描述</label>
            <div class="col-sm-12 col-md-11">
                <textarea class="form-control" v-model="newPizza.description" id="description"  rows="5"></textarea>
            </div>
        </div>
        <p><strong>选项一</strong></p>
        <div class="form-group row">
            <label for="size1" class="col-sm-12 col-md-1 control-label ">尺寸</label>
            <div class="col-sm-12 col-md-11">
                <input type="text" class="form-control" v-model="newPizza.size1" id="size1"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="price1" class="col-sm-12 col-md-1 control-label ">价格</label>
            <div class="col-sm-12 col-md-11">
                <input type="text" class="form-control" v-model="newPizza.price1" id="price1"/>
            </div>
        </div>
        <p><strong>选项二</strong></p>
        <div class="form-group row">
            <label for="size2" class="col-sm-12 col-md-1 control-label ">尺寸</label>
            <div class="col-sm-12 col-md-11">
                <input type="text" class="form-control" v-model="newPizza.size2" id="size2"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="price2" class="col-sm-12 col-md-1 control-label ">价格</label>
            <div class="col-sm-12 col-md-11">
                <input type="text" class="form-control" v-model="newPizza.price2" id="price2"/>
            </div>
        </div>
        <div class="form-group row">

            <div class="col-sm-12">
                <button type="button" @click="addMenuItem" class="btn btn-success btn-block">添加</button>
            </div>

        </div>
    </form>
</template>
<script>
    export default{
        data:function(){
            return {
                newPizza:{
                    name:'',
                    description:'',
                    size1:'',
                    size2:'',
                    price1:'',
                    price2:''
                }
            }
        },
        methods:{
            addMenuItem:function(){
                //console.log(123);
                let data={
                    name:this.newPizza.name,
                    description:this.newPizza.description,
                    options:[
                        {
                            size:this.newPizza.size1,
                            price:this.newPizza.price1
                        },
                        {
                            size:this.newPizza.size2,
                            price:this.newPizza.price2
                        }
                    ]
                };
                //axios vue-resource es6 fetch
                //fetch是es6的提交数据
                fetch("https://wd3488580453julxed.wilddogio.com/menu.json",{
                    method:"POST",
                    header:{
                        "Content-type":'application/json'
                    },//配置头部文件
                    body:JSON.stringify(data)//将json转换为字符串

                }).then(function(res){//得到的数据
                    /*console.log(res);*/
                    //Response {type: "cors", url: "https://wd3488580453julxed.wilddogio.com/menu.json", redirected: false, status: 200, ok: true…}
                    alert('添加菜单成功');
                    return res.json();//转换为json数据

                }).then(data=>this.$router.push({name:'Menu'})).catch(err=>console.log(err));
            }
        }
    }
</script>