<template>
  <el-menu 
        :default-openeds="['1']"
        background-color="#001529"
        text-color="#fff"
        class='aside-menu'
        :router='true'
        :collapse="isOpen"
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">我的活动</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">我的团队</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              我的账户
            </template>
              <el-menu-item index="/test1">充值记录</el-menu-item>
              <el-menu-item index="/test2">消费记录</el-menu-item>
          </el-submenu>
           <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">通知设置</span>
          </el-menu-item>
        </el-menu>
</template>

<script>
  export default{
    name: 'Nav',
    data () {
      return {}
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isOpen (v) {
        console.log(v)
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang='less' scoped>
  .aside-menu{
    height:100%;
    overflow: auto;
  }
</style>
