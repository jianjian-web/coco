<template>
  <div class='conversation-record'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="7" class='row-item'>
        <el-input
          placeholder="请输入联系人/公司名称/呼叫人/活动名称"
          suffix-icon="el-icon-search"
          v-model="searchValue">
        </el-input>
      </el-col>
      <el-col :span="5" class='row-item'>
        <el-select v-model="callStatus" placeholder="呼叫结果" style='width:100%' multiple>
          <el-option
            v-for="item in callOption"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-date-picker
          v-model="dateValue"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
     </el-row>
    </div>
    <p class='searchTotal'></p>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      ref='recordTable'
      >
      <el-table-column type="expand">
        <template slot-scope="props">
          <div>
            喂，您好，我是XX公司的客服人员，您前段时间在外面公司购买了xx产品，我这里来做一个简单的回访。。。
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="联系人"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司名称"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式"
        align='center'
        >
      </el-table-column>
      <el-table-column
        label="通话详情"
        align='center'
        width='250'
        >
        <template slot-scope="scope">
          <co-audio @transform='handleTransform(scope)'></co-audio>
        </template>
      </el-table-column>
      <el-table-column
        prop="callResult"
        label="呼叫结果"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="callStatus"
        label="活动名称"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="people"
        label="呼叫人"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="people"
        label="通话日期"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="people"
        label="通话起止时间"
        align='center'
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import coAudio from '../common/voice'
export default{
  name: 'Record',
  data () {
    return {
      searchValue: '',
      callStatus: [],
      callOption: ['接通', '挂断', '占线'],
      dateValue: '',
      tableData: [
        {
          name: '花花',
          company: 'anavss',
          phone: '13585517777',
          callStatus: 0,
          callVoice: 'http:www.baidu.com',
          callResult: '已完成',
          people: '小某'
        },
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
  },
  methods: {
    handleTransform (v) {
      this.$refs.recordTable.toggleRowExpansion(this.tableData[v.$index], true)
    }
  },
  components: {
    coAudio
  }
}
</script>

<style lang='less' scoped>
.conversation-record{
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
  }
  .searchTotal{
    margin-top:30px;
    margin-bottom:10px;
  }
}
</style>
