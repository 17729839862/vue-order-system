<template>
    <div>
        <div class="col-sm-12">
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
                    <td>{{option.size}}</td>
                    <td>{{option.price}}</td>
                    <td><button class="btn btn-sm btn-outline-success">+</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
        return{
            getMenuItems:{
                1: {
                    'name': '榴莲pizza',
                    'description': '这是喜欢吃榴莲朋友的最佳选择',
                    'options': [{
                        'size': 9,
                        'price': 38
                    }, {
                        'size': 12,
                        'price': 48
                    }]
                },
                2: {
                    'name': '芝士pizza',
                    'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
                    'options': [{
                        'size': 9,
                        'price': 38
                    }, {
                        'size': 12,
                        'price': 48
                    }]
                },
                3: {
                    'name': '夏威夷pizza',
                    'description': '众多人的默认选择',
                    'options': [{
                        'size': 9,
                        'price': 36
                    }, {
                        'size': 12,
                        'price': 46
                    }]
                }
            }
        }
    }
    }
</script>