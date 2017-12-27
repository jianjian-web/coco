<template>
  <div class='recharge'>
    <div class='title'>
      <p class='lf'>
        可用余额: <span class='number'>0.00</span>元
      </p>
      <el-button class='rt' type='primary'>充值</el-button>
    </div>
    <p class='line'></p>
    <div class="main">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <p class='total'>共搜索到 22 条数据</p>
      <el-table style="width: 100%" border :data='formData'>
        <el-table-column
          prop="date"
          label="充值记录"
          align='center'
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="用户ID"
          align='center'
        >
        </el-table-column>
      <el-table-column
        prop="date"
        label="充值金额"
        align='center'
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="备注"
        align='center'
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="充值时间"
        align='center'
      >
      </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/* 我的账户 充值记录 */
export default {
  name: 'Recharge',
  data () {
    return {
      date: '',
      formData: []
    }
  }
}
</script>

<style lang='less' scoped>
.recharge{
  .title{
    // border:1px solid red;
    overflow: hidden;
    height:60px;
    line-height: 60px;
    margin-bottom:20px;
    .number{
      font-size:18px;
      margin-left:20px;
      font-weight: bold;
    }
    .rt{
      margin-top:10px;
    }
  }
  .line{
    margin:0 -20px;
    height: 20px;
    background:#F0F2F5;
  }
  .main{
    margin-top:20px;
    .total{
      margin-top:20px;
      margin-bottom: 10px;
    }
  }
}
</style>
