<template>
  <el-menu 
        :default-active="navIndex"
        background-color="#001529"
        text-color="#fff"
        class='aside-menu'
        :router='true'
        :collapse="isOpen"
        @select='handleSelect'
        >
          <p style='height:60px;background:#AABBCC;line-height:60px;text-align:center'>logo</p>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">我的活动</span>
          </el-menu-item>
          <el-menu-item index="/record">
            <i class="el-icon-menu"></i>
            <span slot="title">通话记录</span>
          </el-menu-item>
          <el-menu-item index="/contact">
            <i class="el-icon-menu"></i>
            <span slot="title">联系人</span>
          </el-menu-item>
          <el-menu-item index="/team">
            <i class="el-icon-menu"></i>
            <span slot="title">我的团队</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">我的账户</span>
            </template>
              <el-menu-item index="/account/recharge">充值记录</el-menu-item>
              <el-menu-item index="/account/consumption">消费记录</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </template>
              <el-menu-item index="/setting/ecp">ECP设置</el-menu-item>
              <el-menu-item index="/setting/password">修改密码</el-menu-item>
          </el-submenu>
        </el-menu>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {SET_NAV_INDEX} from '../../store/mutation-types'
  export default{
    name: 'Nav',
    data () {
      return {
        currentIndex: '/'
      }
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapState([
        'navIndex'
      ])
    },
    methods: {
      ...mapMutations([
        SET_NAV_INDEX
      ]),
      handleSelect (v) {
        this[SET_NAV_INDEX](v)
      }
    },
    watch: {
      isOpen (v) {
        console.log(v)
      }
    }
  }
</script>

<style lang='less' scoped>
  .aside-menu{
    height:100%;
    &:not(.el-menu--collapse) {
      width: 250px;
    }
  }
</style>
