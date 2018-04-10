<template>
        <div class="row" >
            <div class="col-md-4">
                <!--导航-->
                <div class="list-group" style="margin-left:-15px;">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a class="list-group-item list-group-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
                        <a class="list-group-item list-group-action">点餐文档</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-action">快递信息</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'connectLink'}">
                        <a class="list-group-item list-group-action">我的收藏</a>
                    </router-link>
                  <router-link tag="li" class="nav-link" :to="{name:'couponLink'}">
                    <a class="list-group-item list-group-action">抵用券</a>
                  </router-link>
                  <router-link tag="li" class="nav-link" :to="{name:'myViewLink'}">
                    <a class="list-group-item list-group-action">我的评论</a>
                  </router-link>
                  <router-link tag="li" class="nav-link" :to="{name:'personalInfoLink'}">
                    <a class="list-group-item list-group-action">个人信息</a>
                  </router-link>
                </div>
            </div>
            <div class="col-md-8">
                <!--导航所对应的内容-->
                <router-view></router-view>
            </div>
        </div>

</template>