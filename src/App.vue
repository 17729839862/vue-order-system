<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>

    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br/>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/header.vue';
export default {
  //注册组件
  components:{
    appHeader:Header

    //'app-header':Header也可以

  }
}
</script>

<style>

</style>
