<template>
  <div class='cardDone'>
    <div class='header'>
      <span v-text='title'></span>
      <div class='rt'>
        <span>编辑</span>
        <span>复制</span>
      </div>
    </div>
    <div class='time'>
      <span>2017-11-20 ~ 2017-11-31</span>
    </div>
    <div class='progress'>
      <span>0</span>%<br>
      <span style='font-size:12px;color:#666'>进行中</span>
    </div>
    <div class='progressLine'>
      <el-progress :percentage="70" :show-text='false'></el-progress>
    </div>
    <div class='footer'>
      <div class='lf'>
        <span>10</span>
        <span>应答</span>
      </div>
      <div class='rt'>
        <span>120</span>
        <span>总联系人</span>
      </div>
    </div>
    <div class='mark'>
      <span>teteeee</span>
      <span>teteeee</span>
      <span>teteeee</span>
      <span>teteeee</span>
    </div>
  </div>
</template>

<script>
/* 已完成卡片 */
export default{
  name: 'cardDone',
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
.cardDone{
  position: relative;
  margin-right:20px;
  margin-bottom:20px;
  padding:15px;
  width:200px;
  height:250px;
  border:1px solid #EBEBEB;
  border-radius: 5px;
  color:#666;  
  .header{
    .rt{
      position: absolute;
      right: 15px;
      top:15px;
      z-index: 10;
      span{
        padding:0 5px;
        color:#66B1FF;
        cursor: pointer;
      }
    }
  }
  .time{
    margin-top:10px;
  }
  .progress{
    color:#1890FF;
    font-size:1.8em;
    margin-top:35px;
    text-align: center;
  }
  .progressLine{
    margin-top:10px;
  }
  .footer{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    height: 55px;
    background: #F0F2F5;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height:100%;
      span:nth-child(1){
        color:#1890FF;
      }
    }
    .lf{
      width:40%;
    }
    .rt{
      width:60%;
      border-left:2px solid #fff;
    }
  }
  &:hover .mark{
    display: flex;
  }
  .mark{
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height: 100%;
    background:rgba(200,200,200,0.3);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

