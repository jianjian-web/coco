<template>
  <div class='header'>
    <div class='rt'>
      <!-- <span class='coco-lingdang'></span> -->
      <el-dropdown>
        <i class="coco-yonghu"></i>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
          <el-dropdown-item @click.native='handleLogout'>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class='name'>{{userInfo.nickname}}</span>
    </div>
    <div class='lf' @click='handleToggleNav'>
      <span class='coco-zhedie'></span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'coHeader',
  data () {
    return {
    }
  },
  methods: {
    handleToggleNav () {
      this.$emit('toggleNav')
    },
    handleLogout () {
      this.$http.post('/logout').then(res => {
        if (res) {
          this.$router.push({ path: '/login' })
        }
      })
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style scoped lang='less'>
.header{
  height: 100%;
  background:#fff;
  padding:0 20px;
  line-height: 60px;
  overflow: hidden;
  .rt{
    .coco-lingdang{
      font-size:20px;
      margin-right:20px;
    }
    .coco-yonghu{
      font-size:20px;
      cursor: pointer;
    }
    .name{
      color:#666;
      font-size:16px;
      margin-left:5px;
      position: relative;
      top:-2px;
    }
  }
  .lf{
    .coco-zhedie{
      cursor: pointer;
    }
  }
}
</style>
