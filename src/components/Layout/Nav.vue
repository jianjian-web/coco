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
          <el-menu-item index="/contact">
            <i class="el-icon-menu"></i>
            <span slot="title">联系人</span>
          </el-menu-item>
          <el-menu-item index="team">
            <i class="el-icon-menu"></i>
            <span slot="title">我的团队</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">我的账户</span>
            </template>
              <el-menu-item index="/test1">充值记录</el-menu-item>
              <el-menu-item index="/test2">消费记录</el-menu-item>
          </el-submenu>
           <el-menu-item index="message">
            <i class="el-icon-menu"></i>
            <span slot="title">设置</span>
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
    }
  }
</script>

<style lang='less' scoped>
  .aside-menu{
    height:100%;
    overflow-x: visible;
    overflow-y: auto;
  }
</style>
