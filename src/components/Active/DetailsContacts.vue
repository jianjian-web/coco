<template>
  <div class='DetailsContacts'>
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
        prop="toName"
        label="联系人"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="toCompany"
        label="公司名称"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="toPhoneText"
        label="联系方式"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="callStatus"
        label="呼叫状态"
        align='center'
        >
      </el-table-column>
      <el-table-column
        label="通话详情"
        align='center'
        width='250'
        >
        <template slot-scope="scope">
          <!-- <span v-text='scope.row.callVoice'></span> -->
          <co-audio></co-audio>
        </template>
      </el-table-column>
      <el-table-column
        prop="resultText"
        label="呼叫结果"
        align='center'
        >
      </el-table-column>
      <el-table-column
        prop="fromName"
        label="呼叫人"
        align='center'
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* 联系人 */
import coAudio from '../common/voice'
import {mapState} from 'vuex'
export default{
  name: 'DetailsContacts',
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
      tableData: []
    }
  },
  props: {
  },
  created () {
    this.$http.get(`/activity/contact/${this.contactUserId}/1/20`).then(res => {
      if (res) {
        this.tableData = res.data.data
      }
    })
  },
  computed: {
    ...mapState([
      'contactUserId'
    ])
  },
  components: {
    coAudio
  },
  watch: {
    Data (v) {
      console.dir(v)
      this.tableData = v
    }
  }
}
</script>

<style lang='less' scoped>
.DetailsContacts{
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

