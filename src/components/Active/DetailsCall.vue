<template>
  <div class='detailsCall'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="4" class='row-item'>
        <el-input
          placeholder="请输入姓名/公司名称"
          suffix-icon="el-icon-search"
          v-model="search"
          :clearable='true'
          >
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="callStatus" placeholder="呼叫状态" style='width:100%' :clearable='true'>
          <el-option
            v-for="item in statusOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select 
          v-model="callResults" 
          placeholder="呼叫结果" 
          style='width:100%'
          :clearable='true'
        >
          <el-option
            v-for="item in callResultsOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
     </el-row>
     <div class='total'>
       共搜索到 <span>22</span> 条数据
     </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      >
      <el-table-column
        prop="name"
        label="呼叫人"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="呼叫人数"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="callResult"
        label="呼叫次数"
        align='center'
        >
      </el-table-column>
      <el-table-column
      prop="callStatus"
      label="接通次数"
      align='center'
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* 呼叫人 */
// import coAudio from '../common/voice'
export default{
  name: 'detailsCall',
  data () {
    return {
      search: '',
      callStatus: '',
      statusOption: [
        {
          value: 'ok',
          label: '接通'
        },
        {
          value: 'no',
          label: '未接通'
        }
      ],
      callResults: '',
      callResultsOption: [
        {
          value: 'ok',
          label: '接受'
        },
        {
          value: 'no',
          label: '拒绝'
        }
      ],
      time: '',
      tableData: [
        {
          name: '花花',
          company: 'anavss',
          phone: '13585517777',
          callStatus: 0,
          callVoice: 'http:www.baidu.com',
          callResult: '已完成',
          people: '小某'
        }]
    }
  }
}
</script>

<style lang='less' scoped>
.detailsCall{
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
    .total{
      color:#666;
      margin-top:20px;
      margin-bottom:15px;
    }
  }
}
</style>

