<template>
  <div class='layout'>
    <el-container class='layout-container'>
      <!-- 侧边栏导航 -->
      <el-aside
       class='aside'
       :width='!asideOpen?"250px":"64px"'
       >
        <div class='logo'>
          logo
        </div>
        <co-Nav :isOpen='asideOpen'></co-Nav>
      </el-aside>
      <!-- 主体 -->
      <el-container class='main-container'>
        <el-header 
        class='header-container'
        height='60px'
        >
          <co-header @toggleNav='handleToggleNav'></co-header>
        </el-header>

        <el-main class='main'>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
      <!-- 页脚 -->
    <div class='co-footer'>
      这是页脚
    </div>
  </div>
</template>

<script>
import coNav from './Nav'
import coHeader from './Header'

export default {
  name: 'layout',
  data () {
    return {
      asideOpen: false
    }
  },
  components: {
    coNav, coHeader
  },
  methods: {
    handleClick () {
      this.$http.get('/test').then((res) => {
        console.dir(res)
      })
    },
    handleToggleNav () {
      this.asideOpen = !this.asideOpen
      console.log(this.asideOpen)
    }
  }
}
</script>

<style scoped lang='less'>
@headHeight: 60px;
@footHeight: 50px;

.layout{
  height:100%;
  .layout-container{
    height:calc(~'100% - 50px');
    .aside{
      // transition: all 0.35s linear;
      height:100%;
      // overflow: visible;
      overflow-x: visible;
      overflow-y: hidden;
      .logo{
        height:@headHeight;
        line-height: @headHeight;
        text-align: center;
        background:#abc;
        color:#fff;
      }
    }
    .main-container{
      .header-container{
        padding:0;
      }
      .main{
        margin:20px;
        background:#fff;
        border-radius: 5px;
        padding:20px;
        min-width:1000px;
      }
    }
  }
  .co-footer{
    height: @footHeight;
    line-height: @footHeight;
    text-align: center;
    background:#AABBCC;
  }
}
</style>
