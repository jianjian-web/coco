<template>
  <div class='contactDetails'>
    <p v-text='details.name' class='name'></p>
    <div class='details'>
      <p>公司名称 :<span v-text='details.company' class='item'></span></p>
      <p>手机号码 :<span v-text='details.telphone' class='itme'></span></p>
      <p>邮箱 :<span v-text='details.email' class='item'></span></p>
      <p>标签 :<span v-for='(item,index) in details.tagList' :key='index' class='item'>{{item }}</span></p>
      <p>所属活动分组 :</p>
    </div>
    <div class='tableWrapper'>
      <p class='name'>历史通话记录</p>
      <el-row>
        <el-col :span='4' class='row-item'>
          <el-input
            placeholder='请输入活动名称'
            suffix-icon='el-icon-search'
            v-model='searchData'>
          </el-input>
        </el-col>
        <el-col :span='4' class='row-item'>
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <div class='total'>
        <span>共搜索到 22 条数据</span>
      </div>
      <el-table
      :data="tableData"
      style="width: 100%"
      border
      >
      <el-table-column
        prop="name"
        label="姓名"
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
        label="手机号码"
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
        prop="callStatus"
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
  </div>
</template>

<script>
import {mapState} from 'vuex'
import coAudio from '../common/voice'
export default{
  name: 'contactDetails',
  data () {
    return {
      details: {},
      searchData: '',
      date: '',
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
  },
  computed: {
    ...mapState([
      'contactUserId'
    ])
  },
  components: {
    coAudio
  },
  created () {
    this.$http.get(`/contact/${this.contactUserId}`).then(res => {
      this.details = res.data.data[0]
      console.dir(this.details)
    }).catch(err => {
      console.log('查询联系人详情出错')
      console.dir(err)
    })
  }
}
</script>

<style lang='less' scoped>
.contactDetails{
  .name{
    font-size:1.3em;
    margin-bottom:15px;
  }
  .details{
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    .item{
      margin-left:10px;
    }
    p{
      flex:0 1 30%;
      margin-bottom: 20px;
      // border:1px solid red;
    }
  }
  .tableWrapper{
    margin-top:30px;
    .row-item{
      margin-right:10px;
    }
    .total{
      margin:15px 0;
      color:#666;
    }
  }
}
</style>
