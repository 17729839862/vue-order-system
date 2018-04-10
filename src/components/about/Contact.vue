<template>
    <div class="card text-dark bg-light mb-3 md-to">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p class="card-text">179960731</p>
        <router-link :to="{name:'phoneNumber'}">电话</router-link>
        <router-link :to="{name:'personName'}">联系人</router-link>
        <router-view>

        </router-view>
      </div>
    </div>
</template>
<style>
  .md-to{
    margin-top:8px;
  }
</style>
