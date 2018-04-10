<template>
    <div class="card  bg-light mb-3 md-to">
        <div class="card-header text-danger">我的评论</div>
        <div class="card-body">
            <h4 class="card-title text-primary">我的评论</h4>
            <p class="card-text">179960731</p>
        </div>
        <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>


    </div>
</template>
<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
