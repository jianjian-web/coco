<template>
  <div class='myTeam'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span="4" class='row-item'>
        <el-input
          placeholder="请输入姓名/公司名称/手机号"
          suffix-icon="el-icon-search"
          v-model='searchValue'
          @change='handleSearchChange'
          :clearable='true'
          >
        </el-input>
      </el-col>
      <el-col :span="4" class='row-item'>
        <el-select :clearable='true' v-model="status" placeholder="状态" style='width:100%' @change='handleStatusChange'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    </div>
    <div class='total'>
      <span>共搜索到 22 条数据</span>
    </div>
    <div class='marginTop'>
      <el-tooltip class="item" effect="dark" content="导入联系人默认密码为111111" placement="top">
        <el-button type='primary' size="medium" @click='showImport = true'>批量导入</el-button>
      </el-tooltip>
      <el-button size="medium" @click='shwoAddDialog = true'>添加人员</el-button>
      <el-button v-if='status === "YES"' :type='status === "YES" ? "danger" : "success"' size='medium' @click='$_deleteMore("member", selections)' :disabled="selections.length == 0">{{status === 'YES' ? '禁用' : '启用'}}</el-button>
    </div>
    <!-- <div class='marginTop tip'>
      <span class='el-icon-info'></span>  已选择<span>2</span>项
    </div> -->
    <div class='tableWrapper marginTop'>
      <el-table
        :data="teamData"
        border
        style="width: 100%"
        max-height='450'
        @selection-change='handleSelectionChange'
        >
         <el-table-column
          type='selection'
          width='55'
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed
          prop="nickname"
          label="姓名"
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号码/固话"
          align="center"
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align='center'
          width='160'
          >
          <template slot-scope="scope">
            <!-- <el-button type="text" size="small" @click='handleLook(scope.row)'>查看</el-button> -->
            <el-button type="text" size="small" @click='handleEdit(scope.row)'>编辑</el-button>
            <el-button type="text" size="small" @click='handleToggleStatus(scope.row.id)'>{{status === 'YES' ? '禁用' : '启用'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class='pagination'>
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
    <dialog-edit @refresh='refreshPage' @close='showEditDialog = false' :dialogVisible='showEditDialog' :data='editData'></dialog-edit>
    <dialog-add @refresh='refreshPage' @close='shwoAddDialog = false' :dialogVisible='shwoAddDialog'></dialog-add>
    <dialog-import @refresh='refreshPage' @close='showImport = false' :dialogVisible='showImport' :uploadUrl='"/member/import"'></dialog-import>
  </div>
</template>

<script>
/* 我的团队 */
import dialogEdit from './DialogEdit'
import dialogAdd from './DialogAdd'
import dialogImport from '../common/CoUpload'
import generalOptions, {generalStatus} from '../../enums/status'
import curd from '../../mixin/curd'
export default {
  name: 'myTeam',
  mixins: [curd],
  data () {
    return {
      status: generalStatus.yes,
      searchValue: '',
      options: generalOptions('启用', '禁用'),
      currentPage: 1,
      total: 0,
      pageSize: 10,
      teamData: [],
      selections: [],
      showEditDialog: false,
      editData: {}, // 点击编辑后获取的当前行的数据，传给dialog
      shwoAddDialog: false,
      showImport: false,
      allSearchData: {}
    }
  },
  created () {
    this.refreshPage()
  },
  components: {
    dialogEdit, dialogAdd, dialogImport
  },
  methods: {
    refreshPage (isValid, searchData) {
      if (!searchData) searchData = {}
      this.$http.get(`/member/${this.currentPage}/${this.pageSize}`, {
        params: {
          params: {isValid: isValid || generalStatus.yes, nickname: searchData.nickname}
        }
      }).then(res => {
        this.total = res.data.totalCount
        this.teamData = res.data.data
      }).catch(err => {
        console.log('获取联系人列表数据错误')
        console.dir(err)
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.refreshPage()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.refreshPage()
    },
    handleSelectionChange (val) { // 勾选回调
      this.selections = val
    },
    handleEdit (v) {
      this.showEditDialog = true
      this.editData = v
      console.dir(this.editData)
    },
    handleToggleStatus (id) {
      if (this.status === 'YES') {
        this.$_deleteOne('member', id)
      } else {
        this.$http.patch(`/member/enable/${id}`).then(res => {
          this.refreshPage('NO')
        }).catch(err => {
          console.log('启用失败')
          console.dir(err)
        })
      }
    },
    handleStatusChange (v) {
      this.refreshPage(this.status, this.allSearchData)
    },
    handleSearchChange (v) {
      this.allSearchData.nickname = v
      this.allSearchData.phone = v
      console.dir(this.allSearchData)
      this.refreshPage(this.status, this.allSearchData)
    }
  }
}
</script>

<style lang='less' scoped>
.myTeam {
  .marginTop{
    margin-top:15px;
  }
  .titleContainer{
    .row-item{
      margin-right:10px;
    }
  }
  .total{
    margin-top:30px;
    color:#666;
  }
  .tableWrapper{
    .pagination{
      float: right;
      margin-top:20px;
    }
  }
}
</style>
