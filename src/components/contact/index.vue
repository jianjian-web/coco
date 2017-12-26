<template>
  <div class='contact'>
    <div class='titleContainer'>
     <el-row>
      <el-col :span='4' class='row-item'>
        <el-input
          placeholder='请输入姓名/公司名称/手机号'
          suffix-icon='el-icon-search'
          v-model='searchValue'
          @change='handleSearchChange'
          :clearable='true'
          >
        </el-input>
      </el-col>
      <el-col :span='4' class='row-item'>
        <el-select 
        v-model='searchTags' 
        placeholder='标签' 
        style='width:100%'
        @change="handleTagsChange"
        multiple
        :clearable='true'
        >
          <el-option
            v-for='item in tagsOption'
            :key='item'
            :label='item'
            :value='item'>
          </el-option>
        </el-select>
      </el-col>
      <!-- <el-col :span='4' class='row-item'>
        <el-select v-model='activeGroup' placeholder='所属活动分组' style='width:100%'>
          <el-option
            v-for='item in tagsOption'
            :key='item'
            :label='item'
            :value='item'>
          </el-option>
        </el-select>
      </el-col> -->
     </el-row>
    </div>
    <div class='total'>
      <span>共搜索到 22 条数据</span>
    </div>
    <div class='marginTop'>
      <el-button type='primary' size='medium' @click='showImport = true'>批量导入</el-button>
      <el-button size='medium' @click='handleAddClick'>添加联系人</el-button>
      <el-button size='medium' :disabled="selections.length == 0" @click='showTags = true'>打标签</el-button>
      <el-button type='danger' size='medium' @click='$_deleteMore("contact", selections)' :disabled="selections.length == 0">删除</el-button>
    </div>
    <div class='marginTop tip'>
      <div>
        <span class='el-icon-info'></span>  已选择<span v-text='selections.length' style='display:inline-block;width:20px;text-align:center'></span>项
      </div>
      <div class='tagsList'>
        <el-tag @click.native='handleTagClick(item)' size="small" type="info" closable @close="handleDeleteTag(item)" v-for='(item,index) in tagsOption' :key='index' style='margin-right:10px'>{{item}}</el-tag>
      </div>
    </div>
    <div class='tableWrapper marginTop'>
      <el-table
        :data='contactData'
        border
        style='width: 100%'
        max-height='450'
        @selection-change='handleSelectionChange'
        @cell-click='handleCellClick'
        >
        <!-- @row-click='handleLook' -->
        <el-table-column
          type='selection'
          width='55'
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed
          prop='name'
          label='姓名'
          align='center'
          width='120'
          class-name='cursor'
          >
        </el-table-column>
        <el-table-column
          prop='company'
          label='公司名称'
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop='telphone'
          label='手机号码'
          width='150'
          align='center'
          >
        </el-table-column>
        <el-table-column
          prop='email'
          label='邮箱'
          width='180'
          align='center'
          >
        </el-table-column>
        <el-table-column
          label='标签'
          align='center'
          >
          <template slot-scope='scope'>
            <div class='tagList'>
              <el-tag type='success' v-for='(item,index) in scope.row.tagList' :key='index'>{{item}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop='createTime'
          label='创建时间'
          align='center'
          >
        </el-table-column>
        <el-table-column
          fixed='right'
          label='操作'
          width='140'
          align='center'
          >
          <template slot-scope='scope'>
            <el-button type='text' size='small' @click.stop='handleLook(scope.row)'>查看</el-button>
            <el-button type='text' size='small' @click.stop='handleEdit(scope.row)'>编辑</el-button>
            <el-button type='text' size='small' @click.stop='$_deleteOne("contact",scope.row.id)'>删除</el-button>
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
    <dialog-edit 
      :dialogVisible='showDialog' 
      @refresh='refreshPage'  
      @close='showDialog = false' 
      :data='editData'
      :type='dialogType'
      :tags='tagsOption'
      > 
    </dialog-edit>

    <dialog-import @refresh='refreshPage' @close='showImport = false' :dialogVisible='showImport' :uploadUrl='"/contact/import"'></dialog-import>

    <dialog-tags @tags='handleMoreTags' @close='showTags = false' :dialogVisible='showTags' :tags='tagsOption'></dialog-tags>
  </div>
</template>

<script>
/* 联系人 */
import {mapMutations} from 'vuex'
import {SET_CONTACT_USERID} from '../../store/mutation-types'
import dialogEdit from './DialogEdit'
import dialogImport from '../common/CoUpload'
import dialogTags from './DialogAddTag'
import curd from '../../mixin/curd'
export default {
  name: 'contact',
  mixins: [curd],
  data () {
    return {
      searchTags: [], // 标签搜索关键词
      searchValue: '', // 搜索 姓名/公司名称/手机号的关键词
      activeGroup: '', // 搜索分组的关键词
      allSearchData: {// 所有的搜索条件 用这个去后端请求数据
      },
      tagsOption: [],  // 标签选项
      contactData: [],  // table数据
      currentPage: 1,
      pageSize: 10,
      total: 0,
      userId: '',
      showDialog: false,
      editData: {},
      dialogType: 'edit', // 用于dialog区分是编辑还是添加
      showImport: false,
      showTags: false,
      selections: [] // 勾选项
    }
  },
  created () {
    this.refreshPage()
  },
  components: {
    dialogEdit, dialogImport, dialogTags
  },
  methods: {
    ...mapMutations([
      SET_CONTACT_USERID
    ]),
    handleGetTags () { // 获取所有tags
      this.$http.get('/contact/tags').then(res => {
        this.tagsOption = res.data.data
      }).catch()
    },
    handleDeleteTag (tag) { // 删除一个tag
      this.$http.patch('/contact/tags/clear', {
        params: {tags: tag}
      }).then(res => {
        console.dir(res)
        this.refreshPage()
      }).catch(err => {
        console.dir(err)
      })
    },
    refreshPage (searchData) {
      this.handleGetTags()
      this.$http.get(`/contact/${this.currentPage}/${this.pageSize}`, {
        params: {params: searchData || null}
      }).then(res => {
        this.total = res.data.totalCount
        this.contactData = res.data.data
      }).catch(err => {
        console.log('获取联系人列表数据错误')
        console.dir(err)
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.refreshPage()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.refreshPage()
    },
    handleLook (val) {
      this[SET_CONTACT_USERID](val.id)
      this.$router.push({path: '/contact/details'})
    },
    handleEdit (v) {
      this.dialogType = 'edit'
      this.showDialog = true
      this.editData = v
      console.dir(this.editData)
    },
    handleAddClick () {
      this.dialogType = 'add'
      this.showDialog = true
    },
    handleSelectionChange (val) { // 勾选回调
      this.selections = val
    },
    handleMoreTags (tags) { // 将选中的用户批量打标签
      let ids = []
      ids = this.selections.map(item => {
        return item.id
      })
      this.$http.patch('/contact/tags', {
        params: {
          ids, tags
        }
      }).then(res => {
        this.refreshPage()
      }).catch(err => {
        console.log('打标签出错')
        console.dir(err)
      })
    },
    handleSearchChange (v) {
      this.allSearchData.name = v
      this.allSearchData.telphone = v
      this.allSearchData.company = v
      this.refreshPage(this.allSearchData)
    },
    handleTagsChange (v) {
      this.allSearchData.tagList = v
      this.refreshPage(this.allSearchData)
      console.dir(this.allSearchData)
    },
    handleTagClick (tag) {
      this.allSearchData.tagList = [tag]
      this.refreshPage(this.allSearchData)
    },
    handleCellClick (row, column, cell, event) {
      if (column.property === 'name') {
        this.handleLook(row)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.contact {
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
  .tip{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background:#E6F3FC;
    padding:10px;
    border-radius: 5px;
    color:#666;
    span:nth-child(1){
      color:#108EE9;
      margin-right:10px;
    }
    span:nth-child(2){
      color:#108EE9;
    }
    .tagsList{
      margin-left:20px
    }
  }
  .tableWrapper{
    .pagination{
      float: right;
      margin-top:20px;
    }
  }
  .tagList{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    span{
      margin:2px;
      padding:0 3px;
      height:22px;
      line-height: 22px;
    }
  }
}
</style>
