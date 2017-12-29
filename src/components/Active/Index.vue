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
          @change='handleSearch'
          >
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select v-model="publishStatus" placeholder="状态" style='width:100%' :clearable='true' @change='handlePulishStatusChange'>
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
    <p class='searchTotal'></p>
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
          prop="sumContact"
          label="联系人数"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="sumCaller"
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
          prop="createTime"
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
            <el-button :disabled="scope.row.status === '已发布'" type="text" size="small" @click.stop='handleEdit(scope.row)'>编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='pagination'>
        <!-- <span style='height:27px;line-height:27px;margin-top:-2px;margin-right:5px;'>草稿 {{totalCao}} 条</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
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
import curd from '../../mixin/curd'
import {mapMutations} from 'vuex'
import {SET_ACTIVE_DATA, SET_CONTACT_USERID} from '../../store/mutation-types'

export default {
  name: 'activeIndex',
  mixins: [curd],
  data () {
    return {
      input2: '',
      publishStatus: 1,
      options: [{
        value: 0,
        label: '草稿'
      }, {
        value: 1,
        label: '已发布'
      }],
      dateValue: '',
      tableData: [],
      currentPage: 1,
      total: 0,
      // totalCao: 0, // 草稿的总数
      pageSize: 10
    }
  },
  methods: {
    ...mapMutations([
      SET_ACTIVE_DATA, SET_CONTACT_USERID
    ]),
    handleAddItem () {
      this[SET_ACTIVE_DATA](null)
      this.$router.push({path: '/addActive'})
    },
    handleLookDetails (row) {
      if (row.status === '草稿') {
        return
      }
      console.dir(row)
      this[SET_CONTACT_USERID](row.id)
      this.$router.push({path: '/active/details'})
    },
    handleEdit (row) {
      console.dir(row)
      this[SET_ACTIVE_DATA](row)
      this.$router.push({path: '/addActive'})
    },
    refreshPage (data) {
      this.$_query('activity', this.currentPage, this.pageSize, data)
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.refreshPage()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.refreshPage()
    },
    handleSearch (v) { // 搜索活动名称
      this.refreshPage({name: v})
    },
    handlePulishStatusChange (v) { // 当状态改变，刷新试图
      this.refreshPage()
    }
  },
  components: {
    cardDo, cardDone
  },
  created () {
    // this.$http.get('/user/current').then(res => {
    //   console.dir(res)
    // })
    this.refreshPage()
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
      // display: flex;
      // align-items: center;
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
