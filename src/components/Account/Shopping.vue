<template>
  <div class='shopping'>
    <div class="main">
      <el-row>
        <el-col :span='4' class='col-item'>
          <el-input placeholder="请输入活动名称" suffix-icon='el-icon-search' :clearable='true'></el-input>
        </el-col>
        <el-col :span='4' class='col-item'>
          <el-select 
            v-model='searchType' 
            placeholder='消费类型' 
            style='width:100%'
            multiple
            :clearable='true'
            >
            <el-option
              v-for='item in typeOption'
              :key='item'
              :label='item'
              :value='item'>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span='4' class='col-item'>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <p class='total'>共搜索到 22 条数据</p>
      <el-table style="width: 100%" border :data='formData'>
        <el-table-column
          prop="date"
          label="交易流水号"
          align='center'
        >
        </el-table-column>
        <el-table-column
          prop="date"
          label="活动名称"
          align='center'
        >
        </el-table-column>
      <el-table-column
        prop="date"
        label="消费类型"
        align='center'
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="消费金额"
        align='center'
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="消费时间"
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
  name: 'Shopping',
  data () {
    return {
      date: '',
      formData: [],
      typeOption: ['类型1', '类型2', '类型3'],
      searchType: ''
    }
  }
}
</script>

<style lang='less' scoped>
.shopping{
  .main{
    margin-top:20px;
    .total{
      margin-top:20px;
      margin-bottom: 10px;
    }
    .col-item{
      margin-right:10px
    }
  }
}
</style>
