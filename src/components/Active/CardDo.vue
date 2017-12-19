<template>
  <div class='cardDo'>
    <span v-text='title'></span>
    <div class='wrapper'>
      <span>草稿</span><br>
      <el-button type='primary' class='btn'>去完善</el-button>
    </div>
  </div>
</template>

<script>
/* 草稿卡片 */
export default{
  name: 'cardDo',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: '活动名称'
    }
  }
}
</script>

<style lang='less' scoped>
.cardDo{
  margin-right:20px;
  padding:15px;
  width:200px;
  height:250px;
  border:1px solid #EBEBEB;
  border-radius: 5px;
  color:#666;
  .wrapper{
    margin-top:60px;
    text-align: center;
  }
  .btn{
    margin-top:20px;
  }
}
</style>

