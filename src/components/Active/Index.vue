<template>
  <div class='activeIndex'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="4" class='row-item'>
        <el-input
          placeholder="请输入活动名称"
          suffix-icon="el-icon-search"
          v-model="input2"
          :clearable='true'
          >
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="value" placeholder="状态" style='width:100%' :clearable='true'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
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
    <p class='searchTotal'>共搜索到 22 条数据</p>
    <div class='active-main'>
      <el-button type='primary' style='margin-bottom:20px' @click='handleAddItem'>新建活动</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        max-height='450'
        @row-click='handleLookDetails'
        >
        <el-table-column
          prop="name"
          label="活动名称"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="number"
          label="联系人数"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="callNumber"
          label="呼叫人数"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="creatTime"
          label="创建时间"
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
          align='center'>
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
            <el-button type="text" size="small" @click.stop='handleEdit'>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='pagination'>
        <el-pagination
          :current-page="1"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="120">
        </el-pagination>
      </div>
    </div>
    <!-- <div class='active-card'> 这是原来的卡片，后改版，废弃。
      <div class='addCard' @click='handleAddItem'>
        <span class='el-icon-circle-plus-outline'></span><br>
        <span style='line-height:0px;'>新建活动</span>
      </div>
      <card-do title='霍霍霍'></card-do>
      <card-done></card-done>
      <card-done></card-done>
      <card-done></card-done>
    </div> -->
  </div>
</template>

<script>
import cardDo from './CardDo'
import cardDone from './CardDone'

export default {
  name: 'activeIndex',
  data () {
    return {
      input2: '',
      value: '',
      options: [{
        value: '草稿',
        label: '草稿'
      }, {
        value: '已发布',
        label: '已发布'
      }],
      dateValue: '',
      tableData: [{
        name: '客户满意度调查',
        number: '120人',
        callNumber: '3人',
        status: '草稿',
        creatTime: '2017-12-26'
      }]
    }
  },
  methods: {
    handleAddItem () {
      this.$router.push({path: '/addActive'})
    },
    handleLookDetails (row) {
      console.dir(row)
      this.$router.push({path: '/active/details'})
    },
    handleEdit () {
      this.handleAddItem()
    }
  },
  components: {
    cardDo, cardDone
  },
  created () {
    this.$http.get('/user/current').then(res => {
      console.dir(res)
    })
  }
}
</script>

<style lang='less' scoped>
.activeIndex{
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
  }
  .active-main{
    .pagination{
      float: right;
      margin-top:20px;
    }
  }
  .searchTotal{
    margin-top:30px;
    margin-bottom:10px;
  }
  .active-card{
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    .addCard{
      margin-right:20px;
      border-radius:5px;
      cursor: pointer;
      width:200px;
      border:1px dashed #EBEBEB;
      height:250px;
      background:#F0F2F5;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color:#8d8d8d;
      .el-icon-circle-plus-outline{
        font-size: 60px;
      }
    }
  }
}
</style>
